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
        "colour": 120,
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
        "colour": 120,
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
        "colour": 120,
        "tooltip": "executes command in portal 2 console as if typed by player",
        "helpUrl": "https://developer.valvesoftware.com/wiki/Point_broadcastclientcommand"
      });
    }
  };


// ppmod
Blockly.Blocks['ppmod_get'] = {
  init: function() {
    this.jsonInit({
      "type": "ppmod_get",
      "message0": "get entity %1",
      "args0": [
        {
          "type": "input_value",
          "name": "NAME"
        }
      ],
      "output": null,
      "colour": 230,
      "tooltip": "get first entity handle from entity/model name",
      "helpUrl": "https://github.com/p2r3/ppmod/#ppmodget"
    });
  }
}
Blockly.Blocks['ppmod_fire'] = {
  init: function() {
    this.jsonInit({
      "type": "ppmod_fire",
      "message0": "fire input %1 of entity %2 with the value %3 after %4 seconds",
      "args0": [
        {
          "type": "input_value",
          "name": "ACTION",
          "check": "String"
        },
        {
          "type": "input_value",
          "name": "ENTITY"
        },
        {
          "type": "input_value",
          "name": "VALUE",
          "check": "String"
        },
        {
          "type": "input_value",
          "name": "DELAY",
          "check": "Number"
        },
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 230,
      "tooltip": "fire input on an entity",
      "helpUrl": "https://github.com/p2r3/ppmod/#ppmodfire"
    });
  }
}
Blockly.Blocks['ppmod_add_script'] = {
  init: function() {
    this.jsonInit({
      "type": "ppmod_add_script",
      "message0": "when entity %1 fires output %2 execute %3 after %4 seconds",
      "args0": [
        {
          "type": "input_value",
          "name": "ENTITY"
        },
        {
          "type": "input_value",
          "name": "OUTPUT",
        },
        {
          "type": "input_statement",
          "name": "SCRIPT"
        },
        {
          "type": "input_value",
          "name": "DELAY",
          "check": "Number"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 230,
      "tooltip": "executes code after a entity fires an output",
      "helpUrl": "https://github.com/p2r3/ppmod/#ppmodaddscript"
    });
  }
}
Blockly.Blocks['ppmod_keyval'] = {
  init: function() {
    this.jsonInit({
      "type": "ppmod_keyval",
      "message0": "set keyvalue %1 of entity %2 to %3",
      "args0": [
        {
          "type": "input_value",
          "name": "KEY"
        },
        {
          "type": "input_value",
          "name": "ENTITY"
        },
        {
          "type": "input_value",
          "name": "VALUE"
        },
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 230,
      "tooltip": "executes code after a entity fires an output",
      "helpUrl": "https://github.com/p2r3/ppmod/#ppmodaddscript"
    });
  }
}
Blockly.Blocks['ppmod_wait'] = {
  init: function() {
    this.jsonInit({
      "type": "ppmod_wait",
      "message0": "after %1 seconds execute %2",
      "args0": [
        {
          "type": "input_value",
          "name": "DELAY",
          "check": "Number"
        },
        {
          "type": "input_statement",
          "name": "CODE"
        },
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 230,
      "tooltip": "executes code after a set amount of time",
      "helpUrl": "https://github.com/p2r3/ppmod/#ppmodwait"
    });
  }
}
Blockly.Blocks['ppmod_repeat'] = {
  init: function() {
    this.jsonInit({
      "type": "ppmod_repeat",
      "message0": "every %1 seconds while %3 do %2",
      "args0": [
        {
          "type": "input_value",
          "name": "INTERVALL",
          "check": "Number"
        },
        {
          "type": "input_statement",
          "name": "CODE"
        },
        {
          "type": "input_value",
          "name": "COND",
          "check": "Boolean"
        }
      ],
      "colour": 230,
      "tooltip": "executes code independently on a regular intervall",
      "helpUrl": "https://github.com/p2r3/ppmod/#ppmodinterval"
    });
  }
}


// events
Blockly.Blocks['setup'] = {
  init: function() {
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
      "colour": 330,
      "tooltip": "runs at start of level (logic_auto outputs 'OnNewGame' and 'OnMapTransition')",
      "helpUrl": "https://developer.valvesoftware.com/wiki/Logic_auto"
    });
  }
}
Blockly.Blocks['tick'] = {
  init: function() {
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
      "colour": 330,
      "tooltip": "runs every Tick",
      "helpUrl": "https://github.com/p2r3/ppmod/#ppmodinterval"
    });
  }
}

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
      "colour": 260,
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
      "colour": 260,
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
      "colour": 260,
      "tooltip": "append element to list",
      "helpUrl": ""
    });
  }
}
