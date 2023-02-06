// src/api/antdv/a-select/a-select-option.json
var disabled = {
  description: "Disable this option",
  optionType: "boolean",
  defaultValue: "false"
};
var key = {
  description: "Same usage as value. If Vue request you to set this property, you can set it to value of option, and then omit value property.",
  optionType: "string",
  defaultValue: ""
};
var title = {
  description: "title of Select after select this Option",
  optionType: "string",
  defaultValue: "-"
};
var value = {
  description: "default to filter with this property",
  optionType: "string|number",
  defaultValue: "-"
};
var class2 = {
  description: "additional class to option",
  optionType: "string",
  defaultValue: "-"
};
var a_select_option_default = {
  disabled,
  key,
  title,
  value,
  class: class2
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  class: null,
  disabled,
  key,
  title,
  value
});
