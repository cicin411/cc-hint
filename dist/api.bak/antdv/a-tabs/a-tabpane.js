// src/api/antdv/a-tabs/a-tabpane.json
var forceRender = {
  description: "Forced render of content in tabs, not lazy render after clicking on tabs",
  optionType: "boolean",
  defaultValue: "false"
};
var key = {
  description: "TabPane's key",
  optionType: "string",
  defaultValue: "-"
};
var tab = {
  description: "Show text in TabPane's head",
  optionType: "string|slot",
  defaultValue: "-"
};
var a_tabpane_default = {
  forceRender,
  key,
  tab
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  forceRender,
  key,
  tab
});
