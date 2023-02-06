// src/api/antdv/a-checkbox/a-checkbox.json
var autoFocus = {
  description: "get focus when component mounted",
  optionType: "boolean",
  defaultValue: "false"
};
var checked = {
  description: "Specifies whether the checkbox is selected.",
  optionType: "boolean",
  defaultValue: "false"
};
var defaultChecked = {
  description: "Specifies the initial state: whether or not the checkbox is selected.",
  optionType: "boolean",
  defaultValue: "false"
};
var disabled = {
  description: "Disable checkbox",
  optionType: "boolean",
  defaultValue: "false"
};
var indeterminate = {
  description: "indeterminate checked state of checkbox",
  optionType: "boolean",
  defaultValue: "false"
};
var a_checkbox_default = {
  autoFocus,
  checked,
  defaultChecked,
  disabled,
  indeterminate
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  autoFocus,
  checked,
  defaultChecked,
  disabled,
  indeterminate
});
