import { vscriptGenerator } from "./generator.mjs";

vscriptGenerator['debug_draw_box'] = function (block) {
  const origin = vscriptGenerator.statementToCode(block, 'ORIGIN');
  const size = vscriptGenerator.statementToCode(block, 'SIZE');
  const color = vscriptGenerator.statementToCode(block, 'COLOR');
  const opacity = vscriptGenerator.statementToCode(block, 'OPACITY');
  const duration = vscriptGenerator.statementToCode(block, 'DURATION');

  const commaSeperatedColor = color.trim().replace(/ +(?= )/g,', '); // replace however many spaces present

  return `DebugDrawBox(${origin}, Vector(0,0,0), ${size}, ${commaSeperatedColor}, ${opacity}, ${duration});\n`;
}