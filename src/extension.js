const vscode = require('vscode');

exports.activate = (context) => {
  context.subscriptions.push(...[
    vscode.commands.registerCommand(
      'reveal-button.reveal',
      () => vscode.commands.executeCommand('workbench.files.action.showActiveFileInExplorer')
    ),
    vscode.commands.registerCommand(
      'reveal-button.revealInOS',
      () => vscode.commands.executeCommand('revealFileInOS')
    )
  ]);
}
