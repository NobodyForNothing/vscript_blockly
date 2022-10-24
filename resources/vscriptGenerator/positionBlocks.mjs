import { vscriptGenerator } from "./generator.mjs";

// vector
vscriptGenerator['vector'] = function(block) {
    const x = vscriptGenerator.statementToCode(block, 'X');
    const y = vscriptGenerator.statementToCode(block, 'Y');
    const z = vscriptGenerator.statementToCode(block, 'Z');
    return `Vector(${x}, ${y}, ${z})`;
}

vscriptGenerator['mdl_select'] = function(block) {
    const index = block.getFieldValue('MODELINDEX');
    const value = customBlockValues.mdl_select[index];
    return `"${value}"`;
}