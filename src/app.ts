"use strict";
// 注意这里面的名词解释
// tag和attr:   <a-button-tag  style-attribute="">
// tag段  <全tag含符号>
// tag左段  <tag的左半段,不含有右边尖括号
// tag/tag名称  <tag>
// attr有value和name,默认不带value就是指name
// 注意json格式,props在第二次,第一次是tag名称
// {tag:{props:xxx,里面可以穿插其他内容}}——会自动把没有props名称直接把值放在第一层/第一层有props属性名/第二层存在props属性名称的统一起来

// 注意如下区域定义  inAttr = atAttr + atAttrValue + =""等位置 tagReg=at+in
// <atTag inTag atAttr="atAttrValue" inTag> underTag   </>

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
    HoverProvider,
    ProviderResult,
    TextDocument,
    Position,
    CompletionItem,
    CompletionList,
    CompletionItemKind,
    SnippetString,
    Range,
    EventEmitter,
    Hover
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

// 最终生成的是一个tag-obj,里面有各种attr属性,props是其中之一,层次是 Tags.tag.attr
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

//  主要为了quickfind,没啥用,可以删除,保留为了以后学习用
export class App {
    private _disposable!: Disposable;
    public WORD_REG: RegExp = /(-?\d*\.\d\w*)|([^\`\~\!\@\$\^\&\*\(\)\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\s]+)/gi;

    getSeletedText() {
        let editor = window.activeTextEditor;

        if (!editor) { return; }

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

// provide compeletion items and hover hint
export class AllItemProvider implements CompletionItemProvider, HoverProvider {

    private _document: TextDocument;
    private _position: Position;
    /** 含左tag段  [0] ➔ all_result [1] ➔ 不捕获  [2] ➔ tag_name [3] ➔ in_tag_content */
    private tagReg: RegExp = /(?<=(<.*> *)*)<([-\w一-龟]*)(\s*[^<]*)$/;
    // notice inTag and underTag
    private inTagReg: RegExp = /(?<=(<.*> *)*)<([-\w一-龟]+)\s+[^<]*$/;
    // 注意没有全局标志，可以提取到tag
    private atTagReg: RegExp = /(?<=(<.*> *)*)<[-\w一-龟]*$/;
    // eg (aaa bbb ccc="aaa" 的 ccc以右部分
    private attrReg: RegExp = /(?:\(|\s*)([-\w一-龟]+)=['"][^'"]*/;
    /** 处于attr所在领域, 如果含最后一个'"则不匹配,[0] ➔ all_result  [1] ➔ attr_name [2] ➔ ="in_attr_content" */
    private inAttrReg: RegExp = /(?<=\s+)([-\w一-龟]+)(=['"][^'"=\<\>]*|=[^'" ]*)?$/;
    // <tag 直接到行结束
    private tagStartReg: RegExp = /<([-\w一-龟]*)$/;
    private pugTagStartReg: RegExp = /^\s*[\w-]*$/;
    private size: number;
    private quotes: string;

    // getTag/attr的时候会修改这个值,通过这个值判断suggetion以及hint时候的具体位置——原思路优化一下,避免重复运行匹配
    private inputLocation: "atTag" | "inTag" | "underTag" | "atAttr" | "inAttr" | "atAttrValue" | "noTag" = "noTag";
    private hoverLocation: "atTag" | "inTag" | "underTag" | "atAttr" | "inAttr" | "atAttrValue" | "noTag" = "noTag";

    /** 取得前面的tag,如果在tag文字内,截取tagleft,如果在tag标签内 */
    getPreTag(): string {
        this.inputLocation = "noTag";

        let line = this._position.line;
        let tag: string;
        let text = this.getTextBeforePosition(this._position);

        // 已经考虑到了可能会跨行的情况
        // 已经考虑到了可能会跨行的情况
        while (this._position.line - line < 10 && line >= 0) {
            if (line !== this._position.line) {
                text = this._document.lineAt(line).text;
            }

            let tag = text.match(this.tagReg);

            // 注意match[0]只要不是null, group时候没有匹配实际返回 ➔ 空字符串""
            if (tag && tag[3] === "") {
                this.inputLocation = "atTag";
                return tag[2];
            }
            else if (tag) {
                this.inputLocation = "inTag";
                return tag[2];
            }

            line--;
        }
        return null;
    }

    /** if atTag get it, else not */
    getThisTag(): string {
        this.hoverLocation = "noTag";


        let line = this._position.line;
        let tag: string;
        let text = this.getTextBeforePosition(this._position);

        // 已经考虑到了可能会跨行的情况
        while (this._position.line - line < 10 && line >= 0) {
            if (line !== this._position.line) text = this._document.lineAt(line).text;

            let tag = text.match(this.tagReg);

            // 注意match[0]只要不是null, group时候没有匹配实际返回 ➔ 空字符串""
            if (tag && tag[3] === "") {
                this.hoverLocation = "atTag";
                let tag_right = this._document.getText(new Range(this._position, new Position(this._position.line + 1, 0))).match(/[-\w一-龟]*/)?.at(0) ?? "";
                return tag[2] + tag_right;
            }
            else if (tag) {
                this.hoverLocation = "inTag";
                return tag[2];
            }
            line--;
        }
        return null;

        // let line = this._position.line;
        // let tag: string;
        // let txt = this.getTextBeforePosition(this._position);

        // // 已经考虑到了可能会跨行的情况,目前设置就是10行,可以设置更多但可能没有必要
        // while (this._position.line - line < 10 && line >= 0) {
        //     if (line !== this._position.line) {
        //         txt = this._document.lineAt(line).text;
        //     }

        //     tag = txt.match(/(?<=<)[-\w一-龟]*/)?.at(0);
        //     if (tag && tag != "") return tag;
        //     line--;
        // }
        // return;
    }

    /** 取得当前的attr,注意这里面没有跨行的情况, 逻辑 attrname = left + right, cause of cursor splitting */
    getThisAttr(): string | undefined {
        // 把最后一个等号也待着吧用于下一步判断,以及考虑中文变量
        let attr = this.getTextBeforePosition(this._position).match(this.inAttrReg);
        if (!attr) return "";
        let right = "";

        if (attr[2] != "") {
            this.hoverLocation = "atAttrValue";
            right = this._document.getText(new Range(this._position, new Position(this._position.line + 1, 0))).match(/[-\w一-龟]*/)?.at(0) ?? "";
        }
        else if (attr[1] != "") {
            this.hoverLocation = "atAttr";
        }


        // let left = attr?.replace(/=.*$/, "");
        return attr[1] + right;
    }

    /** 取得当前的attr,注意这里面没有跨行的情况, 逻辑 attr = left + right */
    getPreAttr(): string {
        // 把最后一个等号也待着吧用于下一步判断,以及考虑中文变量
        let attr = this.getTextBeforePosition(this._position).match(this.inAttrReg);
        // let right = text?.includes("=") ? "" : (this._document.getText(new Range(this._position, new Position(this._position.line + 1, 0))).match(/[-\w一-龟]*/)?.at(0) ?? "");

        if (!attr) return "";

        if (attr[2] != "") {
            this.inputLocation = "atAttrValue";
        }
        else if (attr[1] != "") {
            this.inputLocation = "atAttr";
        }

        return attr[1];
    }


    /** 取出attr的匹配部分 */
    matchAttr(reg: RegExp, txt: string): string {
        let match: RegExpExecArray;
        match = reg.exec(txt);
        return !/"[^"]*"/.test(txt) && match && match[1];
    }


    /** 同一行范围,前面的文本 */
    getTextBeforePosition(position: Position): string {
        var start = new Position(position.line, 0);
        var range = new Range(start, position);
        return this._document.getText(range);
    }

    /** 取得当前位置tag建议列表 */
    getTagSuggestion() {
        let suggestions = [];
        console.log('ccc_tagslist', Tags);
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
            detail: "cc-hint",  // 副提示栏的大标题
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
                detail: "cc-hint",
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

        const config = workspace.getConfiguration("cc-hint");
        this.size = 4;
        const normalQuotes = '"';
        this.quotes = normalQuotes;

        let tag = this.getPreTag() as string;
        let attr: string;
        console.log('ccc_tag', tag);

        if (this.inputLocation === "inTag") {
            attr = this.getPreAttr();
            console.log('ccc_attr', attr);
        }


        if (this.inputLocation === "atTag") {
            console.log('ccc_attag', tag);
            switch (document.languageId) {
                case "vue":
                    return this.notInTemplate() ? [] : this.getTagSuggestion();
                case "html":
                    return this.getTagSuggestion();
            }
        } else if (this.inputLocation === "inTag" || this.inputLocation === "atAttr") {
            return this.getAttrSuggestion(tag);

        } else if (this.inputLocation === "atAttrValue") {
            return this.getAttrValueSuggestion(tag, attr);

        } else {
            return [];
        }


    }

    // hover要求的函数
    provideHover(document: TextDocument, position: Position, token: CancellationToken): ProviderResult<Hover> {
        let hover = new Hover("cc-hover-hint");


        this._document = document;
        this._position = position;

        const config = workspace.getConfiguration("cc-hint");
        this.size = 4;
        const normalQuotes = '"';
        // this.size = config.get("indent-size");
        // const normalQuotes = config.get("quotes") === "double" ? '"' : "'";
        this.quotes = normalQuotes;


        // 取得当前位置的tag
        let tag = this.getThisTag();
        let attr: string;
        // 取得当前位置的attr
        if (tag) attr = this.getThisAttr();

        // tofix as any
        if (this.hoverLocation === "atTag") {
            //  tofix
            let tagVal = Tags[tag];
            let desc = tagVal.description || tagVal.desc || "";
            hover.contents.push(desc);
            return hover;
        }
        else if (this.hoverLocation === "atAttr" || this.hoverLocation === "atAttrValue") {
            let documentation = JSON.stringify(this.getAttrItem(tag, attr) ?? "", null, "\n")
                .replace(/[\{\}]/g, "")
                .replace(/^\n+/gm, "\n")
                .replace(/(^.[^\:\n]*$)\n*/gm, "$1")  // 消除没有:的换行,主要是[]带来的换行
                .replace(/\[\n+/g, "[").replace(/\n+\]/g, "]");

            hover.contents.push(documentation);
            return hover;

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



