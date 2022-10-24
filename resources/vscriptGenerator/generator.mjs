export const vscriptGenerator = new Blockly.Generator('Vscript');

vscriptGenerator.initNameDB = function(workspace) {
    if (vscriptGenerator.nameDB_) return;
    vscriptGenerator.nameDB_ = new Blockly.Names(vscriptGenerator.RESERVED_WORDS_);
    vscriptGenerator.nameDB_.setVariableMap(workspace.getVariableMap());
    vscriptGenerator.nameDB_.populateVariables(workspace);
    vscriptGenerator.nameDB_.populateProcedures(workspace);
}

vscriptGenerator.idToName = function(id) { // todo find cleaner implementation
    return vscriptGenerator.nameDB_.getNameForUserVariable_(id);
}

// allow stacking
vscriptGenerator.scrub_ = function(block, code, opt_thisOnly) {
    const nextBlock =
        block.nextConnection && block.nextConnection.targetBlock();
    if (nextBlock && !opt_thisOnly){
    return code + ';\n' + vscriptGenerator.blockToCode(nextBlock)
    } else if(false) { // todo: detect end of file scenarios
    return code += ';'
    }
    return code;
};

// order
vscriptGenerator.ORDER_NONE = 99;
