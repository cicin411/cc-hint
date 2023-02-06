// src/api/antdv/a-input-number/a-number.json
var autoFocus = {
  description: "get focus when component mounted",
  optionType: "boolean",
  defaultValue: "false"
};
var defaultValue = {
  description: "initial value",
  optionType: "number",
  defaultValue: ""
};
var disabled = {
  description: "disable the input",
  optionType: "boolean",
  defaultValue: "false"
};
var formatter = {
  description: "Specifies the format of the value presented",
  optionType: "function(value: number | string): string",
  defaultValue: "-"
};
var max = {
  description: "max value",
  optionType: "number",
  defaultValue: "Infinity"
};
var min = {
  description: "min value",
  optionType: "number",
  defaultValue: "-Infinity"
};
var parser = {
  description: "Specifies the value extracted from formatter",
  optionType: "function( string): number",
  defaultValue: "-"
};
var precision = {
  description: "precision of input value",
  optionType: "number",
  defaultValue: "-"
};
var decimalSeparator = {
  description: "decimal separator",
  optionType: "string",
  defaultValue: "-"
};
var size = {
  description: "width of input box",
  optionType: "string",
  defaultValue: "-"
};
var step = {
  description: "The number to which the current value is increased or decreased. It can be an integer or decimal.",
  optionType: "number|string",
  defaultValue: "1"
};
var value = {
  description: "current value",
  optionType: "number",
  defaultValue: ""
};
var a_number_default = {
  autoFocus,
  defaultValue,
  disabled,
  formatter,
  max,
  min,
  parser,
  precision,
  decimalSeparator,
  size,
  step,
  value
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  autoFocus,
  decimalSeparator,
  defaultValue,
  disabled,
  formatter,
  max,
  min,
  parser,
  precision,
  size,
  step,
  value
});
