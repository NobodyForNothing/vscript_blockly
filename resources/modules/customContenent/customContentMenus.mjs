import { loadMapFile } from "./customContentStorage.mjs";

export async function importMapFile() {
    const files = await Neutralino.os.showOpenDialog('Save your diagram', {
        defaultPath: `${NL_CWD}`,
        filters: [
          {name: 'Images', extensions: ['bsp']},
          {name: 'All files', extensions: ['*']}
        ]
      });
      for (const mapFile of files) {
        console.log(`tst: ${mapFile}`)
        loadMapFile(mapFile);
      }
}

