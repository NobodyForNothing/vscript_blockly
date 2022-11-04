import { vscriptGenerator } from "./generator.mjs";

// util
vscriptGenerator['util_destroy'] = function (block) {
  const entity = block.getFieldValue('ENT');
  return `${entity}.Destroy();`;
}