// src/api/antdv/a-radio/a-radio.json
var autoFocus = {
  description: "get focus when component mounted",
  optionType: "boolean",
  defaultValue: "false"
};
var checked = {
  description: "Specifies whether the radio is selected.",
  optionType: "boolean",
  defaultValue: "-"
};
var defaultChecked = {
  description: "Specifies the initial state: whether or not the radio is selected.",
  optionType: "boolean",
  defaultValue: ""
};
var disabled = {
  description: "Disable radio",
  optionType: "boolean",
  defaultValue: "false"
};
var value = {
  description: "According to value for comparison, to determine whether the selected",
  optionType: "any",
  defaultValue: "-"
};
var a_radio_default = {
  autoFocus,
  checked,
  defaultChecked,
  disabled,
  value
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  autoFocus,
  checked,
  defaultChecked,
  disabled,
  value
});
