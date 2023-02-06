// src/api/antdv/a-dropdown/a-dropdown-button.json
var disabled = {
  description: "whether the dropdown menu is disabled",
  optionType: "boolean",
  defaultValue: "-"
};
var overlay = {
  description: "the dropdown menu",
  optionType: "Menu",
  defaultValue: "-"
};
var placement = {
  options: ["bottomLeft", "bottomCenter", "bottomRight", "topLeft", "topCenter", "topRight"],
  description: "placement of pop menu: bottomLeft bottomCenter bottomRight topLeft topCenter topRight",
  optionType: "String",
  defaultValue: "bottomLeft"
};
var size = {
  description: "size of the button, the same as Button",
  optionType: "string",
  defaultValue: "default"
};
var trigger = {
  description: "the trigger mode which executes the drop-down action",
  optionType: "Array<click|hover|contextmenu>",
  defaultValue: "['hover']"
};
var type = {
  description: "type of the button, the same as Button",
  optionType: "string",
  defaultValue: "default"
};
var visible = {
  description: "whether the dropdown menu is visible",
  optionType: "boolean",
  defaultValue: "-"
};
var a_dropdown_button_default = {
  disabled,
  overlay,
  placement,
  size,
  trigger,
  type,
  visible
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  disabled,
  overlay,
  placement,
  size,
  trigger,
  type,
  visible
});
