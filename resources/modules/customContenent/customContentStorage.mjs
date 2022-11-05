import { _arrayBufferToBase64, _base64ToArrayBuffer, getFileInformationFromPath } from "../../js/util.mjs";

const SAVABLE_TYPES = {
  MAP: 'bsp',
  VPK: 'vpk'
}

let mapFiles_ = [];
let vpkFiles_ = [];

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

export async function loadVpkFile(fileOnDisk) {
  // check file
  const fileInformation = getFileInformationFromPath(fileOnDisk);
  if (fileInformation['fileExt'] !== SAVABLE_TYPES.VPK) return;
  const stats = await Neutralino.filesystem.getStats(fileOnDisk);
  if (stats.isDirectory || !stats.isFile) return;

  // load Pack
  const mapData = await Neutralino.filesystem.readBinaryFile(fileOnDisk);
  const storableMapData = _arrayBufferToBase64(mapData);
  const compressedMapData = LZString.compressToBase64(storableMapData);

  vpkFiles_[vpkFiles_.length] = {
    'fileName': fileInformation.fileName,
    'data': compressedMapData
  }
}

export function getExtraContent() {
  return {
    'addedMaps': mapFiles_,
    'addedVpks': vpkFiles_
  }
}

export function loadExtraContent(content, append) {
  if (!append) {
    mapFiles_ = content['addedMaps'];
    vpkFiles_ = content['addedVpks'];

  } else {
    for (const x of content['addedMaps']) {
      mapFiles_[mapFiles_.length] = x;
    }
    for (const x of content['addedVpks']) {
      vpkFiles_[vpkFiles_.length] = x;
    }
  }
}

export function deleteMap(fileName) {
  for (let i = 0; i < mapFiles_.length; i++) {
    const element = mapFiles_[i];
    if(element['fileName'] === fileName) {
      mapFiles_.splice(i, 1);
    }
    
  }
}

export function deleteVpk(fileName) {
  for (let i = 0; i < vpkFiles_.length; i++) {
    const element = vpkFiles_[i];
    if(element['fileName'] === fileName) {
      vpkFiles_.splice(i, 1);
    }
    
  }
}