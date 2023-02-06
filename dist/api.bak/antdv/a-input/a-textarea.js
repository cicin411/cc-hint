// src/api/antdv/a-input/a-textarea.json
var autosize = {
  description: "Height autosize feature, can be set to true|false or an object { minRows: 2, maxRows: 6 }",
  optionType: "boolean|object",
  defaultValue: "false"
};
var defaultValue = {
  description: "The initial input content",
  optionType: "string",
  defaultValue: ""
};
var value = {
  description: "The input content value",
  optionType: "string",
  defaultValue: ""
};
var a_textarea_default = {
  autosize,
  defaultValue,
  value
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  autosize,
  defaultValue,
  value
});
