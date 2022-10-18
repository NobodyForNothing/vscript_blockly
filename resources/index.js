const variablePrefix = 'mod.v.';

let mapSpawnCode = "";

const modInfo = {
  name: "graphicalMod",
  description: "A mod created with derdillas graphical portal 2 mod creator.",
}

const workspace = Blockly.inject('blocklyDiv', {toolbox: toolbox});
vscriptGenerator.initNameDB(workspace);

function updateCode(event) {
    // include dependencies
    let code = 'if(!Entities in this) {\nreturn;\n}\n'
    code += 'IncludeScript("custom/ppmod");\n';
    code += 'IncludeScript("custom/ddutil");\n\n';

    // define variables in script scope
    const variables = Blockly.getMainWorkspace().getAllVariables()
    code += '::mod <- {};\n';
    code += `// decaring variables on a global scope is generally not advised when codeing manually\nmod.v <- {};\n`;
    variables.forEach(v => {
      code += variablePrefix + v.name + ' <- null;\n';
    });
    code += '\n';

    // generate code
    code += vscriptGenerator.workspaceToCode(workspace);
    mapSpawnCode = code;
    // document.getElementById('textArea').innerText = code;
  }
workspace.addChangeListener(updateCode);

async function saveWorkspaceToFile() {
  // create workspace folder
  try {await Neutralino.filesystem.getStats(`${NL_PATH}/workspaces`) }
  catch (e) { await Neutralino.filesystem.createDirectory(`${NL_PATH}/workspaces`) }
  
  // save workspace
  let xml = Blockly.Xml.workspaceToDom(workspace);
  xml = new XMLSerializer().serializeToString(xml);
  const modname = document.getElementById("pkg-name").value.toLowerCase().replace(/ /g, "-").replace(/[^A-Za-z0-9-]/g, "");
  try { await Neutralino.filesystem.writeFile(`${NL_PATH}/workspaces/${modname}_${Date.now()}.xml`, xml); } catch (e) {
  console.log(e)}
  
  
  console.log(xml);
}

async function loadWorkspaceFromFile() {
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
  workspace.clear();
  Blockly.Xml.domToWorkspace(xml, workspace);
}

window.addEventListener('unload',
      saveWorkspaceToFile, false);

