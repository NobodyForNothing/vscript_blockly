import { VSCRIPT_BLOCKLY } from "../index.js";
import { version__, fileVersion_ } from "../js/constants.mjs";
import { pkg } from "../spplicer/spplicer.js";
import { displayImageFromFile } from "../js/main.js";

export async function saveWorkspaceToFile(saveLocation = undefined) {
  // create workspace folder
  try {await Neutralino.filesystem.getStats(`${NL_PATH}/workspaces`) }
  catch (e) { await Neutralino.filesystem.createDirectory(`${NL_PATH}/workspaces`) }
  
  // generate title
  let modname = document.getElementById("pkg-title").value.toLowerCase().replace(/ /g, "-").replace(/[^A-Za-z0-9-]/g, "");
  if(modname === '') modname = 'unnamedMod';

  // collect information
  let workspaceJson = Blockly.serialization.workspaces.save(VSCRIPT_BLOCKLY.workspace);
  let json = {
    "blockly-version": version__,
    "file-version" : fileVersion_,
    "mod-title" : document.getElementById("pkg-title").value,
    "mod-description" : document.getElementById("pkg-desc").value,
    "icon-path" : pkg.img,
    "icon-ext" : pkg.imgext,
    "workspace" : workspaceJson
  }
  json = JSON.stringify(json);

  // save workspace
  if(saveLocation !== undefined) {
    try { await Neutralino.filesystem.writeFile(saveLocation, json); } catch (e) { console.log(e) }
  } else {
    try { await Neutralino.filesystem.writeFile(`${NL_PATH}/workspaces/${modname}_${Date.now()}.json`, json); } catch (e) { console.log(e) }
  }
  
}
export async function loadWorkspaceFromFile(appendWorkspace=false) {
  const filePath = await Neutralino.os.showOpenDialog('Load workspace from file', {
      defaultPath: `${NL_PATH}/workspaces`,
      filters: [
        {name: 'Load files', extensions: ['json']},
      {name: 'Load legacy files', extensions: ['xml']},
      {name: 'All files', extensions: ['*']}
      ]
  });
  // get file extension
  let fileName = filePath[0].split("/");
  fileName = fileName[fileName.length - 1].split("\\");
  fileName = fileName[fileName.length - 1];
  let fileExt = fileName.split(".");
  fileExt = fileExt[fileExt.length - 1];
  
  // find correct parser
  switch (fileExt.toLowerCase()) {
    case 'json':
      await loadWorkspaceFromJSONFile(filePath[0],appendWorkspace);
      break;
    case 'xml':
      await loadWorkspaceFromXMLFile(filePath[0],appendWorkspace);
      break;
    default:
      alert(`warning: problem identifying file, 
      if you experience any loading issues try changing its 
      extension to '.xml' or '.json'`)
      loadWorkspaceFromJSONFile(filePath[0],appendWorkspace);
      break;
  }

}

async function loadWorkspaceFromXMLFile(xmlPath, appendWorkspace) {
  let xml = null;
  try { xml = await Neutralino.filesystem.readFile(xmlPath) } catch (e) {
    console.log(e); }
  xml = Blockly.Xml.textToDom(xml);
  
  if (!appendWorkspace) {
    // Clear the workspace to avoid merge.
    VSCRIPT_BLOCKLY.workspace.clear();
  }
  Blockly.Xml.domToWorkspace(xml, VSCRIPT_BLOCKLY.workspace);
}

async function loadWorkspaceFromJSONFile(jsonPath, appendWorkspace) {
  // load json
  let json = null;
  try { json = await Neutralino.filesystem.readFile(jsonPath) } catch (e) {
    console.log(e); }
  json = JSON.parse(json);

  const fileVersion = json['file-version'];
  try{
    loadWorkspaceFromJSON[fileVersion](json, appendWorkspace);
  } catch(e) {
    console.log(fileVersion);
    loadWorkspaceFromJSON['1.0'](json, appendWorkspace);
  }
}
function loadWorkspace(serializedWorkspaceJson, blocklyVersion, appendWorkspace) {
  if (!appendWorkspace) {
    VSCRIPT_BLOCKLY.workspace.clear();
  }
  Blockly.serialization.workspaces.load(serializedWorkspaceJson, VSCRIPT_BLOCKLY.workspace);
}

const loadWorkspaceFromJSON = {};

loadWorkspaceFromJSON['1.0'] = function(json, appendWorkspace) {
  const blocklyVersion = json['blockly-version'];
  console.log(json);
  // load information
  document.getElementById("pkg-title").value = json['mod-title'];
  document.getElementById("pkg-desc").value = json['mod-description'];
  if (json['icon-path'].length > 0) {
    displayImageFromFile(json['icon-path'], json['icon-ext'])
  }
  loadWorkspace(json['workspace'], blocklyVersion, appendWorkspace)
}
