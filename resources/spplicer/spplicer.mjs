Neutralino.init();

"use strict"

export let pkg = {
  title: null,
  name: null,
  dir: null,
  img: `${NL_PATH}/resources/icon.png`,
  imgext: 'png',
  desc: null,
  valid: false
};

function sanitizeHTML(string) {
  return string.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br>");
}

export async function selectImage() {
  const filter = {
    filters: [{
      name: "Images",
      extensions: ["jpg", "jpeg", "png"]
    }]
  };
  const img = (await Neutralino.os.showOpenDialog("Select package thumbnail image", filter))[0];
  if(!img) return;
  const size = (await Neutralino.filesystem.getStats(img)).size;

  if(size > 51200) { // todo: add atempt to compress
    Neutralino.os.showMessageBox(
      "Invalid file size",
      "File must be under 50 KB!",
      "OK",
      "ERROR"
    );
    return;
  }

  let fileName = img.split("/");
  fileName = fileName[fileName.length - 1].split("\\");
  fileName = fileName[fileName.length - 1];
  let fileExt = fileName.split(".");
  fileExt = fileExt[fileExt.length - 1];

  let matches = false;
  for(let i = 0; i < filter.filters[0].extensions.length; i++) {
    if(fileExt == filter.filters[0].extensions[i]) {
      matches = true;
      break;
    }
  }
  if(!matches) {
    Neutralino.os.showMessageBox(
      "Invalid file type",
      "File must be a JPEG or PNG image!",
      "OK",
      "ERROR"
    );
    return;
  }

  pkg.img = img;
  pkg.imgext = fileExt;
  
  return img;
}

export function updateTitle() {

  const domTitle = document.getElementById("pkg-title");

  domTitle.value = domTitle.value.replace(/[\\\n"]/g, "");

  if(domTitle.value.length > 25) {
    domTitle.value = domTitle.value.slice(0, -1);
  }

  if(domTitle.value.length > 4) {
    domTitle.style.color = "#000";
    domTitle.style.borderColor = "#0f0";
    pkg.title = domTitle.value;

  } else {
    domTitle.style.color = "#f00";
    domTitle.style.borderColor = "#f00";
    pkg.title = 'vscript blockly mod';
    
  }

  pkg.name = pkg.title.toLowerCase().replace(/[^A-Za-z0-9]/g, "-");

}

export function updateDesc() {
  const domDesc = document.getElementById("pkg-desc");

  if(domDesc.value.length >= 10) {

    domDesc.style.color = "#000";
    domDesc.style.borderColor = "#00ff00";
    pkg.desc = sanitizeHTML(domDesc.value);

  } else {
    domDesc.style.color = "#ff0000";
    domDesc.style.borderColor = "#ff0000";
    pkg.desc = 'A mod made using vscript blockly.';
    return;
    
  }
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
