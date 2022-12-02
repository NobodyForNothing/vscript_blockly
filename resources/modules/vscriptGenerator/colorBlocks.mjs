import { vscriptGenerator } from "./generator.mjs";

// color
vscriptGenerator['color_rgb'] = function (block) {
  const r = vscriptGenerator.statementToCode(block, 'RED');
  const g = vscriptGenerator.statementToCode(block, 'GREEN');
  const b = vscriptGenerator.statementToCode(block, 'BLUE');
  return `${r} ${g} ${b}`;
}

vscriptGenerator['colour_wheel'] = function (block) {
  const color = block.colorWheel.value;
  return `${color.r} ${color.g} ${color.b}`;
}

