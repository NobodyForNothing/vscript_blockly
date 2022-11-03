import { vscriptGenerator } from "./generator.mjs";

// p2 console
vscriptGenerator['console_print'] = function (block) {
  const text = vscriptGenerator.statementToCode(block, 'TEXT');
  return `printl(${text});\n`;
}
vscriptGenerator['console_execute'] = function (block) {
  const command = vscriptGenerator.statementToCode(block, 'COMMAND');
  return `SendToConsole(${command});\n`;
}
vscriptGenerator['console_execute_client'] = function (block) {
  const command = vscriptGenerator.statementToCode(block, 'COMMAND');
  return `ddutil.clientExecute(${command})`
}