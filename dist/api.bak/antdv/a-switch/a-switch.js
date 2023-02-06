// src/api/antdv/a-switch/a-switch.json
var autoFocus = {
  description: "get focus when component mounted",
  optionType: "boolean",
  defaultValue: "false"
};
var checked = {
  description: "determine whether the Switch is checked",
  optionType: "boolean",
  defaultValue: "false"
};
var checkedChildren = {
  description: "content to be shown when the state is checked",
  optionType: "string|slot",
  defaultValue: ""
};
var defaultChecked = {
  description: "to set the initial state",
  optionType: "boolean",
  defaultValue: "false"
};
var disabled = {
  description: "Disable switch",
  optionType: "boolean",
  defaultValue: "false"
};
var loading = {
  description: "loading state of switch",
  optionType: "boolean",
  defaultValue: "false"
};
var size = {
  description: "the size of the Switch, options: default small",
  optionType: "string",
  defaultValue: "default"
};
var unCheckedChildren = {
  description: "content to be shown when the state is unchecked",
  optionType: "string|slot",
  defaultValue: ""
};
var a_switch_default = {
  autoFocus,
  checked,
  checkedChildren,
  defaultChecked,
  disabled,
  loading,
  size,
  unCheckedChildren
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  autoFocus,
  checked,
  checkedChildren,
  defaultChecked,
  disabled,
  loading,
  size,
  unCheckedChildren
});
