// src/api/antdv/a-slider/a-slider.json
var autoFocus = {
  description: "get focus when component mounted",
  optionType: "boolean",
  defaultValue: "false"
};
var defaultValue = {
  description: "The default value of slider. When range is false, use number, otherwise, use [number, number]",
  optionType: "number|number[]",
  defaultValue: "0 or [0, 0]"
};
var disabled = {
  description: "If true, the slider will not be interactable.",
  optionType: "boolean",
  defaultValue: "false"
};
var dots = {
  description: "Whether the thumb can drag over tick only.",
  optionType: "boolean",
  defaultValue: "false"
};
var included = {
  description: "Make effect when marks not null\uFF0Ctrue means containment and false means coordinative",
  optionType: "boolean",
  defaultValue: "true"
};
var marks = {
  description: "Tick mark of Slider, type of key must be number, and must in closed interval [min, max] \uFF0Ceach mark can declare its own style.",
  optionType: "object",
  defaultValue: "{ number: string|VNode } or { number: { style: object, label: string|VNode } } or { number: () => VNode }"
};
var max = {
  description: "The maximum value the slider can slide to",
  optionType: "number",
  defaultValue: "100"
};
var min = {
  description: "The minimum value the slider can slide to.",
  optionType: "number",
  defaultValue: "0"
};
var range = {
  description: "dual thumb mode",
  optionType: "boolean",
  defaultValue: "false"
};
var step = {
  description: "The granularity the slider can step through values. Must greater than 0, and be divided by (max - min) . When marks no null, step can be null.",
  optionType: "number|null",
  defaultValue: "1"
};
var tipFormatter = {
  description: "Slider will pass its value to tipFormatter, and display its value in Tooltip, and hide Tooltip when return value is null.",
  optionType: "Function|null",
  defaultValue: "IDENTITY"
};
var value = {
  description: "The value of slider. When range is false, use number, otherwise, use [number, number]",
  optionType: "number|number[]",
  defaultValue: ""
};
var vertical = {
  description: "If true, the slider will be vertical.",
  optionType: "Boolean",
  defaultValue: "false"
};
var tooltipVisible = {
  description: "If true, Tooltip will show always, or it will not show anyway, even if dragging or hovering.",
  optionType: "Boolean",
  defaultValue: ""
};
var a_slider_default = {
  autoFocus,
  defaultValue,
  disabled,
  dots,
  included,
  marks,
  max,
  min,
  range,
  step,
  tipFormatter,
  value,
  vertical,
  tooltipVisible
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  autoFocus,
  defaultValue,
  disabled,
  dots,
  included,
  marks,
  max,
  min,
  range,
  step,
  tipFormatter,
  tooltipVisible,
  value,
  vertical
});
