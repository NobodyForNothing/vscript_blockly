import { _arrayBufferToBase64, _base64ToArrayBuffer, getFileInformationFromPath } from "../../js/util.mjs";

const SAVABLE_TYPES = {
  MAP: 'bsp'
}

let mapFiles_ = [];
window.as = mapFiles_;

export async function loadMapFile(fileOnDisk) {
  // check file
  const fileInformation = getFileInformationFromPath(fileOnDisk);
  if (fileInformation['fileExt'] !== SAVABLE_TYPES.MAP) return;
  const stats = await Neutralino.filesystem.getStats(fileOnDisk);
  if (stats.isDirectory || !stats.isFile) return;

  // load Map
  const mapData = await Neutralino.filesystem.readBinaryFile(fileOnDisk);
  const storableMapData = _arrayBufferToBase64(mapData);
  const compressedMapData = LZString.compressToBase64(storableMapData);

  mapFiles_[mapFiles_.length] = {
    'fileName': fileInformation.fileName,
    'data': compressedMapData
  }
}

export function getExtraContent() {
  return {
    'addedMaps': mapFiles_
  }
}

export function loadExtraContent(content, append) {
  if (!append) {
    mapFiles_ = content['addedMaps'];


  } else {
    for (const x of content['addedMaps']) {
      mapFiles_[mapFiles_.length] = x;
    }
  }

}