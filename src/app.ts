"use strict";
// 注意这里面的名词解释
// tag和attr:   <a-button-tag  style-atrribute="">
// tag段  <全tag含符号>
// tag左段  <tag的左半段,不含有右边尖括号
// tag/tag名称  <tag>
// tag符号 <>
// attr有value和name,没有名称就是指value
// 注意json格式,props在第二次,第一次是tag名称
// {tag:{props:xxx,里面可以穿插其他内容}}——会自动把没有props名称直接把值放在第一层/第一层有props属性名/第二层存在props属性名称的统一起来

import * as vs from "vscode";
import * as path from "path";
import {
    window,
    commands,
    ViewColumn,
    Disposable,
    TextDocumentContentProvider,
    Event,
    Uri,
    CancellationToken,
    workspace,
    CompletionItemProvider,
    ProviderResult,
    TextDocument,
    Position,
    CompletionItem,
    CompletionList,
    CompletionItemKind,
    SnippetString,
    Range,
    EventEmitter,
} from "vscode";
// import * as TAGS from "./config/ui-tags.json";
// import ATTRS from "./config/ui-attributes.js";


// import prettyHTML = require("pretty");

// 新版本不建议使用require,统一import很爽
import * as fs from "fs";
// 如果这个引用了就要打包进来
import prettyHTML from "pretty";




type JsonSet = {
    name: string;
    jsonpath: string;
};

type labelSet = {
    label_suffix: string;
    label_summary: string;
};

let jsonsets: JsonSet[] = vs.workspace.getConfiguration("cc-hint").get("jsonsetting") as any[];
let labelsets: labelSet = vs.workspace.getConfiguration("cc-hint").get("labelsetting");





let Tags = getJsons();


function getJsons() {
    let jsons = {};

    for (let jset of jsonsets) {
        let dir = jset.jsonpath === "" ? path.join(__dirname, "./api/" + jset.name) : jset.jsonpath;
        console.log('cccdir', dir);
        let json = getAllFilesFromPath(dir, "json");
        if (json != null) jsons = { ...jsons, ...json };
    }

    return jsons;
}

// 穿透取得path下面的所有文件名称列表
function getAllFilesFromPath(dir: string, types?: string | string[]) {
    types = [].concat(types);
    let files = {}; // 内容
    let filelist: any[] = []; // 
    let names: any[];


    try {
        names = fs.readdirSync(dir);  // 返回文件列表
    } catch { return null; }

    names.forEach((item, index) => {
        let fullPath = path.join(dir, item);
        let stat = fs.statSync(fullPath);
        // 文件夹就当成处理
        if (stat.isDirectory()) {
            files = { ...files, ...getAllFilesFromPath(fullPath, types) };
        }
        // 文件就filter一下type
        else if (types.includes(path.extname(item).replace(".", ""))) {
            filelist.push(fullPath);
        }
    });

    filelist.forEach(x => {
        let file: Object = JSON.parse(fs.readFileSync(path.resolve(x)).toString());
        let tag: string = toDash(path.basename(x, ".json"));
        // tag在第一层这个属于标准结构
        if (file.hasOwnProperty(tag)) { }
        // 第一层就有props属性
        else if (file.hasOwnProperty("props")) {
            file = { [tag]: file };
        }
        // 这种属于无props属性,直接把值放在第一层
        else {
            let tag: string = toDash(path.basename(x, ".json"));
            file = { [tag]: { props: file } };
        }

        files = { ...files, ...file };
    });

    return files;

}

/** 使用上面的递归的这个已经弃用,取得path下面的所有type文件内容,注意内容类型得在ts中有定义,比如json、ts等等,暂时只处理一层吧 */
function getFilesFromPath(dir: string, types?: string | string[]) {
    types = [].concat(types);
    let files = {};
    let names: any[];


    // 动态import导入容易出问题let js = await import(fullPath + ".json")还是使用fs的吧
    try {
        names = fs.readdirSync(dir).filter(x => types.includes(path.extname(x).replace(".", "")));  // 返回文件列表
    } catch {
        return null;   // 注意发生错误取不到数据的话直接返回
    }

    names.forEach(name => {
        let file = JSON.parse(fs.readFileSync(path.resolve(dir, name)).toString());
        files = { ...files, ...file };
    });
    return files;

}

export interface Query {
    path: string;
    label: string;
    detail: string;
    description: string;
}

export interface TagObject {
    text: string;
    offset: number;
}

export function encodeDocsUri(query?: Query): Uri {
    return Uri.parse(`antdv-helper://search?${JSON.stringify(query)}`);
}

export function decodeDocsUri(uri: Uri): Query {
    return <Query>JSON.parse(uri.query);
}

export class App {
    private _disposable!: Disposable;
    public WORD_REG: RegExp = /(-?\d*\.\d\w*)|([^\`\~\!\@\$\^\&\*\(\)\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\s]+)/gi;

    getSeletedText() {
        let editor = window.activeTextEditor;

        if (!editor) {
            return;
        }

        let selection = editor.selection;

        if (selection.isEmpty) {
            let text = [];
            let range = editor.document.getWordRangeAtPosition(selection.start, this.WORD_REG);

            return editor.document.getText(range);
        } else {
            return editor.document.getText(selection);
        }
    }

    setConfig() {
        // https://github.com/Microsoft/vscode/issues/24464
        const config = workspace.getConfiguration("editor");
        const quickSuggestions = config.get("quickSuggestions");
        if (!quickSuggestions["strings"]) {
            config.update("quickSuggestions", { strings: true }, true);
        }
    }

    openHtml(query, title) {
        const { label, detail } = query;
        const panel = window.createWebviewPanel(label, detail, ViewColumn.One, {
            enableScripts: true, // 启用JS，默认禁用
            retainContextWhenHidden: true, // webview被隐藏时保持状态，避免被重置
        });

        // And set its HTML content
        panel.webview.html = this.getWebviewContent(query);
    }

    openDocs(query?: Query, title = "antdv-helper", editor = window.activeTextEditor) {
        this.openHtml(query, title);
    }

    dispose() {
        this._disposable.dispose();
    }

    getWebviewContent(query: Query) {
        const config = workspace.getConfiguration("antdv-helper");
        const linkUrl = config.get("link-url");
        const path = query.path;
        const iframeSrc = `${linkUrl}/components/${path}`;
        return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Cat Coding</title>
    </head>
    <body>
      <iframe style="position: absolute;border: none;left: 0;top: 0;width: 100%;height: 100%;" src="${iframeSrc}"></iframe>
    </body>
    </html>`;
    }
}

const HTML_CONTENT = (query: Query) => {
    const config = workspace.getConfiguration("antdv-helper");
    const linkUrl = config.get("link-url");
    const path = query.path;
    const iframeSrc = `${linkUrl}/components/${path}`;
    return `
    <body style="background-color: white">
    <iframe style="position: absolute;border: none;left: 0;top: 0;width: 100%;height: 100%;" src="${iframeSrc}"></iframe>
    </body>`;
};

export class AntdvDocsContentProvider implements TextDocumentContentProvider {
    private _onDidChange = new EventEmitter<Uri>();

    get onDidChange(): Event<Uri> {
        return this._onDidChange.event;
    }

    public update(uri: Uri) {
        this._onDidChange.fire(uri);
    }

    provideTextDocumentContent(uri: Uri, token: CancellationToken): string | Thenable<string> {
        return HTML_CONTENT(decodeDocsUri(uri));
    }
}

export class AllCompletionItemProvider implements CompletionItemProvider {
    private _document: TextDocument;
    private _position: Position;
    // 含左tag段  eg <a-button-fuck
    private tagReg: RegExp = /<([\w-]+)\s+/g;
    // eg (aaa bbb ccc="aaa" 的 ccc以右部分
    private attrReg: RegExp = /(?:\(|\s*)(\w+)=['"][^'"]*/;
    // <tag 直接到行结束
    private tagStartReg: RegExp = /<([\w-]*)$/;
    private pugTagStartReg: RegExp = /^\s*[\w-]*$/;
    private size: number;
    private quotes: string;

    /** 取得前面的tag */
    getPreTag(): TagObject | undefined {
        let line = this._position.line;
        let tag: TagObject | string;
        let txt = this.getTextBeforePosition(this._position);

        while (this._position.line - line < 10 && line >= 0) {
            if (line !== this._position.line) {
                txt = this._document.lineAt(line).text;
            }
            tag = this.matchTag(this.tagReg, txt, line);

            if (tag === "break") return;
            if (tag) return <TagObject>tag;
            line--;
        }
        return;
    }

    getPreAttr(): string | undefined {
        let txt = this.getTextBeforePosition(this._position).replace(/"[^'"]*(\s*)[^'"]*$/, "");
        let end = this._position.character;
        let start = txt.lastIndexOf(" ", end) + 1;
        let parsedTxt = this._document.getText(new Range(this._position.line, start, this._position.line, end));

        return this.matchAttr(this.attrReg, parsedTxt);
    }

    matchAttr(reg: RegExp, txt: string): string {
        let match: RegExpExecArray;
        match = reg.exec(txt);
        return !/"[^"]*"/.test(txt) && match && match[1];
    }

    matchTag(reg: RegExp, txt: string, line: number): TagObject | string {
        let match: RegExpExecArray;
        let arr: TagObject[] = [];

        // eg 最后一个<标签><可能半个标签
        if (/<\/?[-\w]+[^<>]*>[\s\w]*<?\s*[\w-]*$/.test(txt) || (this._position.line === line && (/^\s*[^<]+\s*>[^<\/>]*$/.test(txt) || /[^<>]*<$/.test(txt[txt.length - 1])))) {
            return "break";
        }
        while ((match = reg.exec(txt))) {
            arr.push({
                text: match[1], // 只取出tag名
                offset: this._document.offsetAt(new Position(line, match.index)),
            });
        }
        return arr.pop();
    }

    /** 同一行范围 */
    getTextBeforePosition(position: Position): string {
        var start = new Position(position.line, 0);
        var range = new Range(start, position);
        return this._document.getText(range);
    }

    /** 取得当前位置tag建议列表 */
    getTagSuggestion() {
        let suggestions = [];

        let id = 100;
        for (let tag in Tags) {
            suggestions.push(this.buildTagSuggestion(tag, Tags[tag], id));
            id++;
        }
        return suggestions;
    }

    /** 取得当前位置attr建议列表 */
    getAttrSuggestion(tag: string) {
        let suggestions = [];
        let tagAttrs: string[] = this.getTagAttrs(tag);

        let preText = this.getTextBeforePosition(this._position);
        let prefix = preText
            .replace(/['"]([^'"]*)['"]$/, "")
            .split(/\s|\(+/)
            .pop();
        // method attribute
        const method = prefix[0] === "@";
        // bind attribute
        const bind = prefix[0] === ":";

        prefix = prefix.replace(/[:@]/, "");

        if (/[^@:a-zA-z\s]/.test(prefix[0])) { return suggestions; }

        tagAttrs.forEach(attr => {
            const attrItem = this.getAttrItem(tag, attr);
            if (attrItem && (!prefix.trim() || this.firstCharsEqual(attr, prefix))) {
                const sug = this.buildAttrSuggestion({ attr, tag, bind, method }, attrItem);
                sug && suggestions.push(sug);
            }
        });

        return suggestions;
    }

    getAttrValueSuggestion(tag: string, attr: string): CompletionItem[] {
        let suggestions = [];
        const values = this.getAttrValues(tag, attr);
        values.forEach((value) => {
            suggestions.push({
                label: value,
                kind: CompletionItemKind.Value,
            });
        });

        return suggestions;
    }


    // json ➔ 要求格式
    buildTagSuggestion(tag, tagVal, id) {
        const snippets = [];
        let index = 0;
        let that = this;
        function build(tag, { subtags, defaults }, snippets) {
            let attrs = "";
            defaults &&
                defaults.forEach((item, i) => {
                    attrs += ` ${item}=${that.quotes}$${index + i + 1}${that.quotes}`;
                });
            snippets.push(`${index > 0 ? "<" : ""}${tag}${attrs}>`);
            index++;
            subtags && subtags.forEach((item) => build(item, Tags[item], snippets));
            snippets.push(`</${tag}>`);
        }
        build(tag, tagVal, snippets);

        return {
            label: tag,
            sortText: `0${id}${tag}`,
            insertText: new SnippetString(prettyHTML("<" + snippets.join(""), { indent_size: this.size }).substr(1)),
            kind: CompletionItemKind.Snippet,
            detail: "CC-Hint",  // 副提示栏的大标题
            documentation: tagVal.description || tagVal.desc,
        };
    }

    // 生成对于vsc格式的建议
    buildAttrSuggestion({ attr, tag, bind, method }, attrItem) {
        let type = attrItem.type ?? null;
        if ((method && type === "method") || (bind && type !== "method") || (!method && !bind)) {
            let documentation = JSON.stringify(attrItem, null, "\n")
                .replace(/[\{\}]/g, "")
                .replace(/^\n+/gm, "\n")
                .replace(/(^.[^\:\n]*$)\n*/gm, "$1")  // 消除没有:的换行,主要是[]带来的换行
                .replace(/\[\n+/g, "[").replace(/\n+\]/g, "]");


            // optionType && (documentation += "\n" + `type: ${optionType}`);
            // defaultValue && (documentation += "\n" + `default: ${defaultValue}`);
            let label_suf = attrItem.label_suffix ?? labelsets.label_suffix;
            let label_sum = attrItem.label_summary ?? labelsets.label_summary;

            return {
                // label: attr,  
                // 正常上面一个值就行,但是建议如下面提供更多的信息以方便使用
                label: { label: attr, detail: label_suf, description: label_sum },
                insertText: attrItem.type && type === "flag" ? `${attr} ` : new SnippetString(`${attr}=${this.quotes}$1${this.quotes}$0`),
                kind: type && type === "method" ? CompletionItemKind.Method : CompletionItemKind.Property,
                detail: "CC-Hint",
                documentation,
            };
        } else {
            return;
        }
    }

    getAttrValues(tag, attr) {
        let attrItem = this.getAttrItem(tag, attr);
        let options = attrItem && attrItem?.options || attrItem.examples;
        if (!options && attrItem) {
            if (attrItem?.type === "boolean") {
                options = ["true", "false"];
            }
        }
        return options || [];
    }

    getTagAttrs(tag: string) {
        return Tags[tag]?.attributes || Object.keys(Tags[tag]?.props) || Object.keys(Tags[tag]?.Props) || [];

    }

    getAttrItem(tag: string | undefined, attr: string | undefined) {

        return (Tags[tag]?.props || Tags[tag]?.Props)[attr];

        // return ATTRS[`${tag}/${attr}`] || ATTRS[attr];
    }

    isAttrValueStart(tag: Object | string | undefined, attr) {
        return tag && attr;
    }

    isAttrStart(tag: TagObject | undefined) {
        return tag;
    }

    isTagStart() {
        let txt = this.getTextBeforePosition(this._position);
        return this.tagStartReg.test(txt);
    }

    firstCharsEqual(str1: string, str2: string) {
        if (str2 && str1) {
            return str1[0].toLowerCase() === str2[0].toLowerCase();
        }
        return false;
    }
    // tentative plan for vue file
    notInTemplate(): boolean {
        let line = this._position.line;
        while (line) {
            if (/^\s*<script.*>\s*$/.test(<string>this._document.lineAt(line).text)) {
                return true;
            }
            line--;
        }
        return false;
    }
    // 必须实现这个接口要求的函数
    provideCompletionItems(document: TextDocument, position: Position, token: CancellationToken): ProviderResult<CompletionItem[] | CompletionList> {
        this._document = document;
        this._position = position;

        const config = workspace.getConfiguration("CC-Hint");
        this.size = 4;
        const normalQuotes = '"';
        // this.size = config.get("indent-size");
        // const normalQuotes = config.get("quotes") === "double" ? '"' : "'";
        this.quotes = normalQuotes;

        let tag: TagObject | string | undefined = this.getPreTag();

        // 取得当前位置的tag
        let attr = this.getPreAttr();
        if (this.isAttrValueStart(tag, attr)) {
            return this.getAttrValueSuggestion(tag.text, attr);
        } else if (this.isAttrStart(tag)) {
            return this.getAttrSuggestion(tag.text);
        } else if (this.isTagStart()) {
            switch (document.languageId) {
                case "vue":
                    return this.notInTemplate() ? [] : this.getTagSuggestion();
                case "html":
                    // todo
                    return this.getTagSuggestion();
            }
        } else {
            return [];
        }
    }

}

// 驼峰转横线
function toDash(str: string): string {
    return str.replace(/(?<=.)([A-Z])/g, "-$1").toLowerCase();
}


// 横线转驼峰
function toHump(str: string): string {
    return str.replace(/\_(\w)/g, function (all, letter) {
        return letter.toUpperCase();
    });
}



