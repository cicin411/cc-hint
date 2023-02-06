// src/api/antdv/a-rate/a-rate.json
var allowClear = {
  description: "whether to allow clear when click again",
  optionType: "boolean",
  defaultValue: "true"
};
var allowHalf = {
  description: "whether to allow semi selection",
  optionType: "boolean",
  defaultValue: "false"
};
var autoFocus = {
  description: "get focus when component mounted",
  optionType: "boolean",
  defaultValue: "false"
};
var character = {
  description: "custom character of rate",
  optionType: 'String or slot="character"',
  defaultValue: '<Icon type="star" />'
};
var count = {
  description: "star count",
  optionType: "number",
  defaultValue: "5"
};
var defaultValue = {
  description: "default value",
  optionType: "number",
  defaultValue: "0"
};
var disabled = {
  description: "read only, unable to interact",
  optionType: "boolean",
  defaultValue: "false"
};
var value = {
  description: "current value",
  optionType: "number",
  defaultValue: "-"
};
var a_rate_default = {
  allowClear,
  allowHalf,
  autoFocus,
  character,
  count,
  defaultValue,
  disabled,
  value
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  allowClear,
  allowHalf,
  autoFocus,
  character,
  count,
  defaultValue,
  disabled,
  value
});
