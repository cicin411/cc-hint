// src/api/antdv/a-input/a-input.json
var addonAfter = {
  description: "The label text displayed after (on the right side of) the input field.",
  optionType: "string|slot",
  defaultValue: ""
};
var addonBefore = {
  description: "The label text displayed before (on the left side of) the input field.",
  optionType: "string|slot",
  defaultValue: ""
};
var defaultValue = {
  description: "The initial input content",
  optionType: "string",
  defaultValue: ""
};
var disabled = {
  description: "Whether the input is disabled.",
  optionType: "boolean",
  defaultValue: "false"
};
var id = {
  description: "The ID for input",
  optionType: "string",
  defaultValue: ""
};
var prefix = {
  description: "The prefix icon for the Input.",
  optionType: "string|slot",
  defaultValue: ""
};
var size = {
  description: "The size of the input box. Note: in the context of a form, the large size is used. Available: large default small",
  optionType: "string",
  defaultValue: "default"
};
var suffix = {
  description: "The suffix icon for the Input.",
  optionType: "string|slot",
  defaultValue: ""
};
var type = {
  description: 'The type of input, see: MDN(use Input.TextArea instead of type="textarea")',
  optionType: "string",
  defaultValue: "text"
};
var value = {
  description: "The input content value",
  optionType: "string",
  defaultValue: ""
};
var a_input_default = {
  addonAfter,
  addonBefore,
  defaultValue,
  disabled,
  id,
  prefix,
  size,
  suffix,
  type,
  value
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  addonAfter,
  addonBefore,
  defaultValue,
  disabled,
  id,
  prefix,
  size,
  suffix,
  type,
  value
});
