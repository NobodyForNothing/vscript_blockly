import { vscriptGenerator } from "./generator.mjs";

// get information from ent
vscriptGenerator['ent_get_pos'] = function (block) {
  const entity = vscriptGenerator.statementToCode(block, 'ENT');
  return `${entity}.GetOrigin()`;
}
vscriptGenerator['ent_get_angles'] = function (block) {
  const entity = vscriptGenerator.statementToCode(block, 'ENT');
  return `${entity}.GetAngles()`;
}
vscriptGenerator['ent_get_velocity'] = function (block) {
  const entity = vscriptGenerator.statementToCode(block, 'ENT');
  return `${entity}.GetVelocity()`;
}
vscriptGenerator['ent_get_center'] = function (block) {
  const entity = vscriptGenerator.statementToCode(block, 'ENT');
  return `${entity}.GetCenter()`;
}
vscriptGenerator['ent_get_classname'] = function (block) {
  const entity = vscriptGenerator.statementToCode(block, 'ENT');
  return `${entity}.GetClassname()`;
}
vscriptGenerator['ent_get_modelname'] = function (block) {
  const entity = vscriptGenerator.statementToCode(block, 'ENT');
  return `${entity}.GetModelName()`;
}
vscriptGenerator['ent_get_health'] = function (block) {
  const entity = vscriptGenerator.statementToCode(block, 'ENT');
  return `${entity}.GetHealth()`;
}
vscriptGenerator['ent_get_maxhealth'] = function (block) {
  const entity = vscriptGenerator.statementToCode(block, 'ENT');
  return `${entity}.GetMaxHealth()`;
}
vscriptGenerator['ent_exists'] = function (block) {
  const entity = vscriptGenerator.statementToCode(block, 'ENT');
  return `${entity}.IsValid()`;
}


// do something with ent
vscriptGenerator['ent_destroy'] = function (block) {
  const entity = vscriptGenerator.statementToCode(block, 'ENT');
  return `${entity}.Destroy();`;
}
vscriptGenerator['ent_set_origin'] = function (block) {
  const entity = vscriptGenerator.statementToCode(block, 'ENT');
  const vector = vscriptGenerator.statementToCode(block, 'POS');
  return `${entity}.SetOrigin(${vector});`;
}
vscriptGenerator['ent_set_angles'] = function (block) {
  const entity = vscriptGenerator.statementToCode(block, 'ENT');
  const pitch = vscriptGenerator.statementToCode(block, 'PITCH');
  const yaw = vscriptGenerator.statementToCode(block, 'YAW');
  const roll = vscriptGenerator.statementToCode(block, 'ROLL');
  return `${entity}.SetAngles(${pitch}, ${yaw}, ${roll});`;
}
vscriptGenerator['ent_set_velocity'] = function (block) {
  const entity = vscriptGenerator.statementToCode(block, 'ENT');
  const vector = vscriptGenerator.statementToCode(block, 'VEL');
  return `${entity}.SetVelocity(${vector});`;
}