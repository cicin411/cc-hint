// src/api/antdv/a-button/a-button.json
var disabled = {
  description: "disabled state of button",
  optionType: "boolean",
  defaultValue: "false"
};
var ghost = {
  description: "make background transparent and invert text and border colors, added in 2.7",
  optionType: "boolean",
  defaultValue: "false"
};
var htmlType = {
  description: "set the original html type of button, see: MDN",
  optionType: "string",
  defaultValue: "button"
};
var icon = {
  description: "set the icon of button, see: Icon component",
  optionType: "string",
  defaultValue: "-"
};
var loading = {
  description: "set the loading status of button",
  optionType: "boolean | { delay: number }",
  defaultValue: "false"
};
var shape = {
  options: ["circle", "round"],
  description: "can be set to circle or omitted",
  optionType: "string",
  defaultValue: "-"
};
var size = {
  options: ["small", "large"],
  description: "can be set to small large or omitted",
  optionType: "string",
  defaultValue: "default"
};
var type = {
  options: ["primary", "ghost", "dashed", "danger"],
  description: "can be set to primary ghost dashed danger(added in 2.7) or omitted (meaning default)",
  optionType: "string",
  defaultValue: "default"
};
var block = {
  description: "option to fit button width to its parent width",
  optionType: "boolean",
  defaultValue: "false"
};
var a_button_default = {
  disabled,
  ghost,
  htmlType,
  icon,
  loading,
  shape,
  size,
  type,
  block
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  block,
  disabled,
  ghost,
  htmlType,
  icon,
  loading,
  shape,
  size,
  type
});
