
const vscriptGenerator = new Blockly.Generator('Vscript');

vscriptGenerator.initNameDB = function(workspace) {
    if (vscriptGenerator.nameDB_) return;
    vscriptGenerator.nameDB_ = new Blockly.Names(vscriptGenerator.RESERVED_WORDS_);
    vscriptGenerator.nameDB_.setVariableMap(workspace.getVariableMap());
    vscriptGenerator.nameDB_.populateVariables(workspace);
    vscriptGenerator.nameDB_.populateProcedures(workspace);
}

vscriptGenerator.idToName = function(id) { // todo find cleaner implementation
    return vscriptGenerator.nameDB_.getNameForUserVariable_(id);
}

// allow stacking
vscriptGenerator.scrub_ = function(block, code, opt_thisOnly) {
    const nextBlock =
        block.nextConnection && block.nextConnection.targetBlock();
    if (nextBlock && !opt_thisOnly){
    return code + ';\n' + vscriptGenerator.blockToCode(nextBlock)
    } else if(false) { // todo: detect end of file scenarios
    return code += ';'
    }
    return code;
};

// order
vscriptGenerator.ORDER_NONE = 99;

// logic (https://github.com/google/blockly/blob/master/blocks/logic.js)
vscriptGenerator['logic_boolean'] = function(block) {
    const value = block.getFieldValue('BOOL');
    if (value === 'TRUE') {
    return 'true';
    } else if (value === 'FALSE') {
    return 'false';
    }
    return value;
}
vscriptGenerator['controls_if'] = function(block) {
    const condition = vscriptGenerator.statementToCode(block, 'IF0');
    const action = vscriptGenerator.statementToCode(block, 'DO0');
    let code = 'if (' + condition + ') { ' + action + '}';

    let elseIfCount = 1;
    let nextIf = vscriptGenerator.statementToCode(block, ('IF' + elseIfCount));
    while (nextIf !== '') {  // revisit: find better way to detect else creation
    const nextAction = vscriptGenerator.statementToCode(block, ('DO' + elseIfCount));
    code += ' else if (' + nextIf + ') {' + nextAction + '}';

    elseIfCount++;
    nextIf = vscriptGenerator.statementToCode(block, ('IF' + elseIfCount));
    }

    const elseCode = vscriptGenerator.statementToCode(block, 'ELSE');
    if (elseCode !== '') {
    code += 'else { ' + elseCode + '}';
    }

    return code
}
vscriptGenerator['logic_compare'] = function(block) {
    const a = vscriptGenerator.statementToCode(block, 'A');
    const b = vscriptGenerator.statementToCode(block, 'B');
    let operator = block.getFieldValue('OP');
    switch (operator) {
    case 'EQ':
        operator = '==';
        break;
    case 'NEQ':
        operator = '!=';
        break;
    case 'LT':
        operator = '<';
        break;
    case 'LTE':
        operator = '<=';
        break;
    case 'GT':
        operator = '>';
        break;
    case 'GTE':
        operator = '>=';
        break;
    default:
        break;
    }
    return a + ' ' + operator + ' ' + b;
}
vscriptGenerator['logic_operation'] = function(block) {
    const a = vscriptGenerator.statementToCode(block, 'A');
    const b = vscriptGenerator.statementToCode(block, 'B');
    let operator = block.getFieldValue('OP');
    if (operator === 'AND') {
    operator = '&&';
    } else if (operator === 'OR') {
    operator = '||';
    }
    return a + ' ' + operator + ' ' + b;
}
vscriptGenerator['logic_negate'] = function(block) {
    const boolean = vscriptGenerator.statementToCode(block, 'BOOL');
    return '!(' + boolean + ')';
}
vscriptGenerator['logic_null'] = function(block) {
    return 'null';
}
    // todo ternary operator


// loops (https://github.com/google/blockly/blob/master/blocks/loops.js)
vscriptGenerator['controls_repeat_ext'] = function(block) {
    const loopCount = vscriptGenerator.statementToCode(block, 'TIMES');
    const action = vscriptGenerator.statementToCode(block, 'DO');
    return 'for(local a=0;a<' + loopCount + ';a+=1) {' + action + '}';
}
vscriptGenerator['controls_whileUntil'] = function(block) {
    const mode = block.getFieldValue('MODE');
    let condition = vscriptGenerator.statementToCode(block, 'BOOL');
    const action = vscriptGenerator.statementToCode(block, 'DO');
    if(mode === 'UNTIL') {
    condition = '!(' +condition + ')';
    }
    return 'while (' + condition + ') {' + action + '}'
}
vscriptGenerator['controls_for'] = function(block) {
    const varName = vscriptGenerator.idToName(block.getFieldValue('VAR')); 
    
    const startNum = vscriptGenerator.statementToCode(block, 'FROM');
    const endNum = vscriptGenerator.statementToCode(block, 'TO');
    const stepSize = vscriptGenerator.statementToCode(block, 'BY');
    const action = vscriptGenerator.statementToCode(block, 'DO');
    return ('for(local ' + varName + '=' + startNum + ';a<=' + endNum + ';a+=' + stepSize + ') {' + action + '}');
}
vscriptGenerator['controls_forEach'] = function(block) {
    const varId = block.getFieldValue('VAR');
    const varName = vscriptGenerator.idToName(varId);
    const inputList = vscriptGenerator.statementToCode(block, 'LIST');
    const action = vscriptGenerator.statementToCode(block, 'DO');
    return 'foreach(' + varName + ' in ' + inputList +'){' + action +'}';
}
vscriptGenerator['controls_flow_statements'] = function(block) {
    const flowOption = block.getFieldValue('FLOW');
    switch (flowOption) {
    case 'BREAK':
        return 'break';
    case 'CONTINUE':
        return 'continue';
    default:
        return flowOption;
    }
}


// math
vscriptGenerator['math_number'] = function(block) {
    const value = block.getFieldValue('NUM');
    return '' + value;
}
vscriptGenerator['math_change'] = function(block) {
    const varName = vscriptGenerator.idToName(block.getFieldValue('VAR'));
    const delta = vscriptGenerator.statementToCode(block, 'DELTA');
    return varName + '+=' + delta;
}
vscriptGenerator['math_arithmetic'] = function(block) {
    const a = vscriptGenerator.statementToCode(block, 'A');
    const b = vscriptGenerator.statementToCode(block, 'B');
    let operator = block.getFieldValue('OP');
    switch(operator) {
    case 'ADD':
        operator = '+';
        break;
    case 'MINUS':
        operator = '-';
        break;
    case 'MULTIPLY':
        operator = '*';
        break;
    case 'DIVIDE':
        operator = '/';
        break;
    case 'POWER': 
        return 'pow(' + a + ',' + b + ')';
        break;
    }
    return '(' + a + operator + b +')';
}
vscriptGenerator['math_single'] = function(block) {
    const operator = block.getFieldValue('OP');
    const value = vscriptGenerator.statementToCode(block, 'NUM');
    switch(operator) {
    case 'ROOT':
        return 'sqrt(' + value + ')';
    case 'ABS':
        return 'abs(' + value + ')';
    case 'NEG':
        return '(-' + value + ')';
    case 'LN':
        return 'log(' + value + ')';
    case 'LOG10':
        return 'log10(' + value + ')';
    case 'EXP':
        return 'exp(' + value + ')';
    case 'POW10':
        return 'pow(10,' + value + ')';
    default:
        return operator;
    }
}
vscriptGenerator['math_trig'] = function(block) {
    const operator = block.getFieldValue('OP');
    const value = vscriptGenerator.statementToCode(block, 'NUM');
    return operator.toLowerCase() + '(' + value + ')'; 
}
vscriptGenerator['math_constant'] = function(block) {
    const constType = block.getFieldValue('CONSTANT');
    switch(constType) {
    case 'PI':
        return 'PI';
    case 'E':
        return '2.71828';
    case 'GOLDEN_RATIO':
        return '1.61803398875'  ;
    case 'SQRT2':
        return 'sqrt(2)';
    case 'SQRT1_2':
        return 'sqrt(1/2)';
    case 'INFINITY':
        return '1410065407'; // infinity is not avaible
    default:
        return operator;
    }
} 
vscriptGenerator['math_number_property'] = function(block) {
    const number = vscriptGenerator.statementToCode(block, 'NUMBER_TO_CHECK');
    const property = block.getFieldValue('PROPERTY');
    switch (property) {
    case 'EVEN':
        return '(0==(' + number + '%2))';
    case 'ODD':
        return '(1==(' + number + '%2))';
    case 'PRIME':
        return 'ddutil.isPrime(' + number + ')';
    case 'WHOLE':
        return '((' + number + '%0)==0)';
    case 'POSITIVE':
        return '(' + number + '>0)';
    case 'NEGATIVE':
        return '(' + number + '<0)';
    case 'DIVISIBLE_BY':
        const divisor = vscriptGenerator.statementToCode(block, 'DIVISOR');
        return '((' + number + '%' + divisor + ')==0)';
    default:
        return operator;
    }
}
vscriptGenerator['math_round'] = function(block) {
    const operator = block.getFieldValue('OP');
    const value = vscriptGenerator.statementToCode(block, 'NUM');
    switch (operator) {
    case 'ROUND':
        return 'round(' + value + ')';
    case 'ROUNDUP':
        return 'ceil(' + value + ')';
    case 'ROUNDDOWN':
        return 'floor(' + value + ')';
    }
}
vscriptGenerator['math_modulo'] = function(block) {
    const a = vscriptGenerator.statementToCode(block, 'DIVIDEND');
    const b = vscriptGenerator.statementToCode(block, 'DIVISOR');
    return a + '%' + b;
}
vscriptGenerator['math_random_int'] = function(block) {
    const from = vscriptGenerator.statementToCode(block, 'FROM');
    const to = vscriptGenerator.statementToCode(block, 'TO');
    return 'RandomInt(' + from + ',' + to + ')';
}
vscriptGenerator['math_random_float'] = function(block) {
    return 'RandomFloat(0,1)';
}
vscriptGenerator['math_atan2'] = function(block) {
    const a = vscriptGenerator.statementToCode(block, 'A');
    const b = vscriptGenerator.statementToCode(block, 'B');
    return 'atan2(' + a + ',' + b + ')'
}

vscriptGenerator['math_on_list'] = function(block) {}
vscriptGenerator['math_constrain'] = function(block) {}


// text
vscriptGenerator['text'] = function(block) {
    const text = block.getFieldValue('TEXT');
    return `"${text}"`;
}
vscriptGenerator['text_multiline'] = function(block) {
    const text = block.getFieldValue('TEXT');
    return `@"${text}"`;
}
vscriptGenerator['text_join'] = function(block) {
    let curr = 0;
    let code = '';
    let currentText = vscriptGenerator.statementToCode(block, `ADD0`);
    while(currentText !== '') {
    if(curr !== 0) {
        code += '+';
    }
    code += currentText;
    curr++;
    currentText = vscriptGenerator.statementToCode(block, `ADD${curr}`);
    }
    return `(${code})`;
}
vscriptGenerator['text_append'] = function(block) {
    const varName = vscriptGenerator.idToName(block.getFieldValue('VAR'));
    const text = vscriptGenerator.statementToCode(block, 'TEXT');
    return `${varName} += ${text};`
}
vscriptGenerator['text_length'] = function(block) {
    const text = vscriptGenerator.statementToCode(block, 'VALUE');
    return `${text}.len()`;
}
vscriptGenerator['text_isEmpty'] = function(block) {
    const text = vscriptGenerator.statementToCode(block, 'VALUE');
    return `((${text}.len())==0) || ((${text}.len())==null)`;
}
vscriptGenerator['text_indexOf'] = function(block) {
    const text = vscriptGenerator.statementToCode(block, 'VALUE');
    const toFind = vscriptGenerator.statementToCode(block, 'FIND');
    const searchDirection = block.getFieldValue('END');
    if(searchDirection === 'FIRST') {
    return `${text}.find(${toFind})`
    } else {
    return `findLast(${text},${toFind})`;
    }
}


// Lists
vscriptGenerator['lists_create_empty'] = function(block) {
    return '[]';
}
vscriptGenerator['lists_create_with'] = function(block) {
    let curr = 0;
    let code = '';
    let currentList = vscriptGenerator.statementToCode(block, `ADD0`);
    while(currentList !== '') {
    if(curr !== 0) {
        code += ',';
    }
    code += currentList;
    curr++;
    currentList = vscriptGenerator.statementToCode(block, `ADD${curr}`);
    }
    return `[${code}]`;
}
vscriptGenerator['lists_repeat'] = function(block) {
    const item = vscriptGenerator.statementToCode(block, 'ITEM');
    const number = vscriptGenerator.statementToCode(block, 'NUM');
    return `[].resize(${number},${item})`;
}
vscriptGenerator['lists_reverse'] = function(block) {
    const list = vscriptGenerator.statementToCode(block, 'LIST');
    return `${list}.reverse()`;
}
vscriptGenerator['lists_isEmpty'] = function(block) {
    const list = vscriptGenerator.statementToCode(block, 'VALUE');
    return `((${list}.len())==0) || ((${list}.len())==null)`;
}
vscriptGenerator['lists_length'] = function(block) {
    const list = vscriptGenerator.statementToCode(block, 'VALUE');
    return `${list}.len()`;
}


// variables
vscriptGenerator['variables_get'] = function(block) {
    const varId = block.getFieldValue('VAR');
    const varName = vscriptGenerator.idToName(varId);
    return variablePrefix + varName;
}
vscriptGenerator['variables_set'] = function(block) {
    const varId = block.getFieldValue('VAR');
    const varName = vscriptGenerator.idToName(varId);
    const value = vscriptGenerator.statementToCode(block, 'VALUE');
    return variablePrefix+varName + '=' + value;
}


// p2 console
vscriptGenerator['console_print'] = function(block) {
    const text = vscriptGenerator.statementToCode(block, 'TEXT');
    return `printl(${text});\n`;
}
vscriptGenerator['console_execute'] = function(block) {
    const command = vscriptGenerator.statementToCode(block, 'COMMAND');
    return `SendToConsole(${command});\n`;
}
vscriptGenerator['console_execute_client'] = function(block) {
    const command = vscriptGenerator.statementToCode(block, 'COMMAND');
    return `ddutil.clientExecute(${command})`
}


// ppmod
vscriptGenerator['ppmod_get'] = function(block) {
    const name = vscriptGenerator.statementToCode(block, 'NAME');
    return `ppmod.get(${name})`;
}
vscriptGenerator['ppmod_fire'] = function(block) {
    const action = vscriptGenerator.statementToCode(block, 'ACTION');
    const entity = vscriptGenerator.statementToCode(block, 'ENTITY');
    const value = vscriptGenerator.statementToCode(block, 'VALUE');
    const delay = vscriptGenerator.statementToCode(block, 'DELAY');
    
    return `ppmod.fire(entity=${entity},action="${action}",value="${value}",delay="${delay}");\n`;
}
vscriptGenerator['ppmod_add_script'] = function(block) {
    const entity = vscriptGenerator.statementToCode(block, 'ENTITY');
    const entityOutput = vscriptGenerator.statementToCode(block, 'OUTPUT');
    const script = vscriptGenerator.statementToCode(block, 'SCRIPT');
    const delay = vscriptGenerator.statementToCode(block, 'DELAY');
    
    return `ppmod.addscript(${entity},${entityOutput},function(){\n${script}\n}, delay=${delay});\n`;
}
vscriptGenerator['ppmod_keyval'] = function(block) {
    const entity = vscriptGenerator.statementToCode(block, 'ENTITY');
    const key = vscriptGenerator.statementToCode(block, 'KEY');
    const value = vscriptGenerator.statementToCode(block, 'VALUE');
    
    return `ppmod.keyval(${entity}, ${key}, ${value});\n`;
}
vscriptGenerator['ppmod_wait'] = function(block) {
    const delay = vscriptGenerator.statementToCode(block, 'DELAY');
    const code = vscriptGenerator.statementToCode(block, 'CODE');
    
    return `ppmod.wait(function(){\n${code}\n}, ${delay});\n`;
}



// events
vscriptGenerator['setup'] = function(block) {
    const setupCode = vscriptGenerator.statementToCode(block, 'CODE');
    return `ddutil.runOnSetup(function() {\n${setupCode}\n});`
}
vscriptGenerator['tick'] = function(block) {
    const actions = vscriptGenerator.statementToCode(block, 'CODE');
    return `ppmod.interval(function() {\n${actions}\n});`
}
vscriptGenerator['ppmod_repeat'] = function(block) {
    const actions = vscriptGenerator.statementToCode(block, 'CODE');
    const intervall = vscriptGenerator.statementToCode(block, 'INTERVALL');
    const condition = vscriptGenerator.statementToCode(block, 'COND');
    if(condition === 'true') return ` ppmod.interval(function() {\n${actions}\n}, ${intervall});`
    return `local en__ ddutil.genUniqueEntName();\n ppmod.interval(function(en__ = en__) {\nif(!(${condition})){ppmod.fire(en__, "kill")}\n${actions}\n}, ${intervall}, en__ );`
}
