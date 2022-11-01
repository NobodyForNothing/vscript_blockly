import { colors } from "./customBlockDefaults.mjs";
import { getModelSelectionPromise  } from "../selection/selectionMenu.mjs";
import { portal2_models } from "../../js/models.mjs";

export const customBlockValues = {};

customBlockValues.mdl_select = ['-']
Blockly.Blocks['mdl_select'] = { 
  // block to select model
  // dropdownlist opens model selector
  // default value is undefined
  // the block value is stored externally in customBlockValues
  // each block stores its index
  // after each model selection it gets updated
  init: function() {
    this.setColour(colors.lists,);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setOutput(true);
  
    let button = new Blockly.FieldDropdown([["select model", `${customBlockValues.mdl_select.length}`]]);
    button.showEditor_=(()=>{ 
      // instead of showing default selection menu show custom menu
      const promise = getModelSelectionPromise(portal2_models);
      promise.then((selection)=>{
        // todo: find way to save to block dropdown
        const savedArrayIndex = button.menuGenerator_[0][1]
        customBlockValues.mdl_select[savedArrayIndex] = selection;
      });
    });
    this.appendDummyInput()
      .appendField('model:')
      .appendField(button,'MODELINDEX');
  }
}