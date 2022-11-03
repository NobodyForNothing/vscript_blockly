import { colors } from "./customBlockDefaults.mjs";

// ppmod
Blockly.Blocks['ppmod_get'] = {
  init: function () {
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
      "colour": colors.ppmod,
      "tooltip": "get first entity handle from entity/model name",
      "helpUrl": "https://github.com/p2r3/ppmod/#ppmodget"
    });
  }
}
Blockly.Blocks['ppmod_fire'] = {
  init: function () {
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
      "colour": colors.ppmod,
      "tooltip": "fire input on an entity",
      "helpUrl": "https://github.com/p2r3/ppmod/#ppmodfire"
    });
  }
}
Blockly.Blocks['ppmod_add_script'] = {
  init: function () {
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
      "colour": colors.ppmod,
      "tooltip": "executes code after a entity fires an output",
      "helpUrl": "https://github.com/p2r3/ppmod/#ppmodaddscript"
    });
  }
}
Blockly.Blocks['ppmod_keyval'] = {
  init: function () {
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
      "colour": colors.ppmod,
      "tooltip": "executes code after a entity fires an output",
      "helpUrl": "https://github.com/p2r3/ppmod/#ppmodaddscript"
    });
  }
}
Blockly.Blocks['ppmod_wait'] = {
  init: function () {
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
      "colour": colors.ppmod,
      "tooltip": "executes code after a set amount of time",
      "helpUrl": "https://github.com/p2r3/ppmod/#ppmodwait"
    });
  }
}
Blockly.Blocks['ppmod_repeat'] = {
  init: function () {
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
      "colour": colors.ppmod,
      "tooltip": "executes code independently on a regular intervall",
      "helpUrl": "https://github.com/p2r3/ppmod/#ppmodinterval"
    });
  }
}
Blockly.Blocks['ppmod_player_eyes'] = {
  init: function () {
    this.jsonInit({
      "type": "ppmod_player_eyes",
      "message0": "eye position of player",
      "args0": [
      ],
      "output": null,
      "colour": colors.ppmod,
      "tooltip": "get 3d cordinates of eye position",
      "helpUrl": "https://github.com/p2r3/ppmod/#ppmodplayereyes"
    });
  }
}
Blockly.Blocks['ppmod_player_holding'] = {
  init: function () {
    this.jsonInit({
      "type": "ppmod_player_holding",
      "message0": "player holds something",
      "args0": [
      ],
      "output": "Boolean",
      "colour": colors.ppmod,
      "tooltip": "returns if the player is currently holding something",
      "helpUrl": "https://github.com/p2r3/ppmod/#ppmodplayerholding"
    });
  }
}
Blockly.Blocks['ppmod_player_event'] = {
  init: function () {
    this.jsonInit({
      "type": "ppmod_player_event",
      "message0": "when player %1 do %2",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "EVENT",
          "options": [
            ["jumps", "JUMP"],
            ["lands", "LAND"],
            ["ducks", "DUCK"],
            ["unducks", "UNDUCK"]
          ]
        },
        {
          "type": "input_statement",
          "name": "CODE"
        }
      ],
      "output": null,
      "colour": colors.ppmod,
      "tooltip": "executes code everytime the player does something",
      "helpUrl": "https://github.com/p2r3/ppmod/#ppmodplayerholding"
    });
  }
}
Blockly.Blocks['ppmod_create'] = {
  init: function () {
    this.jsonInit({
      "type": "ppmod_create",
      "message0": "create entity %1 and do %2",
      "args0": [
        {
          "type": "input_value",
          "name": "NAME"
        },
        {
          "type": "input_statement",
          "name": "CODE"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": colors.ppmod,
      "tooltip": "creates entity form classname / modelname and executes entity setup code",
      "helpUrl": "https://github.com/p2r3/ppmod/#ppmodcreate"
    });
  }
}
Blockly.Blocks['var_pre_ent'] = {
  init: function () {
    this.jsonInit({
      "type": "var_pre_ent",
      "message0": "set %1 to entity",
      "args0": [
        {
          "type": "field_variable",
          "name": "VAR"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": colors.variables,
      "tooltip": "save the entity that was just created to variable",
      "helpUrl": ""
    });
    this.setDeletable(false);
    this.setMovable(false);

  }
}
Blockly.Blocks['ppmod_text_simple'] = {
  init: function () {
    this.jsonInit({
      "type": "ppmod_text_simple",
      "message0": "display %1 on screen",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXT"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": colors.ppmod,
      "tooltip": "show text on screen",
      "helpUrl": ""
    })
  }
}
Blockly.Blocks['ppmod_text'] = {
  init: function () {
    this.jsonInit({
      "type": "ppmod_text",
      "message0": "display %1 at x %2 y %3 time %4 text color %5 background color %6 transparent background %7 %13 fadein time %8 fadeout time %9 to players %10 %11 with size %12",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXT"
        },
        {
          "type": "input_value",
          "name": "X",
        },
        {
          "type": "input_value",
          "name": "Y",
        },
        {
          "type": "input_value",
          "name": "TIME",
        },
        {
          "type": "input_value",
          "name": "COL_FORG",
        },
        {
          "type": "input_value",
          "name": "COL_BACK",
        },
        {
          "type": "field_checkbox",
          "name": "TRANSPARENT",
          "checked": true
        },
        {
          "type": "input_value",
          "name": "FADEIN",
        },
        {
          "type": "input_value",
          "name": "FADEOUT",
        },
        {
          "type": "field_dropdown",
          "name": "PLAYERS",
          "options": [
            [
              "everyone",
              "ALL"
            ],
            [
              "coop blue",
              "BLUE"
            ],
            [
              "coop orange",
              "ORANGE"
            ]
          ]
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "field_dropdown",
          "name": "CHANNEL",
          "options": [
            [
              "small",
              "2"
            ],
            [
              "medium1",
              "1"
            ],
            [
              "medium2",
              "4"
            ],
            [
              "large",
              "3"
            ],
            [
              "depreciated 1",
              "0"
            ],
            [
              "depreciated 2",
              "5"
            ],
          ]
        },
        {
          "type": "input_dummy"
        },
      ],
      "inputsInline": false,
      "previousStatement": null,
      "nextStatement": null,
      "colour": colors.ppmod,
      "tooltip": "show text on screen for more information please use the ppmod documentation and https://developer.valvesoftware.com/wiki/Game_text",
      "helpUrl": "https://github.com/p2r3/ppmod/#ppmodtext"
    });
    /* todo
    this.setOnChange(function(changeEvent) { 
      // function to remove background color in case it isn't needed
      console.log(this.getInput('COL_BACK'));
      __tst__ = this;
      if (this.getInput('TRANSPARENT') === true) {
        this.removeInput('COL_BACK',true);
      } else {
        this.appendInput_(Blockly.inputTypes.VALUE,'COL_BACK');
      }
    });
    */
  }
}  