import LZString from "lz-string";
import { _arrayBufferToBase64, getFileInformationFromPath } from "../../js/util.mjs";

const SAVABLE_TYPES = {
  MAP: 'bsp'
}

let mapFiles_ = [];

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

export function getMapFilesAsArrayBuffer() {
  const decompressed = []
  for (const file of mapFiles_) {
    const decompressedFile = {};
    decompressedFile['data'] = LZString.decompressFromBase64(file['data']);
    decompressed[decompressed.length] = decompressedFile;
  }
  return decompressed;
}

export function getExtraContent() {
  return {
    'addedMaps': mapFiles_
  }
}