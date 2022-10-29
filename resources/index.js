"use strict";

import { vscriptGenerator } from "./modules/vscriptGenerator/generator.mjs";
import { getToolbox } from "./js/toolbox.mjs";
import { customBlockValues } from "./modules/customBlocks/gameContents.mjs";
import { pack } from "./js/main.js";
import { portal2_models } from "./js/models.mjs";
import { menubar } from "./menuBar/menuBar.mjs"

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
  async saveWorkspaceToFile() {
    // create workspace folder
    try {await Neutralino.filesystem.getStats(`${NL_PATH}/workspaces`) }
    catch (e) { await Neutralino.filesystem.createDirectory(`${NL_PATH}/workspaces`) }
    
    // save workspace
    let xml = Blockly.Xml.workspaceToDom(VSCRIPT_BLOCKLY.workspace);
    xml = new XMLSerializer().serializeToString(xml);
    let modname = document.getElementById("pkg-title").value.toLowerCase().replace(/ /g, "-").replace(/[^A-Za-z0-9-]/g, "");
    if(modname === '') modname = 'unnamedMod';
    try { await Neutralino.filesystem.writeFile(`${NL_PATH}/workspaces/${modname}_${Date.now()}.xml`, xml); } catch (e) { console.log(e) }
  }
  async loadWorkspaceFromFile() {
    const xmlPath = await Neutralino.os.showOpenDialog('Load workspace from file', {
      defaultPath: `${NL_PATH}/workspaces`,
      filters: [
        {name: 'Images', extensions: ['xml']},
        {name: 'All files', extensions: ['*']}
      ]
    });
    console.log(xmlPath);
    let xml = null;
    try {xml = await Neutralino.filesystem.readFile(xmlPath[0])} catch (e) {
      console.log(e);
    }
    console.log(xml);
    xml = Blockly.Xml.textToDom(xml);

    // Clear the workspace to avoid merge.
    VSCRIPT_BLOCKLY.workspace.clear();
    Blockly.Xml.domToWorkspace(xml, VSCRIPT_BLOCKLY.workspace);
  }
  showCode() {
    VSCRIPT_BLOCKLY.updateCode();
    alert(VSCRIPT_BLOCKLY.mapSpawnCode);
  }
  constructor(){
    this.variablePrefix = 'mod.v.';
    this.privateVariablePrefix = 'mod._pV';
    this.modInfo = {
      name: "graphicalMod",
      description: "A mod created with derdillas graphical portal 2 mod creator.",
    }
    this.mapSpawnCode = "";
  
    this.workspace = Blockly.inject('blocklyDiv', {toolbox: getToolbox()});
    vscriptGenerator.initNameDB(this.workspace);
    this.workspace.addChangeListener(this.updateCode);
  }
}

export const VSCRIPT_BLOCKLY = new VscriptBlockly();

// add menu bar
menubar.addMenuPoint('File', [
  ['Open workspace', VSCRIPT_BLOCKLY.loadWorkspaceFromFile],
  ['Save workspace', VSCRIPT_BLOCKLY.saveWorkspaceToFile]
]);
menubar.addMenuPoint('Export', [
  ['create spplice pack', pack],
  ['show code', VSCRIPT_BLOCKLY.showCode]
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