"use strict";

import { vscriptGenerator } from "./modules/vscriptGenerator/generator.mjs";
import { getToolbox } from "./js/toolbox.mjs";
import { customBlockValues } from "./modules/customBlocks/gameContents.mjs";
import { pack, pickIcon } from "./js/main.js";
import { portal2_models } from "./js/models.mjs";
import { menubar } from "./menuBar/menuBar.mjs";
import { version__, fileVersion_ } from "./js/constants.mjs";
import { saveWorkspaceToFile, loadWorkspaceFromFile } from "./modules/export-import.mjs";



let mdlSelectionIndex;
export function limitList(searchTerm) {
  let validElements = portal2_models.filter(x => x.includes(searchTerm));
  const domList = document.getElementById('mdlList');
  domList.innerHTML = ""; // remove last search result
  for(const e of validElements) {
    const li = document.createElement('li');
    li.innerHTML = e;
    li.onclick = function() {selectModel(this.innerHTML)};
    domList.appendChild(li);
  } 
}
export function selectModel(mdlName) {
  document.getElementById('mdlSearch').value = "";
  document.getElementById('mdlSelection').hidden = true;
  try {
    customBlockValues.mdl_select[mdlSelectionIndex] = mdlName;
    mdlSelectionIndex = -1;
    VSCRIPT_BLOCKLY.updateCode();
  } catch (e) {
    console.warn('nowhere to save selected model to');
  }
}
export function showModelSelection(opt_index) {
  limitList("");
  document.getElementById('mdlSelection').hidden = false;
  if(opt_index) {
    mdlSelectionIndex = opt_index;
  }
}

class VscriptBlockly { 
  updateCode(event) {
    // include dependencies
    let code = 'if(!Entities in this) {\nreturn;\n}\n'
    code += 'IncludeScript("custom/ppmod");\n';
    code += 'IncludeScript("custom/ddutil");\n\n';

    // define variables in script scope
    const variables = Blockly.getMainWorkspace().getAllVariables()
    code += '::mod <- {};\n';
    code += `// decaring variables on a global scope is generally not advised when codeing manually\nmod.v <- {};\nmod._pV <- {};\n`;
    variables.forEach(v => {
      code += VSCRIPT_BLOCKLY.variablePrefix + v.name + ' <- null;\n';
    });
    code += '\n';

    // generate code
    code += vscriptGenerator.workspaceToCode(Blockly.getMainWorkspace());
    console.log(code);
    VSCRIPT_BLOCKLY.mapSpawnCode = code;
    // document.getElementById('textArea').innerText = code;
  }
  showCode() {
    VSCRIPT_BLOCKLY.updateCode();
    alert(VSCRIPT_BLOCKLY.mapSpawnCode);
  }
  constructor(){
    this.variablePrefix = 'mod.v.';
    this.privateVariablePrefix = 'mod._pV';
    this.mapSpawnCode = "";
  
    this.workspace = Blockly.inject('blocklyDiv', {toolbox: getToolbox()});
    vscriptGenerator.initNameDB(this.workspace);
    this.workspace.addChangeListener(this.updateCode);
  }
}

export const VSCRIPT_BLOCKLY = new VscriptBlockly();


function underline(s) { // https://stackoverflow.com/a/17471507/15581412
  var arr = s.split('');
  s = arr.join('\u0332');
  if (s) s = s + '\u0332';
  return s;
}

function showAbout() {
  alert(`${underline('vscript-blockly')}

  The simplest way to create portal 2 mods!
  version: ${version__}
  `)
}

function appendWorkspace() {
  loadWorkspaceFromFile(true);
}


// add menu bar
menubar.addMenuPoint('File', [
  ['Open workspace', loadWorkspaceFromFile],
  ['Save workspace', saveWorkspaceToFile],
  ['Append workspace', appendWorkspace]
]);
menubar.addMenuPoint('Export', [
  ['create spplice pack', pack],
  ['show code', VSCRIPT_BLOCKLY.showCode]
]);

menubar.addMenuPoint('Info', [
  ['about', showAbout]
]);


window.addEventListener('unload',
      VSCRIPT_BLOCKLY.saveWorkspaceToFile, false);


// make elements available in html
window.VSCRIPT_BLOCKLY = VSCRIPT_BLOCKLY;
window.selectModel = selectModel;
window.pack = pack;

window.menubar = menubar;
window.limitList = limitList;
window.selectModel = selectModel;
window.pickIcon = pickIcon;

