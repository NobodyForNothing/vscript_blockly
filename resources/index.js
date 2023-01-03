"use strict";

let SETTINGS = {
  pretifyGeneratedCode: {
    active: true,
    removeRepeatingCommata: true,
    removeComments: false,
    indentCode: true,
    indentCodeCharCount: 2, // indentation characters per depth
    indentCodeChar: ' ', 
  }
}

import { vscriptGenerator } from "./modules/vscriptGenerator/generator.mjs";
import { getToolbox } from "./js/toolbox.mjs";
import { pack, pickIcon } from "./js/main.js";
import { menubar } from "./menuBar/menuBar.mjs";
import { version__, fileVersion_ } from "./js/constants.mjs";
import { saveWorkspaceToFile, loadWorkspaceFromFile } from "./modules/export-import.mjs";
import { limitList, selectModel } from "./modules/selection/selectionMenu.mjs";
import { importMapFile, importVpkFile, manageCustomContent } from "./modules/customContenent/customContentMenus.mjs";


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
    console.log(variables);
    variables.forEach(v => {
      const varName = vscriptGenerator.idToName(v.id);
      code += `${varName} <- null;\n`;
    });
    code += '\n';

    // generate code
    code += vscriptGenerator.workspaceToCode(Blockly.getMainWorkspace());
    console.log(code);

    if (SETTINGS.pretifyGeneratedCode.active) {
      if (SETTINGS.pretifyGeneratedCode.removeRepeatingCommata) {
        code = code.replace(/ +(?= )/g,' ')
      }
      if (SETTINGS.pretifyGeneratedCode.removeComments) {
        code = code.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '$1');
      }
      if (SETTINGS.pretifyGeneratedCode.indentCode) {
        // indentation detection happens through detecting how often blocks open ('{') and close ('}')
        const codeLines = code.split('\n');
        let currentIndent = 0;
        console.log(code);
        code = '';
        for(const line of codeLines) {
          // closing brackets must be searched before indentation to avoid ugly closing if statements
          const blockCloseCount = line.split('}').length-1;
          currentIndent -= blockCloseCount;

          const spaceCount = currentIndent * SETTINGS.pretifyGeneratedCode.indentCodeCharCount;
          code += SETTINGS.pretifyGeneratedCode.indentCodeChar.repeat(spaceCount);
          code += line.trim(); // might mess with multiline-strings in code
          code += '\n';
          
          const blockOpenCount = line.split('{').length-1;
          currentIndent += blockOpenCount;
        }
        console.log(code);
      }
    }

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
  let arr = s.split('');
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
menubar.addMenuPoint('Resources', [
  ['add map', importMapFile],
  ['add vpk', importVpkFile],
  ['manage', manageCustomContent]
]);
menubar.addMenuPoint('Export', [
  ['create spplice pack', pack],
  ['show code', VSCRIPT_BLOCKLY.showCode]
]);

menubar.addMenuPoint('Info', [
  ['about', showAbout]
]);


// make links work
let defaultHelp = Blockly.ContextMenuRegistry.registry.getItem("blockHelp")
defaultHelp.callback= function(a) {
  Neutralino.os.open(a.block.helpUrl);
};



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

window.importMapFile = importMapFile;

