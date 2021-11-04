// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "uniks" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('uniks.uniksNum', function () {
		// The code you place here will be executed every time your command is executed
		let min =Math.floor(Math.random() * 10) ;
		let max=Math.floor(Math.random() * 11) ;
		let res= Math.floor(1000 + Math.random() * 900000000000000000);
		// Display a message box to the user

		function uuidv4() {
			return 'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			  var r = Math.random() * 18 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
			  return v.toString(18);
			});
		  }
		  //return uuidv4();
		  const editor = vscode.window.activeTextEditor;
		  const position = editor.selection.active;
		  editor.edit(builder => builder.insert(position,uuidv4()));
		
		//vscode.window.showInformationMessage(uuidv4()+'');
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
