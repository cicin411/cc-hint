// src/api/antdv/a-menu/a-menu.json
var defaultOpenKeys = {
  description: "array with the keys of default opened sub menus",
  optionType: "",
  defaultValue: ""
};
var defaultSelectedKeys = {
  description: "array with the keys of default selected menu items",
  optionType: "string[]",
  defaultValue: ""
};
var forceSubMenuRender = {
  description: "render submenu into DOM before it shows",
  optionType: "boolean",
  defaultValue: "false"
};
var inlineCollapsed = {
  description: "specifies the collapsed status when menu is inline mode",
  optionType: "boolean",
  defaultValue: "-"
};
var inlineIndent = {
  description: "indent px of inline menu item on each level",
  optionType: "number",
  defaultValue: "24"
};
var mode = {
  description: "type of the menu; vertical, horizontal, and inline modes are supported",
  optionType: "string: vertical | vertical-right | horizontal | inline",
  defaultValue: "vertical"
};
var multiple = {
  description: "Allow selection of multiple items",
  optionType: "boolean",
  defaultValue: "false"
};
var openKeys = {
  description: "array with the keys of currently opened sub menus",
  optionType: "string[]",
  defaultValue: ""
};
var selectable = {
  description: "allow selecting menu items",
  optionType: "boolean",
  defaultValue: "true"
};
var selectedKeys = {
  description: "array with the keys of currently selected menu items",
  optionType: "string[]",
  defaultValue: ""
};
var style = {
  description: "style of the root node",
  optionType: "object",
  defaultValue: ""
};
var subMenuCloseDelay = {
  description: "delay time to hide submenu when mouse leave, unit: second",
  optionType: "number",
  defaultValue: "0.1"
};
var subMenuOpenDelay = {
  description: "delay time to show submenu when mouse enter, unit: second",
  optionType: "number",
  defaultValue: "0"
};
var theme = {
  options: ["light", "dark"],
  description: "color theme of the menu",
  optionType: "string: light dark",
  defaultValue: "light"
};
var a_menu_default = {
  defaultOpenKeys,
  defaultSelectedKeys,
  forceSubMenuRender,
  inlineCollapsed,
  inlineIndent,
  mode,
  multiple,
  openKeys,
  selectable,
  selectedKeys,
  style,
  subMenuCloseDelay,
  subMenuOpenDelay,
  theme
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  defaultOpenKeys,
  defaultSelectedKeys,
  forceSubMenuRender,
  inlineCollapsed,
  inlineIndent,
  mode,
  multiple,
  openKeys,
  selectable,
  selectedKeys,
  style,
  subMenuCloseDelay,
  subMenuOpenDelay,
  theme
});
