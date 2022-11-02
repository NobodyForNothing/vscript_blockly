"use strict"

import { version__ } from "./constants.mjs";

const actions = {};

actions['-v'] = actions['-version'] = actions['--v'] = actions['--version'] = async function () {
  console.log(`Version: ${version__}`);
}
actions['--exit'] = async function () {
  await Neutralino.app.exit();
}

for (const x of NL_ARGS) {
  try {
    actions[x]();
  } catch (e) {
  }
}

window.actions = actions;


