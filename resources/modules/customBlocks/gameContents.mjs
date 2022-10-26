import { colors } from "./customBlockDefaults.mjs";
import { showModelSelection  } from "../../index.js";

export const customBlockValues = {};

customBlockValues.mdl_select = ['-']
Blockly.Blocks['mdl_select'] = { 
  // block to select model
  // dropdownlist opens model selector
  // default value is '-'
  // each block saves its index and passes to model selector
  // after model selection it gets saved to global array
  // customBlockValues.mdl_select = []
  init: function() {
    this.setColour(colors.lists,);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setOutput(true);
  
    let button = new Blockly.FieldDropdown([["select model", `${customBlockValues.mdl_select.length}`]]);
    button.showEditor_=(()=>{ 
      // instead of showing default selection menu show custom menu
      showModelSelection(button.menuGenerator_[0][1]); // saved array index
    });
    this.appendDummyInput()
      .appendField('model:')
      .appendField(button,'MODELINDEX');
  }
}