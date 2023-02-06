// src/api/antdv/a-tabs/a-tabs.json
var activeKey = {
  description: "Current TabPane's key",
  optionType: "string",
  defaultValue: "-"
};
var animated = {
  description: 'Whether to change tabs with animation. Only works while tabPosition="top"\\|"bottom"',
  optionType: "boolean | {inkBar:boolean, tabPane:boolean}",
  defaultValue: 'true, false when type="card"'
};
var defaultActiveKey = {
  description: "Initial active TabPane's key, if activeKey is not set.",
  optionType: "string",
  defaultValue: "-"
};
var hideAdd = {
  description: 'Hide plus icon or not. Only works while type="editable-card"',
  optionType: "boolean",
  defaultValue: "false"
};
var size = {
  options: ["large", "default", "small"],
  description: "preset tab bar size",
  optionType: "large | default | small",
  defaultValue: "default"
};
var tabBarExtraContent = {
  description: "Extra content in tab bar",
  optionType: "slot",
  defaultValue: "-"
};
var tabBarStyle = {
  description: "Tab bar style object",
  optionType: "object",
  defaultValue: "-"
};
var tabPosition = {
  options: ["top", "right", "bottom", "left"],
  description: "Position of tabs",
  optionType: "top | right | bottom | left",
  defaultValue: "top"
};
var type = {
  options: ["line", "card", "editable-card"],
  description: "Basic style of tabs",
  optionType: "line | card | editable-card",
  defaultValue: "line"
};
var tabBarGutter = {
  description: "The gap between tabs",
  optionType: "number",
  defaultValue: "-"
};
var a_tabs_default = {
  activeKey,
  animated,
  defaultActiveKey,
  hideAdd,
  size,
  tabBarExtraContent,
  tabBarStyle,
  tabPosition,
  type,
  tabBarGutter
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  activeKey,
  animated,
  defaultActiveKey,
  hideAdd,
  size,
  tabBarExtraContent,
  tabBarGutter,
  tabBarStyle,
  tabPosition,
  type
});
