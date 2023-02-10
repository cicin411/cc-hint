"use strict";

// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { App, AllItemProvider } from "./app.js";

// 下面的这个原版的antd-helper基本没有什么用直接弃用吧
// import COMPONENTS from "./config/components.js";

// const components: any[] = [];
// Object.keys(COMPONENTS).forEach((item) => {
//     components.push({
//         ...COMPONENTS[item],
//         path: item,
//     });
// });
// no problem ↑


// this method is called when your extension is activated
export function activate(context: vscode.ExtensionContext) {

    if (!["vue", "html", "tsx", "jsx"].includes(vscode.window.activeTextEditor.document.languageId)) return;

    // console.log('ccc_component', components);
    let app = new App();
    app.setConfig();


    // let docs = new AntdvDocsContentProvider();
    // let = vscode.workspace.registerTextDocumentContentProvider("antdv-helper", docs);
    let completionItemProvider = new AllItemProvider();

    let selector = [
        { language: "vue", scheme: "file" },
        { language: "html", scheme: "file" },
        { language: "tsx", scheme: "file" },
        { language: "jsx", scheme: "file" },
    ];
    let triggerCharacters = ["", " ", ":", "<", '"', "'", "/", "@", "(",];
    let completion = vscode.languages.registerCompletionItemProvider(selector, completionItemProvider, ...triggerCharacters);
    let hoverhint = vscode.languages.registerHoverProvider(selector, completionItemProvider);

    // 设置vue中的word pattern
    let vueLanguageConfig = vscode.languages.setLanguageConfiguration("vue", { wordPattern: app.WORD_REG });


    // let quickFindAntdv = vscode.commands.registerCommand("cc-hint.quickFindAntdv", () => {
    //     const selection = app.getSeletedText();
    //     let items = components.map(item => ({
    //         label: item.tag,
    //         detail: item.title.toLocaleLowerCase() + " " + item.subtitle,
    //         path: item.path,
    //         description: item.type,
    //     }));
    //     if (items.length < 1) { vscode.window.showInformationMessage("Initializing。。。, please try again."); return; }
    //     let find = items.filter((item) => item.label === selection);
    //     if (find.length) {
    //         app.openDocs(find[0], find[0].label);
    //         return;
    //     }
    //     // cant set default value for this method? angry.
    //     vscode.window.showQuickPick(items).then(selected => {
    //         selected && app.openDocs(selected, selected.label);
    //     });
    // });

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let helloWorld = vscode.commands.registerCommand("cc-hint.helloWorld", () => {
        vscode.window.showInformationMessage("cc-hint is really useful");
    });
    // context.subscriptions.push(app, helloWorld, quickFindAntdv, completion, vueLanguageConfig);
    context.subscriptions.push(app, helloWorld, completion, hoverhint, vueLanguageConfig);
}


// this method is called when your extension is deactivated
export function deactivate() { }
