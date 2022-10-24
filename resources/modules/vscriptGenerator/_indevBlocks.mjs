import { vscriptGenerator } from "./generator.mjs";

vscriptGenerator['entity_move_to'] = function(block) {
    const ent1 = vscriptGenerator.statementToCode(block, 'ENT1');
    const ent2 = vscriptGenerator.statementToCode(block, 'ENT2');
    return `${ent1}.SetOrigin(${ent2}.GetOrigin());`;
}