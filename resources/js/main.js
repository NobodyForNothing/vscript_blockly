Neutralino.init();

async function pack() {
    // get inputs
    if(!updateName()) return;

    // regenerate code
    VSCRIPT_BLOCKLY.updateCode();

    // create dlc structure
    try {await Neutralino.filesystem.getStats(`${NL_PATH}/.tmp`) }
    catch (e) { await Neutralino.filesystem.createDirectory(`${NL_PATH}/.tmp`) }
    try {await Neutralino.filesystem.removeDirectory(`${NL_PATH}/.tmp/portal2_dlc5`)}
    catch(e) {}
    try {
        await Neutralino.filesystem.createDirectory(`${NL_PATH}/.tmp/portal2_dlc5`);
        await Neutralino.filesystem.createDirectory(`${NL_PATH}/.tmp/portal2_dlc5/scripts`);
        await Neutralino.filesystem.createDirectory(`${NL_PATH}/.tmp/portal2_dlc5/scripts/vscripts`);
        await Neutralino.filesystem.createDirectory(`${NL_PATH}/.tmp/portal2_dlc5/scripts/vscripts/custom`);
    } catch (e) { 
        console.log(e);
     }
    // copy libaray files
    try {
        await Neutralino.filesystem.copyFile(`${NL_PATH}/resources/vscripts/ppmod.nut`,`${NL_PATH}/.tmp/portal2_dlc5/scripts/vscripts/custom/ppmod.nut`);
        await Neutralino.filesystem.copyFile(`${NL_PATH}/resources/vscripts/ddutil.nut`,`${NL_PATH}/.tmp/portal2_dlc5/scripts/vscripts/custom/ddutil.nut`);
    } catch (e) {console.error(e)};

    // write mapspawn file
    try { Neutralino.filesystem.writeFile(`${NL_PATH}/.tmp/portal2_dlc5/scripts/vscripts/mapspawn.nut`, VSCRIPT_BLOCKLY.mapSpawnCode) }
    catch (e) {console.log(e); document.getElementById('packingErrorBox').innerText = 'ERROR: check console'; return}

    // sanitize info for spplicer
    
    // pkg.name = modName.toLowerCase().replace(/ /g, "-").replace(/[^A-Za-z0-9-]/g, "");
    pkg.title = pkg.name;
    pkg.dir = `${NL_PATH}/.tmp/portal2_dlc5`;
    pkg.img =`${NL_PATH}/resources/icon.png`;
    pkg.imgext = 'png';
    pkg.desc = VSCRIPT_BLOCKLY.modInfo.description;
    
    checkValidity();
    await createPackage();
    
    
    console.log('done');
    console.log(pkg);
}

Neutralino.events.on("windowClose", function () {
    Neutralino.app.exit();
  });


