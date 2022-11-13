import { _createFolderIfPossible } from "./util.mjs";

const sppliceDownloads = {
  'Linux': 'https://p2r3.com/spplice/app/latest/spplice_setup.exe',
  'Windows': 'https://p2r3.com/spplice/app/latest/spplice_linux.tar.gz',
  'Darwin': 'https://p2r3.com/spplice/app/latest/spplice_macos.tar.gz'// todo
}

export async function donwloadSpplice() {
  await _createFolderIfPossible(`${NL_PATH}/.lib`);
  const request = new XMLHttpRequest()
  request.addEventListener('load', () => {
    console.log(request.response);
  });
  request.open('GET', sppliceDownloads[NL_OS]);
  request.send();
}

async function installSpplice() {

}
