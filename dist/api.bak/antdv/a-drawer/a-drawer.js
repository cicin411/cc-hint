// src/api/antdv/a-drawer/a-drawer.json
var closable = {
  description: "Whether a close (x) button is visible on top right of the Drawer dialog or not.",
  optionType: "boolean",
  defaultValue: "true"
};
var destroyOnClose = {
  description: "Whether to unmount child components on closing drawer or not.",
  optionType: "boolean",
  defaultValue: "false"
};
var getContainer = {
  description: "Return the mounted node for Drawer.",
  optionType: "HTMLElement | () => HTMLElement | Selectors",
  defaultValue: "'body'"
};
var mask = {
  description: "Whether to show mask or not.",
  optionType: "Boolean",
  defaultValue: "true"
};
var maskClosable = {
  description: "Clicking on the mask (area outside the Drawer) to close the Drawer or not.",
  optionType: "boolean",
  defaultValue: "true"
};
var maskStyle = {
  description: "Style for Drawer's mask element.",
  optionType: "object",
  defaultValue: "{}"
};
var title = {
  description: "The title for Drawer.",
  optionType: "string|slot",
  defaultValue: "-"
};
var visible = {
  description: "Whether the Drawer dialog is visible or not.",
  optionType: "boolean",
  defaultValue: "false"
};
var wrapClassName = {
  description: "The class name of the container of the Drawer dialog.",
  optionType: "string",
  defaultValue: "-"
};
var wrapStyle = {
  description: "The style of the container of the Drawer dialog.",
  optionType: "object",
  defaultValue: "-"
};
var width = {
  description: "Width of the Drawer dialog.",
  optionType: "string|number",
  defaultValue: "256"
};
var height = {
  description: "placement is top or bottom, height of the Drawer dialog.",
  optionType: "string|number",
  defaultValue: "-"
};
var zIndex = {
  description: "The z-index of the Drawer.",
  optionType: "Number",
  defaultValue: "1000"
};
var placement = {
  options: ["top", "left", "bottom", "right"],
  description: "The placement of the Drawer.",
  optionType: "'top' | 'right' | 'bottom' | 'left'",
  defaultValue: "'right'"
};
var a_drawer_default = {
  closable,
  destroyOnClose,
  getContainer,
  mask,
  maskClosable,
  maskStyle,
  title,
  visible,
  wrapClassName,
  wrapStyle,
  width,
  height,
  zIndex,
  placement
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  closable,
  destroyOnClose,
  getContainer,
  height,
  mask,
  maskClosable,
  maskStyle,
  placement,
  title,
  visible,
  width,
  wrapClassName,
  wrapStyle,
  zIndex
});
