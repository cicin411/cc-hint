// src/api/antdv/a-radio/a-radio-group.json
var defaultValue = {
  description: "Default selected value",
  optionType: "any",
  defaultValue: "-"
};
var disabled = {
  description: "Disable all radio buttons",
  optionType: "boolean",
  defaultValue: "false"
};
var name = {
  description: 'The name property of all input[type="radio"] children',
  optionType: "string",
  defaultValue: "-"
};
var options = {
  description: "set children optional",
  optionType: "string[] | Array<{ label: string value: string disabled?: boolean }>",
  defaultValue: "-"
};
var size = {
  description: "size for radio button style",
  optionType: "large | default | small",
  defaultValue: "default"
};
var value = {
  description: "Used for setting the currently selected value.",
  optionType: "any",
  defaultValue: "-"
};
var buttonStyle = {
  description: "style type of radio button",
  optionType: "outline | solid",
  defaultValue: "outline"
};
var a_radio_group_default = {
  defaultValue,
  disabled,
  name,
  options,
  size,
  value,
  buttonStyle
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  buttonStyle,
  defaultValue,
  disabled,
  name,
  options,
  size,
  value
});
