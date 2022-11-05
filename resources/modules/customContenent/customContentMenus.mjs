import { loadMapFile, getExtraContent, deleteMap } from "./customContentStorage.mjs";

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

export async function manageCustomContent() {
  const displayPopup = document.getElementById('customRessources');
  displayPopup.innerHTML = "";
  document.getElementById('manageCustom').hidden = false;

  const customContent = getExtraContent();
  if (customContent['addedMaps'].length === 0) {
    const noContentMsg = document.createElement('h2');
    noContentMsg.innerHTML = 'No custom content added!';
    noContentMsg.style.color = '#fff'
    displayPopup.appendChild(noContentMsg);
  } else {
    const maps = document.createElement('div');
    const mapsTitle = document.createElement('h3');
    mapsTitle.innerHTML = 'Maps: (click to delete)';
    mapsTitle.style.color = '#fff'
    maps.appendChild(mapsTitle);
    for (const map of customContent['addedMaps']) {
      const mapOption = document.createElement('div');
      const mapName = document.createElement('a');
      
      mapName.innerText = map['fileName'];
      mapName.onclick = () => {
        deleteMap(map['fileName']);
        manageCustomContent();
      };
      
      mapOption.classList.add('contentListItem')
      mapOption.appendChild(mapName);
      maps.appendChild(mapOption);
    }
    displayPopup.appendChild(maps);
  }
  

}

