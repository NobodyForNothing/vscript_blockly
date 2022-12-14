export function getToolbox() {
  const tb_placeholder = {
    "kind": "sep",
    "cssConfig": {
      "container": "toolBoxSeperator"
    }
  };
  const cat_logic = {
    "kind": "category",
    "name": "Logic",
    "contents": [
      {
        'kind': 'block',
        'type': 'controls_if'
      },
      {
        'kind': 'block',
        'type': 'logic_boolean'
      },
      {
        'kind': 'block',
        'type': 'logic_compare'
      },
      {
        'kind': 'block',
        'type': 'logic_operation'
      },
      {
        'kind': 'block',
        'type': 'logic_negate'
      },
      {
        'kind': 'block',
        'type': 'logic_null'
      },
    ]
  };
  const cat_loops = {
    "kind": "category",
    "name": "Loops",
    "contents": [
      {
        'kind': 'block',
        'type': 'controls_repeat_ext',
        "inputs": {
          "TIMES": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": 1
              }
            }
          },
        }
      },
      {
        'kind': 'block',
        'type': 'controls_whileUntil',
      },
      {
        'kind': 'block',
        'type': 'controls_for',
        "inputs": {
          "FROM": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": 1
              }
            }
          },
          "TO": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": 10
              }
            }
          },
          "BY": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": 1
              }
            }
          },
        }
      },
      {
        'kind': 'block',
        'type': 'controls_forEach'
      },
      {
        'kind': 'block',
        'type': 'controls_flow_statements'
      },
    ]
  };
  const cat_math = {
    "kind": "category",
    "name": "Math",
    "contents": [
      {
        "kind": 'block',
        'type': 'math_number'
      },
      {
        "kind": 'block',
        'type': 'math_arithmetic'
      },
      {
        "kind": 'block',
        'type': 'math_single'
      },
      {
        "kind": 'block',
        'type': 'math_trig'
      },
      {
        "kind": 'block',
        'type': 'math_constant'
      },
      {
        "kind": 'block',
        'type': 'math_number_property'
      },
      {
        "kind": 'block',
        'type': 'math_round'
      },
      {
        "kind": 'block',
        'type': 'math_modulo'
      },
      {
        "kind": 'block',
        'type': 'math_random_int'
      },
      {
        "kind": 'block',
        'type': 'math_random_float'
      },
      {
        "kind": "block",
        "type": "vector",
        "inputs": {
          "X": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": 0
              }
            }
          },
          "Y": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": 0
              }
            }
          },
          "Z": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": 0
              }
            }
          },
        }
      },
      {
        "kind": "block",
        "type": "vector_get_element",
      },
      {
        "kind": "block",
        "type": "vector_set_element",
      },
      {
        "kind": "block",
        "type": "vector_math",
      },
    ]
  }
  const cat_text = {
    "kind": "category",
    "name": "Text",
    "contents": [
      {
        'kind': 'block',
        'type': 'text'
      },
      {
        'kind': 'block',
        'type': 'text_multiline'
      },
      {
        'kind': 'block',
        'type': 'text_join'
      },
      {
        'kind': 'block',
        'type': 'text_append'
      },
      {
        'kind': 'block',
        'type': 'text_length'
      },
      {
        'kind': 'block',
        'type': 'text_isEmpty'
      },
      {
        'kind': 'block',
        'type': 'text_indexOf'
      },
    ]
  }
  const cat_lists = {
    "kind": "category",
    "name": "Lists",
    "contents": [
      {
        'kind': 'block',
        'type': 'lists_create_empty'
      },
      {
        'kind': 'block',
        'type': 'lists_create_with'
      },
      {
        'kind': 'block',
        'type': 'lists_repeat'
      },
      {
        'kind': 'block',
        'type': 'lists_reverse'
      },
      {
        'kind': 'block',
        'type': 'lists_isEmpty'
      },
      {
        'kind': 'block',
        'type': 'lists_length'
      },
      {
        'kind': 'block',
        'type': 'list_get_element',
        "inputs": {
          "ID": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": 0
              }
            }
          },
        }
      },
      {
        'kind': 'block',
        'type': 'list_set_element',
        "inputs": {
          "ID": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": 0
              }
            }
          },
        }
      },
      {
        'kind': 'block',
        'type': 'list_add_element',
      }
    ]
  }
  const cat_variables = {
    "kind": "category",
    "name": "Variables",
    "custom": "VARIABLE",
  }
  const cat_procedures = {
    "kind": "category",
    "name": "Procedures",
    "contents": [
      {
        "kind": 'block',
        'type': 'procedures_defreturn'
      },
    ]
  }
  const cat_prtl_con = {
    "kind": "category",
    "name": "Portal 2 console",
    "contents": [
      {
        "kind": "block",
        "type": "console_print",
        "inputs": {
          "TEXT": {
            "shadow": {
              "type": "text",
              "fields": {
                "TEXT": ""
              }
            }
          },
        }
      },
      {
        "kind": "block",
        "type": "console_execute",
        "inputs": {
          "COMMAND": {
            "shadow": {
              "type": "text",
              "fields": {
                "TEXT": ""
              }
            }
          },
        }
      },
      {
        "kind": "block",
        "type": "console_execute_client",
        "inputs": {
          "COMMAND": {
            "shadow": {
              "type": "text",
              "fields": {
                "TEXT": ""
              }
            }
          },
        }
      },
    ]
  }
  const cat_events = {
    "kind": "category",
    "name": "Events",
    "contents": [
      {
        "kind": "block",
        "type": "setup"
      },
      {
        "kind": "block",
        "type": "tick"
      },
      {
        "kind": "block",
        "type": "ppmod_repeat",
        "inputs": {
          "COND": {
            "shadow": {
              "type": "logic_boolean",
              "fields": {
                "BOOL": "TRUE"
              }
            }
          },
        }
      },
    ]
  }
  const cat_ppmod = {
    "kind": "category",
    "name": "ppmod",
    "contents": [
      {
        "kind": "block",
        "type": "ppmod_get"
      },
      {
        "kind": "block",
        "type": "ppmod_fire",
        "inputs": {
          "ACTION": {
            "shadow": {
              "type": "text",
              "fields": {
                "TEXT": "use"
              }
            }
          },
          "VALUE": {
            "shadow": {
              "type": "text",
              "fields": {
                "TEXT": ""
              }
            }
          },
          "DELAY": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": 0
              }
            }
          },
        }
      },
      {
        "kind": "block",
        "type": "ppmod_add_script",
        "inputs": {
          "DELAY": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": 0
              }
            }
          },
        }
      },
      {
        "kind": "block",
        "type": "ppmod_keyval",
      },
      {
        "kind": "block",
        "type": "ppmod_wait",
        "inputs": {
          "DELAY": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": 1
              }
            }
          },
        }
      },
      {
        "kind": "block",
        "type": "ppmod_player_eyes",
      },
      /* todo
      {
        "kind": "block",
        "type": "ppmod_player_holding",
      },
      */
      {
        "kind": "block",
        "type": "ppmod_player_event",
      },
      {
        "kind": "block",
        "type": "ppmod_create",
        "inputs": {
          "CODE": {
            "block": {
              "type": "var_pre_ent",
            }
          }
        }
      },
      {
        "kind": "block",
        "type": "ppmod_text_simple",
        "inputs": {
          "TEXT": {
            "shadow": {
              "type": "text",
              "fields": {
                "TEXT": ""
              }
            }
          },
        }
      },
      {
        "kind": "block",
        "type": "ppmod_text",
        "inputs": {
          "TEXT": {
            "shadow": {
              "type": "text",
              "fields": {
                "TEXT": ""
              }
            }
          },
          "X": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": -1
              }
            }
          },
          "Y": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": -1
              }
            }
          },
          "TIME": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": 10
              }
            }
          },
          "COL_FORG": {
            "shadow": {
              "kind": "block",
              "type": "colour_wheel",
            },
          },
          "COL_BACK": {
            "shadow": {
              "kind": "block",
              "type": "colour_wheel",
            },
          },
          "FADEIN": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": 0
              }
            }
          },
          "FADEOUT": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": 0
              }
            }
          },

        }
      },
    ]
  }
  const cat_selections = {
    "kind": "category",
    "name": "Values",
    "contents": [
      {
        "kind": "block",
        "type": "select_mdl"
      },
      {
        "kind": "block",
        "type": "select_ent"
      },
    ]
  }
  const cat_entitys = {
    "kind": "category",
    "name": "Entities",
    "contents": [
      {
        "kind": "block",
        "type": "ent_list",
      },
      {
        "kind": "block",
        "type": "ent_get_pos",
      },
      {
        "kind": "block",
        "type": "ent_get_angles",
      },
      {
        "kind": "block",
        "type": "ent_get_velocity",
      },
      {
        "kind": "block",
        "type": "ent_get_center",
      },
      {
        "kind": "block",
        "type": "ent_get_classname",
      },
      {
        "kind": "block",
        "type": "ent_get_modelname",
      },
      {
        "kind": "block",
        "type": "ent_get_health",
      },
      {
        "kind": "block",
        "type": "ent_get_maxhealth",
      },
      {
        "kind": "block",
        "type": "ent_exists",
      },
      {
        "kind": "block",
        "type": "ent_destroy",
      },
      {
        "kind": "block",
        "type": "ent_set_origin",
      },
      {
        "kind": "block",
        "type": "ent_set_angles",
      },
      {
        "kind": "block",
        "type": "ent_set_velocity",
      },
      {
        "kind": "block",
        "type": "ent_set_health",
        "inputs": {
          "HEALTH": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": 100
              }
            }
          },
        }
      },
      // {
      //   "kind": "block",
      //   "type": "ent_set_size",
      // },
    ]
  }

  const cat_render_tab = {
    "kind": "category",
    "name": "Renderables",
    "contents": [
      {
        "kind": "block",
        "type": "debug_draw_box",
        "inputs": {
          "ORIGIN": {
            "shadow": {
              "type": "vector",
              "inputs": {
                "X": {
                  "shadow": {
                    "type": "math_number",
                    "fields": {
                      "NUM": 0
                    }
                  }
                },
                "Y": {
                  "shadow": {
                    "type": "math_number",
                    "fields": {
                      "NUM": 0
                    }
                  }
                },
                "Z": {
                  "shadow": {
                    "type": "math_number",
                    "fields": {
                      "NUM": 0
                    }
                  }
                },
              }
            }
          },
          "SIZE": {
            "shadow": {
              "type": "vector",
              "inputs": {
                "X": {
                  "shadow": {
                    "type": "math_number",
                    "fields": {
                      "NUM": 100
                    }
                  }
                },
                "Y": {
                  "shadow": {
                    "type": "math_number",
                    "fields": {
                      "NUM": 100
                    }
                  }
                },
                "Z": {
                  "shadow": {
                    "type": "math_number",
                    "fields": {
                      "NUM": 100
                    }
                  }
                },
              }
            }
          },
          "COLOR": {
            "shadow": {
              "kind": "block",
              "type": "colour_wheel",
            },
          },
          "OPACITY": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": 5
              }
            }
          },
          "DURATION": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": 20
              }
            }
          },
        }
      },
      {
        "kind": "block",
        "type": "colour_wheel",
      },
      {
        "kind": "block",
        "type": "colour_rgb",
        "inputs": {
          "RED": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": 255
              }
            }
          },
          "GREEN": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": 255
              }
            }
          },
          "BLUE": {
            "shadow": {
              "type": "math_number",
              "fields": {
                "NUM": 255
              }
            }
          },
        }
      }
      
    ]
  }

  const toolbox = {
    'kind': 'categoryToolbox',
    'contents': [
      cat_logic,
      cat_loops,
      cat_math,
      cat_text,
      cat_lists,

      tb_placeholder,

      cat_variables,
      cat_procedures,

      tb_placeholder,

      cat_prtl_con,
      cat_events,
      cat_entitys,
      cat_ppmod,

      cat_selections,
      cat_render_tab
    ]
  }
  return toolbox;
}