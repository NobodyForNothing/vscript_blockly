import { colors } from "./customBlockDefaults.mjs";

// lists
Blockly.Blocks['list_getElement'] = {
    init: function() {
      this.jsonInit({
        "type": "list_getElement",
        "message0": "get element #%1 of list %2",
        "args0": [
          {
            "type": "input_value",
            "name": "ID",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "LIST",
            "check": "Array"
          }
        ],
        "output": null,
        "colour": colors.lists,
        "tooltip": "get element by index",
        "helpUrl": ""
      });
    }
  }
  Blockly.Blocks['list_setElement'] = {
    init: function() {
      this.jsonInit({
        "type": "list_setElement",
        "message0": "set element #%1 of list %2 to %3",
        "args0": [
          {
            "type": "input_value",
            "name": "ID",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "LIST",
            "check": "Array"
          },
          {
            "type": "input_value",
            "name": "VALUE",
          },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": colors.lists,
        "tooltip": "set element by index",
        "helpUrl": ""
      });
    }
  }
  Blockly.Blocks['list_addElement'] = {
    init: function() {
      this.jsonInit({
        "type": "list_addElement",
        "message0": "append element %1 to list %2",
        "args0": [
          {
            "type": "input_value",
            "name": "VALUE",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "LIST",
            "check": "Array"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": colors.lists,
        "tooltip": "append element to list",
        "helpUrl": ""
      });
    }
  }