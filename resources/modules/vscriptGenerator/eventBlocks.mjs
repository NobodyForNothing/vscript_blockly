import { vscriptGenerator } from "./generator.mjs";

// events
vscriptGenerator['setup'] = function(block) {
    const setupCode = vscriptGenerator.statementToCode(block, 'CODE');
    return `ddutil.runOnSetup(function() {\n${setupCode}\n});`
}
vscriptGenerator['tick'] = function(block) {
    const actions = vscriptGenerator.statementToCode(block, 'CODE');
    return `ppmod.interval(function() {\n${actions}\n});`
}