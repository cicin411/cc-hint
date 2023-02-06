// src/api/antdv/a-layout/a-layout-sider.json
var breakpoint = {
  options: ["xs", "sm", "md", "lg", "xl", "xxl"],
  description: "breakpoints of the responsive layout",
  optionType: "Enum { 'xs', 'sm', 'md', 'lg', 'xl', 'xxl' }",
  defaultValue: "-"
};
var class2 = {
  description: "container className",
  optionType: "string",
  defaultValue: "-"
};
var collapsed = {
  description: "to set the current status",
  optionType: "boolean",
  defaultValue: "-"
};
var collapsedWidth = {
  description: "width of the collapsed sidebar, by setting to 0 a special trigger will appear",
  optionType: "number",
  defaultValue: "80"
};
var collapsible = {
  description: "whether can be collapsed",
  optionType: "boolean",
  defaultValue: "false"
};
var defaultCollapsed = {
  description: "to set the initial status",
  optionType: "boolean",
  defaultValue: "false"
};
var reverseArrow = {
  description: "reverse direction of arrow, for a sider that expands from the right",
  optionType: "boolean",
  defaultValue: "false"
};
var style = {
  description: "to customize the styles",
  optionType: "object|string",
  defaultValue: "-"
};
var theme = {
  description: "color theme of the sidebar",
  optionType: "string: light dark",
  defaultValue: "dark"
};
var trigger = {
  description: "specify the customized trigger, set to null to hide the trigger",
  optionType: "string|slot",
  defaultValue: "-"
};
var width = {
  description: "width of the sidebar",
  optionType: "number|string",
  defaultValue: "200"
};
var a_layout_sider_default = {
  breakpoint,
  class: class2,
  collapsed,
  collapsedWidth,
  collapsible,
  defaultCollapsed,
  reverseArrow,
  style,
  theme,
  trigger,
  width
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  breakpoint,
  class: null,
  collapsed,
  collapsedWidth,
  collapsible,
  defaultCollapsed,
  reverseArrow,
  style,
  theme,
  trigger,
  width
});
