import { colors } from "./customBlockDefaults.mjs";

Blockly.Blocks['debug_draw_box'] = {
  init: function () {
    this.jsonInit({
      "type": "debug_draw_box",
      "message0": "",
      "args0": [
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": colors.rendering,
      "tooltip": "",
      "helpUrl": ""
    });
  }
}