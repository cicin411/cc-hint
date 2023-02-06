// src/api/antdv/a-checkbox/a-checkbox-group.json
var defaultValue = {
  description: "Default selected value",
  optionType: "string[]",
  defaultValue: "[]"
};
var disabled = {
  description: "Disable all checkboxes",
  optionType: "boolean",
  defaultValue: "false"
};
var options = {
  description: 'Specifies options, you can customize label with slot = "label" slot-scope = "option"',
  optionType: "string[] | Array<{ label: string value: string disabled?: boolean, onChange?: function }>",
  defaultValue: "[]"
};
var value = {
  description: "Used for setting the currently selected value.",
  optionType: "string[]",
  defaultValue: "[]"
};
var a_checkbox_group_default = {
  defaultValue,
  disabled,
  options,
  value
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  defaultValue,
  disabled,
  options,
  value
});
