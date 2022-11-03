import { pkg, checkValidity, createPackage, selectImage, updateDesc, updateTitle } from "../spplicer/spplicer.mjs";
import { VSCRIPT_BLOCKLY } from "../index.js";


Neutralino.init();

export async function pack() {
  // regenerate code
  VSCRIPT_BLOCKLY.updateCode();

  // create dlc structure
  try { await Neutralino.filesystem.getStats(`${NL_PATH}/.tmp`) }
  catch (e) { await Neutralino.filesystem.createDirectory(`${NL_PATH}/.tmp`) }
  try { await Neutralino.filesystem.removeDirectory(`${NL_PATH}/.tmp/portal2_dlc5`) }
  catch (e) { }
  try {
    await Neutralino.filesystem.createDirectory(`${NL_PATH}/.tmp/portal2_dlc5`);
    await Neutralino.filesystem.createDirectory(`${NL_PATH}/.tmp/portal2_dlc5/scripts`);
    await Neutralino.filesystem.createDirectory(`${NL_PATH}/.tmp/portal2_dlc5/scripts/vscripts`);
    await Neutralino.filesystem.createDirectory(`${NL_PATH}/.tmp/portal2_dlc5/scripts/vscripts/custom`);
  } catch (e) {
    console.log(e);
  }
  // copy libaray files
  try {
    await Neutralino.filesystem.copyFile(`${NL_PATH}/resources/vscripts/ppmod.nut`, `${NL_PATH}/.tmp/portal2_dlc5/scripts/vscripts/custom/ppmod.nut`);
    await Neutralino.filesystem.copyFile(`${NL_PATH}/resources/vscripts/ddutil.nut`, `${NL_PATH}/.tmp/portal2_dlc5/scripts/vscripts/custom/ddutil.nut`);
  } catch (e) { console.error(e) };

  // write mapspawn file
  try { Neutralino.filesystem.writeFile(`${NL_PATH}/.tmp/portal2_dlc5/scripts/vscripts/mapspawn.nut`, VSCRIPT_BLOCKLY.mapSpawnCode) }
  catch (e) { console.log(e); document.getElementById('packingErrorBox').innerText = 'ERROR: check console'; return }

  // sanitize info for spplicer
  pkg.dir = `${NL_PATH}/.tmp/portal2_dlc5`;
  updateTitle()
  updateDesc();

  checkValidity();
  createPackage();
}

export async function pickIcon() {
  const imagePath = await selectImage();
  if (imagePath) {
    displayImageFromFile(imagePath, pkg.imgext)
  }
}

export async function displayImageFromFile(path, ext = 'png') {
  // load image
  const data = await Neutralino.filesystem.readBinaryFile(path);
  // display image
  const domImg = document.getElementById('icon-path');
  domImg.src = `data:image/${ext};base64,${_arrayBufferToBase64(data)}`;
}

function _arrayBufferToBase64(buffer) {
  let binary = '';
  let bytes = new Uint8Array(buffer);
  let len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}

Neutralino.events.on("windowClose", function () {
  Neutralino.app.exit();
});

