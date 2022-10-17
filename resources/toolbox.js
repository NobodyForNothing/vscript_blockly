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
            'type': 'controls_repeat_ext'
          },
          {
            'kind': 'block',
            'type': 'controls_whileUntil'
          },
          {
            'kind': 'block',
            'type': 'controls_for'
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
            "type": "console_print"
          },
          {
            "kind": "block",
            "type": "console_execute"
          },
          {
            "kind": "block",
            "type": "console_execute_client"
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
          }
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
            "type": "ppmod_fire"
          },
          {
            "kind": "block",
            "type": "ppmod_add_script"
          },
          {
            "kind": "block",
            "type": "ppmod_keyval"
          },
          {
            "kind": "block",
            "type": "ppmod_wait"
          },
        ]
      },

    ]
  };