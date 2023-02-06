// src/api/antdv/a-dropdown/a-dropdown.json
var disabled = {
  description: "whether the dropdown menu is disabled",
  optionType: "boolean",
  defaultValue: "-"
};
var getPopupContainer = {
  description: "to set the container of the dropdown menu. The default is to create a div element in body, you can reset it to the scrolling area and make a relative reposition. example",
  optionType: "Function(triggerNode)",
  defaultValue: "() => document.body"
};
var overlay = {
  description: "the dropdown menu",
  optionType: "Menu",
  defaultValue: "-"
};
var overlayClassName = {
  description: "Class name of the dropdown root element",
  optionType: "string",
  defaultValue: "-"
};
var overlayStyle = {
  description: "Style of the dropdown root element",
  optionType: "object",
  defaultValue: "-"
};
var placement = {
  options: ["bottomLeft", "bottomCenter", "bottomRight", "topLeft", "topCenter", "topRight"],
  description: "placement of pop menu: bottomLeft bottomCenter bottomRight topLeft topCenter topRight",
  optionType: "String",
  defaultValue: "bottomLeft"
};
var trigger = {
  description: "the trigger mode which executes the drop-down action",
  optionType: "Array<click|hover|contextmenu>",
  defaultValue: "['hover']"
};
var visible = {
  description: "whether the dropdown menu is visible",
  optionType: "boolean",
  defaultValue: "-"
};
var a_dropdown_default = {
  disabled,
  getPopupContainer,
  overlay,
  overlayClassName,
  overlayStyle,
  placement,
  trigger,
  visible
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  disabled,
  getPopupContainer,
  overlay,
  overlayClassName,
  overlayStyle,
  placement,
  trigger,
  visible
});
