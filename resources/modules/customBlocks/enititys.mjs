import { colors } from "./customBlockDefaults.mjs";

Blockly.Blocks['util_destroy'] = {
  init: function () {
    this.jsonInit({
      "type": "util_destroy",
      "message0": "destroy %1",
      "args0": [
        {
          "type": "input_value",
          "name": "ENT"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": colors.util,
      "tooltip": "remove (kill) entity from level",
      "helpUrl": "https://developer.valvesoftware.com/wiki/List_of_Portal_2_Script_Functions#Methods"
    });
  }
}