import { vscriptGenerator } from "./generator.mjs";

// color
vscriptGenerator['colour_rgb'] = function(block) {
    const r = vscriptGenerator.statementToCode(block, 'RED');
    const g = vscriptGenerator.statementToCode(block, 'GREEN');
    const b = vscriptGenerator.statementToCode(block, 'BLUE');
    return `${r} ${g} ${b}`;
}