const colors = {
  console: 120,
  ppmod: 230,
  events: 330,
  lists: 260,
  vector: 0,
  variables: 0
}

const customBlockValues = {};

// Vector
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
      "colour": colors.ppmod,
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
      "colour": colors.ppmod,
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
      "colour": colors.ppmod,
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
      "colour": colors.ppmod,
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
      "colour": colors.ppmod,
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
      "colour": colors.ppmod,
      "tooltip": "executes code independently on a regular intervall",
      "helpUrl": "https://github.com/p2r3/ppmod/#ppmodinterval"
    });
  }
}
Blockly.Blocks['ppmod_player_eyes'] = {
  init: function() {
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
  init: function() {
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
  init: function() {
    this.jsonInit({
      "type": "ppmod_player_event",
      "message0": "when player %1 do %2",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "EVENT",
          "options": [
            [ "jumps", "JUMP" ],
            [ "lands", "LAND" ],
            [ "ducks", "DUCK" ],
            [ "unducks", "UNDUCK" ]
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
  init: function() {
    this.jsonInit({
      "type": "ppmod_create",
      "message0": "create entity %1 and do %2",
      "args0": [
        {
          "type": "input_value",
          "name": "NAME"
        },
        {
          "type":"input_statement",
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
  init: function() {
    this.jsonInit({
      "type": "var_pre_ent",
      "message0":"set %1 to entity",
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
  init: function() {
    this.jsonInit({
      "type": "ppmod_text_simple",
      "message0":"display %1 on screen",
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
  init: function() {
    this.jsonInit({
      "type": "ppmod_text",
      "message0":"display %1 at x %2 y %3 time %4 text color %5 background color %6 transparent background %7 %13 fadein time %8 fadeout time %9 to players %10 %11 with size %12",
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
      "colour": colors.events,
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
      "colour": colors.events,
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

customBlockValues.mdl_select = ['-']
Blockly.Blocks['mdl_select'] = { 
  // block to select model
  // dropdownlist opens model selector
  // default value is '-'
  // each block saves its index and passes to model selector
  // after model selection it gets saved to globla array
  // customBlockValues.mdl_select = []
  init: function() {
    this.setColour(colors.lists,);
    this.setTooltip("");
    this.setHelpUrl("");
  
    let button = new Blockly.FieldDropdown([["select model", `${customBlockValues.mdl_select.length}`]]);
    button.showEditor_=(()=>{ 
      // instead of showing default selection menu show custom menu
      console.log(button);
      showModelSelection(button.menuGenerator_[0][1]); // saved array index
    });
    this.appendDummyInput()
      .appendField('model:')
      .appendField(button,'MODELINDEX');
  }
}
let tmp = null;

