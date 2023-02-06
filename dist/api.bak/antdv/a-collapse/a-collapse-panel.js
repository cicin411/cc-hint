// src/api/antdv/a-collapse/a-collapse-panel.json
var disabled = {
  description: "If true, panel cannot be opened or closed",
  optionType: "boolean",
  defaultValue: "false"
};
var forceRender = {
  description: "Forced render of content on panel, instead of lazy rending after clicking on header",
  optionType: "boolean",
  defaultValue: "false"
};
var header = {
  description: "Title of the panel",
  optionType: "string",
  defaultValue: "-"
};
var key = {
  description: "Unique key identifying the panel from among its siblings",
  optionType: "string",
  defaultValue: "-"
};
var showArrow = {
  description: "If false, panel will not show arrow icon",
  optionType: "boolean",
  defaultValue: "true"
};
var a_collapse_panel_default = {
  disabled,
  forceRender,
  header,
  key,
  showArrow
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  disabled,
  forceRender,
  header,
  key,
  showArrow
});
