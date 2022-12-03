import { loadMapFile, loadVpkFile, getExtraContent, deleteMap, deleteVpk } from "./customContentStorage.mjs";

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

export async function importVpkFile() {
  const files = await Neutralino.os.showOpenDialog('Load vpk file', {
    defaultPath: `${NL_CWD}`,
    filters: [
      { name: 'Pack files', extensions: ['vpk'] },
      { name: 'All files', extensions: ['*'] }
    ]
  });
  for (const packFile of files) {
    loadVpkFile(packFile);
  }
}

export async function manageCustomContent() {
  const displayPopup = document.getElementById('customRessources');
  displayPopup.innerHTML = "";
  document.getElementById('manageCustom').hidden = false;

  const customContent = getExtraContent();
  if (customContent['addedMaps'].length === 0 && customContent['addedVpks'].length === 0) {
    const noContentMsg = document.createElement('h2');
    noContentMsg.innerHTML = 'No custom content added!';
    noContentMsg.style.color = 'var(--text-color)'
    displayPopup.appendChild(noContentMsg);
  } else {
    const maps = createMenuSection('Maps: (click to delete)', customContent['addedMaps'], (e) => deleteMap(e['fileName']));
    const vpks = createMenuSection('Vpks: (click to delete)', customContent['addedVpks'], (e) => deleteVpk(e['fileName']));


    displayPopup.appendChild(maps);
    displayPopup.appendChild(vpks);
  }
}

function createMenuSection(sectionTitle, elementList, elementClickFunction) {
  const domSection = document.createElement('div');
  if (elementList === undefined || elementList.length===0) return domSection;
  const domTitle = document.createElement('h3');
  domTitle.innerHTML = sectionTitle;
  domTitle.style.color = 'var(--text-color)'
  domSection.appendChild(domTitle);
  for (const map of elementList) {
    const elementConainter = document.createElement('div');
    const element = document.createElement('a');

    element.innerText = map['fileName'];
    element.onclick = () => {
      elementClickFunction(map);
      manageCustomContent();
    };

    elementConainter.classList.add('contentListItem')
    elementConainter.appendChild(element);
    domSection.appendChild(elementConainter);
  }
  return domSection
}

