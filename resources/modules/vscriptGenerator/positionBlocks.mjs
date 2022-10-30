import { vscriptGenerator } from "./generator.mjs";
import { customBlockValues } from "../customBlocks/gameContents.mjs";

// vector
vscriptGenerator['vector'] = function (block) {
    const x = vscriptGenerator.statementToCode(block, 'X');
    const y = vscriptGenerator.statementToCode(block, 'Y');
    const z = vscriptGenerator.statementToCode(block, 'Z');
    return `Vector(${x}, ${y}, ${z})`;
};
vscriptGenerator['vector_get_element'] = function (block) {
    const value = block.getFieldValue('VALUE');
    const vector = vscriptGenerator.statementToCode(block, 'VEC');
    return `${vector}['${value.toLowerCase()}']`;
};
vscriptGenerator['vector_set_element'] = function (block) {
    const value = block.getFieldValue('VALUE');
    const vector = vscriptGenerator.statementToCode(block, 'VEC');
    const to = vscriptGenerator.statementToCode(block, 'VAL');
    return `${vector}['${value.toLowerCase()}'] = ${to};`;
};
vscriptGenerator['vector_math'] = function (block) {
    const mode = block.getFieldValue('MODE');
    const vector = vscriptGenerator.statementToCode(block, 'VECTOR');
    const value = vscriptGenerator.statementToCode(block, 'VALUE');
    switch (mode) {
        case 'ADD':
            return `(${vector}+${value})`;
            break;
        case 'SUBSTRACT':
            return `(${vector}-${value})`;
            break;
        case 'TIMES':
            return `(${vector}*${value})`;
            break
    }
}

// util
vscriptGenerator['util_destroy'] = function (block) {
    const entity = block.getFieldValue('ENT');
    return `${entity}.Destroy();`;
}


vscriptGenerator['mdl_select'] = function (block) {
    const index = block.getFieldValue('MODELINDEX');
    const value = customBlockValues.mdl_select[index];
    return `"${value}"`;
};