import { colors } from "./customBlockDefaults.mjs";

Blockly.Blocks['debug_draw_box'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("draw box");
    this.appendValueInput("ORIGIN")
      .setCheck(null)
      .appendField("origin");
    this.appendValueInput("SIZE")
      .setCheck(null)
      .appendField("size");
    this.appendValueInput("COLOR")
      .setCheck(null)
      .appendField("color");
    this.appendValueInput("OPACITY")
      .appendField("opacity"); // todo: make field slider
    this.appendValueInput("DURATION")
      .appendField("duration");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(colors.rendering);
    this.setTooltip("Draws an overlay box in the world. Opacity ranges from 0-255 (DebugDrawBox)");
    this.setHelpUrl("https://developer.valvesoftware.com/wiki/List_of_Portal_2_Script_Functions#Other");
  }
}