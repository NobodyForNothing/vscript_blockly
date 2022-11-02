import { vscriptGenerator } from "./generator.mjs";

// ppmod
vscriptGenerator['ppmod_get'] = function (block) {
  const name = vscriptGenerator.statementToCode(block, 'NAME');
  return `ppmod.get(${name})`;
}
vscriptGenerator['ppmod_fire'] = function (block) {
  const action = vscriptGenerator.statementToCode(block, 'ACTION');
  const entity = vscriptGenerator.statementToCode(block, 'ENTITY');
  const value = vscriptGenerator.statementToCode(block, 'VALUE');
  const delay = vscriptGenerator.statementToCode(block, 'DELAY');

  return `ppmod.fire(${entity},${action},${value},${delay});\n`;
}
vscriptGenerator['ppmod_add_script'] = function (block) {
  const entity = vscriptGenerator.statementToCode(block, 'ENTITY');
  const entityOutput = vscriptGenerator.statementToCode(block, 'OUTPUT');
  const script = vscriptGenerator.statementToCode(block, 'SCRIPT');
  const delay = vscriptGenerator.statementToCode(block, 'DELAY');

  return `ppmod.addscript(${entity},${entityOutput},function(){\n${script}\n},${delay});\n`;
}
vscriptGenerator['ppmod_keyval'] = function (block) {
  const entity = vscriptGenerator.statementToCode(block, 'ENTITY');
  const key = vscriptGenerator.statementToCode(block, 'KEY');
  const value = vscriptGenerator.statementToCode(block, 'VALUE');

  return `ppmod.keyval(${entity}, ${key}, ${value});\n`;
}
vscriptGenerator['ppmod_wait'] = function (block) {
  const delay = vscriptGenerator.statementToCode(block, 'DELAY');
  const code = vscriptGenerator.statementToCode(block, 'CODE');

  return `ppmod.wait(function(){\n${code}\n}, ${delay});\n`;
}
vscriptGenerator['ppmod_repeat'] = function (block) {
  const actions = vscriptGenerator.statementToCode(block, 'CODE');
  const intervall = vscriptGenerator.statementToCode(block, 'INTERVALL');
  const condition = vscriptGenerator.statementToCode(block, 'COND');
  if (condition === 'true') return `ppmod.interval(function() {\n${actions}\n}, ${intervall});`
  return `local en__ ddutil.genUniqueEntName();\n ppmod.interval(function(en__ = en__) {\nif(!(${condition})){ppmod.fire(en__, "kill")}\n${actions}\n}, ${intervall}, en__ );`
}
vscriptGenerator['ppmod_player_eyes'] = function (block) {
  return 'ppmod.player.eyes.GetOrigin()'
}
vscriptGenerator['ppmod_player_holding'] = function (block) { // todo 
  return `${VSCRIPT_BLOCKLY.privateVariablePrefix}.holds = null;ppmod.player.holding(function(state){${VSCRIPT_BLOCKLY.privateVariablePrefix}.holds = state});\nwhile(${VSCRIPT_BLOCKLY.privateVariablePrefix}.holds)`;
}
vscriptGenerator['ppmod_player_event'] = function (block) {
  const eventType = block.getFieldValue('EVENT');
  const action = vscriptGenerator.statementToCode(block, 'CODE');
  let code = 'ppmod.player.';
  code += eventType.toLowerCase();
  code += `(function() {${action}});`;
  return code;
}
vscriptGenerator['ppmod_create'] = function (block) {
  const name = vscriptGenerator.statementToCode(block, 'NAME');
  const code = vscriptGenerator.statementToCode(block, 'CODE');
  return `ppmod.create(${name}, function(_ent){\n${code}\n});`
}
vscriptGenerator['var_pre_ent'] = function (block) {
  const varName = vscriptGenerator.idToName(block.getFieldValue('VAR'));
  return `// making local variable global\n// bad practise\n${VSCRIPT_BLOCKLY.variablePrefix}.${varName} = _ent;\n`
}
vscriptGenerator['ppmod_text_simple'] = function (block) {
  const text = vscriptGenerator.statementToCode(block, 'TEXT');
  return `ppmod.text(${text});`
}
vscriptGenerator.txtCount = 0;
vscriptGenerator['ppmod_text'] = function (block) {
  // get variables
  const text = vscriptGenerator.statementToCode(block, 'TEXT');
  const x = vscriptGenerator.statementToCode(block, 'X');
  const y = vscriptGenerator.statementToCode(block, 'Y');
  const displayTime = vscriptGenerator.statementToCode(block, 'TIME');
  const textColor = vscriptGenerator.statementToCode(block, 'COL_FORG');
  const backgroundColor = vscriptGenerator.statementToCode(block, 'COL_BACK');
  const fadeInTime = vscriptGenerator.statementToCode(block, 'FADEIN');
  const fadeOutTime = vscriptGenerator.statementToCode(block, 'FADEOUT');
  const optionPlayers = block.getFieldValue('PLAYERS');
  const optionChannel = block.getFieldValue('CHANNEL');
  const bgTransparent = block.getFieldValue('TRANSPARENT');

  // generate code
  vscriptGenerator.txtCount++;
  const varNum = vscriptGenerator.txtCount;
  let codePlayers;
  switch (optionPlayers) {
    case 'BLUE': // todo test multiplayer text
      codePlayers = 'GetBluePlayerIndex()';
      break;
    case 'ORANGE':
      codePlayers = 'GetOrangePlayerIndex()'
    default:
      codePlayers = 'null';
      break;
  }

  let code = `local txt${varNum} = ppmod.text(${text},${x}${y});\n`
  code += `txt${varNum}.setChanel(${optionChannel.toLowerCase()});\n`;
  code += `txt${varNum}.SetFade(${fadeInTime}, ${fadeOutTime});\n`;
  code += `txt${varNum}.Display(${displayTime}, ${codePlayers});\n`;
  if (bgTransparent === 'TRUE') {
    code += `txt${varNum}.SetColor(${textColor});\n`;
  } else {
    code += `txt${varNum}.SetColor(${textColor}, ${backgroundColor});\n`;
  }
  console.log(block);
  return code;
}