import { pkg, checkValidity, createPackage, selectImage, updateDesc, updateTitle } from "../spplicer/spplicer.mjs";
import { VSCRIPT_BLOCKLY } from "../index.js";
import { _arrayBufferToBase64, _decompressToArrayBuffer, _createFolderIfPossible } from "./util.mjs";
import { getExtraContent } from "../modules/customContenent/customContentStorage.mjs";

Neutralino.init();

export async function pack() {
  // regenerate code
  VSCRIPT_BLOCKLY.updateCode();

  // create dlc structure
  await _createFolderIfPossible(`${NL_PATH}/.tmp`);
  await _createFolderIfPossible(`${NL_PATH}/.tmp/portal2_dlc5`);
  await _createFolderIfPossible(`${NL_PATH}/.tmp/portal2_dlc5/scripts`);
  await _createFolderIfPossible(`${NL_PATH}/.tmp/portal2_dlc5/scripts/vscripts`);
  await _createFolderIfPossible(`${NL_PATH}/.tmp/portal2_dlc5/scripts/vscripts/custom`);

  // copy libaray files
  try {
    await Neutralino.filesystem.copyFile(`${NL_PATH}/resources/vscripts/ppmod.nut`, `${NL_PATH}/.tmp/portal2_dlc5/scripts/vscripts/custom/ppmod.nut`);
    await Neutralino.filesystem.copyFile(`${NL_PATH}/resources/vscripts/ddutil.nut`, `${NL_PATH}/.tmp/portal2_dlc5/scripts/vscripts/custom/ddutil.nut`);
  } catch (e) { console.error(e) };

  // write mapspawn file
  try { Neutralino.filesystem.writeFile(`${NL_PATH}/.tmp/portal2_dlc5/scripts/vscripts/mapspawn.nut`, VSCRIPT_BLOCKLY.mapSpawnCode) }
  catch (e) { console.log(e); document.getElementById('packingErrorBox').innerText = 'ERROR: check console'; return }

  // write custom content
  const extraContent = getExtraContent();
  writeExtraContent(extraContent['addedMaps'], `${NL_PATH}/.tmp/portal2_dlc5/maps`);
  writeExtraContent(extraContent['addedVpks'], `${NL_PATH}/.tmp/portal2_dlc5`);

  // prepare info for spplicer
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

async function writeExtraContent(content, path) {
  if (content && content.length > 0) {
    try { await Neutralino.filesystem.removeDirectory(path); } catch (e) { }
    await _createFolderIfPossible(path);
    for (const contentFile of content) {
      const rawBin = _decompressToArrayBuffer(contentFile['data']);
      await Neutralino.filesystem.writeBinaryFile(`${path}/${contentFile['fileName']}`, rawBin);
    }
  }
}


Neutralino.events.on("windowClose", function () {
  Neutralino.app.exit();
});

