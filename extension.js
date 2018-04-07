// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
let { update, rename, add, revert, diff, commit, log } = require('./lib/rabbitvcs-svn.js');

function activate (context) {

    console.log('rabbitvcs插件激活');

    let commitCmd = vscode.commands.registerCommand('extension.commit', function (params) {
        commit(params.path);
        // vscode.window.showInformationMessage('更新svn代码');
    });

    let updateCmd = vscode.commands.registerCommand('extension.update', function (params) {
        update(params.path);
        // vscode.window.showInformationMessage('更新svn代码');
    });

    let renameCmd = vscode.commands.registerCommand('extension.rename', function (params) {
        rename(params.path);
        // vscode.window.showInformationMessage('更新svn代码');
    });

    let addCmd = vscode.commands.registerCommand('extension.add', function (params) {
        add(params.path);
        // vscode.window.showInformationMessage('更新svn代码');
    });

    let revertCmd = vscode.commands.registerCommand('extension.revert', function (params) {
        revert(params.path);
        // vscode.window.showInformationMessage('更新svn代码');
    });

    let diffCmd = vscode.commands.registerCommand('extension.diff', function (params) {
        diff(params.path);
        // vscode.window.showInformationMessage('更新svn代码');
    });

    let logCmd = vscode.commands.registerCommand('extension.log', function (params) {
        log(params.path);
        // vscode.window.showInformationMessage('更新svn代码');
    });

    /* ,{
        "command": "extension.diff",
        "group": "9_cutcopypaste"
    },{
        "command": "extension.revert",
        "group": "9_cutcopypaste"
    },{
        "command": "extension.add",
        "group": "9_cutcopypaste"
    },{
        "command": "extension.rename",
        "group": "9_cutcopypaste"
    } */

    context.subscriptions.push(commitCmd, updateCmd, renameCmd, addCmd, revertCmd, diffCmd, logCmd);
}
exports.activate = activate;

function deactivate () {
}
exports.deactivate = deactivate;