
export class ColorWheelField extends Blockly.Field {
  constructor(opt_value, opt_validator) {
    const value = {};
    value.r = 255;
    value.g = 255;
    value.b = 255;
    
    super(value, opt_validator);

    this.SERIALIZABLE = true;
  }

  fromJson = function(options) {
    return new ColorWheelField();
  };

  initView() {
    super.initView();
    this.createView_();
  }
  updateEditable = super.updateEditable;

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

  doValueUpdate_(newValue) {
    super.doValueUpdate_(newValue);
    this.displayValue_ = newValue;
  }

  render_() {
    const value = this.displayValue_;

    if (this.editor_) {
      this.renderEditor_();
    }

    this.textContent_.nodeValue = valueToHex(value);

    this.updateSize_();
  }

  static valueToHex(value) {
    let r = value.r.toString(16);
    let g = value.g.toString(16);
    let b = value.b.toString(16);
    if (r.length < 2) r = '0' + r;
    if (g.length < 2) g = '0' + g;
    if (b.length < 2) b = '0' + b;
    return `#${r}${g}${b}`;
  }
}

Blockly.fieldRegistry.register('field_color_wheel', ColorWheelField);
