import { colors } from "./customBlockDefaults.mjs";

// vectors
Blockly.Blocks['vector'] = {
    init: function() {
      this.jsonInit({
        "type": "vector",
          "message0": "create Vector x: %1 y: %2 z: %3",
          "args0": [
            {
              "type": "input_value",
              "name": "X"
            },
            {
              "type": "input_value",
              "name": "Y"
            },
            {
              "type": "input_value",
              "name": "Z"
            }
          ],
          "inputsInline": true,
          "output": "Vector",
          "colour": colors.vector,
          "tooltip": "prints something into the portal 2 console",
          "helpUrl": ""
      });
    }
  }
  Blockly.Blocks['vector_get_element'] = {}
  Blockly.Blocks['vector_set_element'] = {}
  Blockly.Blocks['vector_math'] = {}