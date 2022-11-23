import { ReinventedColorWheel } from "../../colorWheel/colorWheel.js";

export class ColorWheelField extends Blockly.Field {
  constructor(opt_value, opt_validator) {
    const value = opt_value ? opt_value : {
      r: 255,
      g: 255,
      b: 255
    };

    super(value, opt_validator);
    this.value = value;

    this.SERIALIZABLE = true;
  }

  static fromJson(options) {
    return new ColorWheelField();
  };

  // Gets the text to display when the block is collapsed
  getText() {
    return valueToHex(this.value_);
  }

  doClassValidation_(newValue) {
    if (newValue.r > 255 || newValue.r < 0) {
      newValue.r = null;
    }
    if (newValue.g > 255 || newValue.g < 0) {
      newValue.g = null;
    }
    if (newValue.b > 255 || newValue.b < 0) {
      newValue.b = null;
    }

    if (!newValue.pattern || !newValue.hat || !newValue.turtleName) {
      return null;
    }
    return newValue;
  }

  render_() {
    const value = this.value;

    this.textContent_.nodeValue = valueToHex(value);

    this.updateSize_();
  }

  disposeWidget_() {
    console.log(this)
    this.render_();
  }

  showEditor_() {
    const editor = document.createElement('div');
    // Create the widget HTML
    this.editor_ = editor;
    Blockly.DropDownDiv.getContentDiv().appendChild(this.editor_);

    // Set the dropdown's background colour.
    // This can be used to make it match the colour of the field.
    Blockly.DropDownDiv.setColour('gray', 'silver');

    // Show it next to the field. Always pass a dispose function.
    Blockly.DropDownDiv.showPositionedByField(
      this, this.disposeWidget_.bind(this));


    editor.classList.add('color-picker-field');
    
    const colorwheel = this;

    // show color wheel
    const wheel = new ReinventedColorWheel({
      appendTo: editor,
    
      // initial color
      rgb: [this.value.r, this.value.b, this.value.g],
    
      // handler
      onChange: function (color) {
        console.log(color.rgb);
        console.log(colorwheel);
        colorwheel.value = {
          r: color.rgb[0],
          g: color.rgb[1],
          b: color.rgb[2]
        };
      },
    });
    console.log(editor);
    
  }
}

function valueToHex(value) {
  if (!value) {
    console.log(value);
    return '#000000'
  }
  let r = value.r.toString(16);
  let g = value.g.toString(16);
  let b = value.b.toString(16);
  if (r.length < 2) r = '0' + r;
  if (g.length < 2) g = '0' + g;
  if (b.length < 2) b = '0' + b;
  return `#${r}${g}${b}`;
}

Blockly.fieldRegistry.register('field_color_wheel', ColorWheelField);
