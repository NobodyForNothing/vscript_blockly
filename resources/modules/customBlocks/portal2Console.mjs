import { colors } from "./customBlockDefaults.mjs";

// console
Blockly.Blocks['console_print'] = {
    init: function() {
      this.jsonInit({
        "type": "console_print",
        "message0": "print %1 to console",
        "args0": [
          {
            "type": "input_value",
            "name": "TEXT"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": colors.console,
        "tooltip": "prints something into the portal 2 console",
        "helpUrl": ""
      });
    }
  };
  Blockly.Blocks['console_execute'] = {
    init: function() {
      this.jsonInit({
        "type": "console_execute",
        "message0": "execute in console: %1",
        "args0": [
          {
            "type": "input_value",
            "name": "COMMAND"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": colors.console,
        "tooltip": "executes command in portal 2 console",
        "helpUrl": "https://developer.valvesoftware.com/wiki/List_of_Portal_2_console_commands_and_variables"
      });
    }
  };
  Blockly.Blocks['console_execute_client'] = {
    init: function() {
      this.jsonInit({
        "type": "console_execute_client",
        "message0": "execute as player in console: %1",
        "args0": [
          {
            "type": "input_value",
            "name": "COMMAND"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": colors.console,
        "tooltip": "executes command in portal 2 console as if typed by player",
        "helpUrl": "https://developer.valvesoftware.com/wiki/Point_broadcastclientcommand"
      });
    }
  };