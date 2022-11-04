import { vscriptGenerator } from "./generator.mjs";

// util
vscriptGenerator['ent_destroy'] = function (block) {
  const entity = block.getFieldValue('ENT');
  return `${entity}.Destroy();`;
}