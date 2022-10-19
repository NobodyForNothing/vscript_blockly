const toolbox = {
  'kind': 'categoryToolbox',
  'contents': [
    {
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
    },
    {
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
    },
    {
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
      ]
    },
    {
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
    },
    {
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
          'type': 'list_getElement',
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
          'type': 'list_setElement',
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
          'type': 'list_addElement',
        }
      ]
    },

    {
      "kind": "sep",
      "cssConfig": {
        "container": "toolBoxSeperator"
      }
    }, 
    {
      "kind": "category",
      "name": "Variables",
      "custom": "VARIABLE",
      "contents": [
        {
          "kind": 'block',
          'type': 'variables_get'
        },
        {
          "kind": 'block',
          'type': 'variables_set'
        },
      ]
    },
    {
      "kind": "category",
      "name": "Procedures",
      "contents": [
        {
          "kind": 'block',
          'type': 'procedures_defreturn'
        },
      ]
    },
    {
      "kind": "sep",
      "cssConfig": {
        "container": "toolBoxSeperator"
      }
    },      
    {
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
    },
    {
      "kind": "category",
      "name": "events",
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
    },
    {
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
            },
            "COL_BACK": {
              "shadow": {
                "type": "colour_rgb",
                "inputs": {
                  "RED": {
                    "shadow": {
                      "type": "math_number",
                      "fields": {
                        "NUM": 0
                      }
                    }
                  },
                  "GREEN": {
                    "shadow": {
                      "type": "math_number",
                      "fields": {
                        "NUM": 0
                      }
                    }
                  },
                  "BLUE": {
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
    },

  ]
};