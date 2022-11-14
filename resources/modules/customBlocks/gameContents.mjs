import { colors } from "./customBlockDefaults.mjs";
import { getModelSelectionPromise  } from "../selection/selectionMenu.mjs";
import { portal2_entities, portal2_models } from "../../js/models.mjs";
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
        let displaytext = block.data ? block.data.replace('models/',''): 'select model'
        return [[displaytext, 'DATA']];
      });
    button.showEditor_=(()=>{ 
      // instead of showing default selection menu show custom menu
      const promise = getModelSelectionPromise(portal2_models);
      promise.then((selection)=>{
        block.data = selection;
        reloadWorkspace();
      });
    });
    this.appendDummyInput()
      .appendField('model:')
      .appendField(button,'MODEL');
  }
}

Blockly.Blocks['select_ent'] = { 
  // block to select enitity
  init: function() {
    this.setColour(colors.selection);
    this.setTooltip('create a entity from the portal 2 game. Please note that not every entity is useful and some might crash the game, if handled inproperly');
    this.setHelpUrl('https://developer.valvesoftware.com/wiki/List_of_Portal_2_Entities');
    this.setOutput(true);
    
    let block = this;

    let button = new Blockly.FieldDropdown(
      () => {
        let displaytext = block.data ? block.data: 'select model'
        return [[displaytext, 'DATA']];
      });
    button.showEditor_=(()=>{ 
      // instead of showing default selection menu show custom menu
      const promise = getModelSelectionPromise(portal2_entities);
      promise.then((selection)=>{
        block.data = selection;
        reloadWorkspace();
      });
    });
    this.appendDummyInput()
      .appendField('entity:')
      .appendField(button,'ENTITY');
  }
}

// texture list
// https://docs.google.com/document/d/1C8lGxwyicsJU29Twrr0Xf8TfvjM6YV4qKjgPpxGtu_0/edit?usp=sharing
