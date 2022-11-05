import { loadMapFile } from "./customContentStorage.mjs";

export async function importMapFile() {
  const files = await Neutralino.os.showOpenDialog('Load compiled map file (level)', {
    defaultPath: `${NL_CWD}`,
    filters: [
      { name: 'Map files', extensions: ['bsp'] },
      { name: 'All files', extensions: ['*'] }
    ]
  });
  for (const mapFile of files) {
    loadMapFile(mapFile);
  }
}

