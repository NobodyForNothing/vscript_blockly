import { colors } from "./customBlockDefaults.mjs";

// vectors
Blockly.Blocks['vector'] = {
  init: function () {
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
Blockly.Blocks['vector_get_element'] = {
  init: function () {
    this.jsonInit({
      "type": "vector_get_element",
      "message0": "Get element %1 of Vector %2",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "VALUE",
          "options": [
            [
              "x",
              "X"
            ],
            [
              "y",
              "Y"
            ],
            [
              "z",
              "Z"
            ]
          ]
        },
        {
          "type": "input_value",
          "name": "VEC"
        }
      ],
      "output": "Number",
      "colour": colors.vector,
      "tooltip": "",
      "helpUrl": ""
    });
  }
}
Blockly.Blocks['vector_set_element'] = {
  init: function () {
    this.jsonInit({
      "type": "vector_set_element",
      "message0": "Set element %1 of Vector %2 to %3",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "VALUE",
          "options": [
            [
              "x",
              "X"
            ],
            [
              "y",
              "Y"
            ],
            [
              "z",
              "Z"
            ]
          ]
        },
        {
          "type": "input_value",
          "name": "VEC"
        },
        {
          "type": "input_value",
          "name": "VAL"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": colors.vector,
      "tooltip": "",
      "helpUrl": ""
    });
  }
}
Blockly.Blocks['vector_math'] = {}