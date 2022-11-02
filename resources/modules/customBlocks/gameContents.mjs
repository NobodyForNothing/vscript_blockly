import { colors } from "./customBlockDefaults.mjs";
import { getModelSelectionPromise  } from "../selection/selectionMenu.mjs";
import { portal2_models } from "../../js/models.mjs";
import { reloadWorkspace } from "../export-import.mjs";


Blockly.Blocks['select_mdl'] = { 
  // block to select model
  // dropdownlist opens model selector
  // the block value is stored in data property
  // default value is undefined
  // after each model selection it gets updated
  init: function() {
    this.setColour(colors.selection);
    this.setTooltip("a existing model from the game files");
    this.setHelpUrl(); // todo 
    this.setOutput(true);
    let block = this;

    let button = new Blockly.FieldDropdown(
      () => {
        let displaytext = block.data ? block.data.replace('models/','') : 'select model'
        return [[displaytext, 'DATA']];
      });
    button.showEditor_=(()=>{ 
      // instead of showing default selection menu show custom menu
      const promise = getModelSelectionPromise(portal2_models);
      promise.then((selection)=>{
        // todo: find way to save to block dropdown
        block.data = selection;
        reloadWorkspace();
      });
    });
    this.appendDummyInput()
      .appendField('model:')
      .appendField(button,'MODELINDEX');
  }
}

