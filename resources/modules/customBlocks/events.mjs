import { colors } from "./customBlockDefaults.mjs";

// events
Blockly.Blocks['setup'] = {
  init: function () {
    this.jsonInit({
      "type": "setup",
      "message0": "Setup: %1 %2",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_statement",
          "name": "CODE"
        }
      ],
      "colour": colors.events,
      "tooltip": "runs at start of level (logic_auto outputs 'OnNewGame' and 'OnMapTransition')",
      "helpUrl": "https://developer.valvesoftware.com/wiki/Logic_auto"
    });
  }
}
Blockly.Blocks['tick'] = {
  init: function () {
    this.jsonInit({
      "type": "tick",
      "message0": "Tick: %1 %2",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_statement",
          "name": "CODE"
        }
      ],
      "colour": colors.events,
      "tooltip": "runs every Tick",
      "helpUrl": "https://github.com/p2r3/ppmod/#ppmodinterval"
    });
  }
}