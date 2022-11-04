import { colors } from "./customBlockDefaults.mjs";

// get info from ent
Blockly.Blocks['ent_get_pos'] = {
  init: function () {
    this.jsonInit({
      "type": "ent_get_pos",
      "message0": "position of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "ENT"
        }
      ],
      "output": "Vector",
      "colour": colors.util,
      "tooltip": "get position as vector of entity",
      "helpUrl": "https://developer.valvesoftware.com/wiki/List_of_Portal_2_Script_Functions#Methods"
    });
  }
}
Blockly.Blocks['ent_get_angles'] = {
  init: function () {
    this.jsonInit({
      "type": "ent_get_angles",
      "message0": "angles of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "ENT"
        }
      ],
      "output": "Vector",
      "colour": colors.util,
      "tooltip": "Get entity pitch, yaw, roll as a vector",
      "helpUrl": "https://developer.valvesoftware.com/wiki/List_of_Portal_2_Script_Functions#Methods"
    });
  }
}
Blockly.Blocks['ent_get_center'] = {
  init: function () {
    this.jsonInit({
      "type": "ent_get_center",
      "message0": "center of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "ENT"
        }
      ],
      "output": "Vector",
      "colour": colors.util,
      "tooltip": "Get vector to center of object - absolute coords",
      "helpUrl": "https://developer.valvesoftware.com/wiki/List_of_Portal_2_Script_Functions#Methods"
    });
  }
}
Blockly.Blocks['ent_get_velocity'] = {
  init: function () {
    this.jsonInit({
      "type": "ent_get_velocity",
      "message0": "velocity of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "ENT"
        }
      ],
      "output": "Vector",
      "colour": colors.util,
      "tooltip": "Get the velocity of the entity.",
      "helpUrl": "https://developer.valvesoftware.com/wiki/List_of_Portal_2_Script_Functions#Methods"
    });
  }
}
Blockly.Blocks['ent_get_classname'] = {
  init: function () {
    this.jsonInit({
      "type": "ent_get_classname",
      "message0": "classname of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "ENT"
        }
      ],
      "output": "String",
      "colour": colors.util,
      "tooltip": "Get the classname of this entity.",
      "helpUrl": "https://developer.valvesoftware.com/wiki/List_of_Portal_2_Script_Functions#Methods"
    });
  }
}
Blockly.Blocks['ent_get_modelname'] = {
  init: function () {
    this.jsonInit({
      "type": "ent_get_modelname",
      "message0": "model of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "ENT"
        }
      ],
      "output": "String",
      "colour": colors.util,
      "tooltip": "Returns the name of the model.",
      "helpUrl": "https://developer.valvesoftware.com/wiki/List_of_Portal_2_Script_Functions#Methods"
    });
  }
}
Blockly.Blocks['ent_get_health'] = {
  init: function () {
    this.jsonInit({
      "type": "ent_get_health",
      "message0": "health of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "ENT"
        }
      ],
      "output": "Number",
      "colour": colors.util,
      "tooltip": "Returns the current entity health.",
      "helpUrl": "https://developer.valvesoftware.com/wiki/List_of_Portal_2_Script_Functions#Methods"
    });
  }
}
Blockly.Blocks['ent_get_maxhealth'] = {
  init: function () {
    this.jsonInit({
      "type": "ent_get_maxhealth",
      "message0": "maximum health of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "ENT"
        }
      ],
      "output": "Number",
      "colour": colors.util,
      "tooltip": "Returns the maximum health of the current entity.",
      "helpUrl": "https://developer.valvesoftware.com/wiki/List_of_Portal_2_Script_Functions#Methods"
    });
  }
}
Blockly.Blocks['ent_exists'] = {
  init: function () {
    this.jsonInit({
      "type": "ent_exists",
      "message0": "is entity: %1",
      "args0": [
        {
          "type": "input_value",
          "name": "ENT"
        }
      ],
      "output": "Boolean",
      "colour": colors.util,
      "tooltip": "Returns true if entity is a valid entity and false if thats not he case",
      "helpUrl": "https://developer.valvesoftware.com/wiki/List_of_Portal_2_Script_Functions#Methods"
    });
  }
}


// do something with ent
Blockly.Blocks['ent_destroy'] = {
  init: function () {
    this.jsonInit({
      "type": "ent_destroy",
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