Neutralino.init();

"use strict"

export var pkg = {
  title: null,
  name: null,
  dir: null,
  img: null,
  imgext: null,
  desc: null,
  valid: false
};

function setWarning(elementId, text) {
  console.warn('SPPLICER WARN: ' + text);
}

var titleLengthWarningTimeout;
export function updateTitle() {

  const domTitle = document.getElementById("pkg-title");
  const domName = document.getElementById("pkg-name");

  domTitle.value = domTitle.value.replace(/[\\\n"]/g, "");

  if(domTitle.value.length > 25) {
    domTitle.value = domTitle.value.slice(0, -1);
  }

  if(domTitle.value.length > 4) {

    domTitle.style.color = "#faa81a";
    domTitle.style.borderColor = "#faa81a";
    pkg.title = domTitle.value;

  } else {

    domTitle.style.color = "#fff";
    domTitle.style.borderColor = "#fff";
    pkg.title = null;

    setWarning(domTitle, null);
    if (domTitle.value.length !== 0) {
      titleLengthWarningTimeout = setTimeout(function () {
        document.getElementById(`pkg-title-warn`).innerText = "The title must consist of 5 to 25 characters.";
      }, 1000);
    } else {
      document.getElementById(`pkg-title-warn`).innerText = null;
    }

  }

  domName.placeholder = domTitle.value.toLowerCase().replace(/[^A-Za-z0-9]/g, "-");
  while(domName.placeholder.indexOf("--") > -1) domName.placeholder = domName.placeholder.replace("--", "-");

  checkValidity();
}

export function checkValidity() {
  if(pkg.title && pkg.name && pkg.dir && pkg.img && pkg.imgext && pkg.desc) {
    pkg.valid = true;
  } else {
    pkg.valid = false;
  }
}

export async function createPackage() {
  if(!pkg.valid) return;

  try {

    // Create temporary directories
    try { await Neutralino.filesystem.getStats(`${NL_PATH}/.tmp`) }
    catch (e) { await Neutralino.filesystem.createDirectory(`${NL_PATH}/.tmp`) }
    try { await Neutralino.filesystem.getStats(`${NL_PATH}/.tmp/${pkg.name}`) }
    catch (e) { await Neutralino.filesystem.createDirectory(`${NL_PATH}/.tmp/${pkg.name}`) }

    // Remove soundcache
    try { await Neutralino.filesystem.removeFile(`${pkg.dir}/maps/soundcache/_master.cache`) } catch(e) {}

    // Copy image, package resources directory
    await Neutralino.filesystem.copyFile(pkg.img, `${NL_PATH}/.tmp/${pkg.name}/${pkg.name}.${pkg.imgext}`);
    await Neutralino.os.execCommand(`tar -czf "${NL_PATH}/.tmp/${pkg.name}/${pkg.name}.sppkg" -C "${pkg.dir}" .`);

    // Write package manifest
    await Neutralino.filesystem.writeFile(`${NL_PATH}/.tmp/${pkg.name}/manifest.json`,
`{
  "title": "${pkg.title}",
  "name": "${pkg.name}",
  "file": "${pkg.name}.sppkg",
  "icon": "${pkg.name}.${pkg.imgext}",
  "description": "${pkg.desc}"
}`);

    // Create output archive
    await Neutralino.os.execCommand(`tar -czf "${NL_PATH}/${pkg.name}_spplice.tar.gz" -C "${NL_PATH}/.tmp" ${pkg.name}`);

    // Clean up
    await Neutralino.filesystem.removeFile(`${NL_PATH}/.tmp/${pkg.name}/${pkg.name}.${pkg.imgext}`);
    await Neutralino.filesystem.removeFile(`${NL_PATH}/.tmp/${pkg.name}/${pkg.name}.sppkg`);
    await Neutralino.filesystem.removeFile(`${NL_PATH}/.tmp/${pkg.name}/manifest.json`);
    try { await Neutralino.filesystem.removeDirectory(`${NL_PATH}/.tmp/${pkg.name}`) } catch(e) {}
    try { await Neutralino.filesystem.removeDirectory(`${NL_PATH}/.tmp`) } catch(e) {}

    Neutralino.os.showMessageBox(
      "Package created",
      `The package has been created successfully and saved to "${NL_PATH}/${pkg.name}_spplice.tar.gz"
\nTo install it locally, find the Spplice install directory and put this file in the "custom" folder.`,
      "OK",
      "INFO"
    );

  } catch (e) {
    Neutralino.os.showMessageBox(
      "Packaging error",
      "An error occurred while creating the package: " + JSON.stringify(e),
      "OK",
      "ERROR"
    );
  }
}
