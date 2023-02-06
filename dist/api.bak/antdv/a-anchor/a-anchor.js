// src/api/antdv/a-anchor/a-anchor.json
var affix = {
  description: "Fixed mode of Anchor",
  optionType: "boolean",
  defaultValue: "true"
};
var bounds = {
  description: "Bounding distance of anchor area",
  optionType: "number",
  defaultValue: "5(px)"
};
var getContainer = {
  description: "Scrolling container",
  optionType: "() => HTMLElement",
  defaultValue: "() => window"
};
var offsetBottom = {
  description: "Pixels to offset from bottom when calculating position of scroll",
  optionType: "number",
  defaultValue: "-"
};
var offsetTop = {
  description: "Pixels to offset from top when calculating position of scroll",
  optionType: "number",
  defaultValue: "0"
};
var showInkInFixed = {
  description: "Whether show ink-balls in Fixed mode",
  optionType: "boolean",
  defaultValue: "false"
};
var href = {
  description: "target of hyperlink",
  optionType: "string",
  defaultValue: ""
};
var title = {
  description: "content of hyperlink",
  optionType: "string|slot",
  defaultValue: ""
};
var a_anchor_default = {
  affix,
  bounds,
  getContainer,
  offsetBottom,
  offsetTop,
  showInkInFixed,
  href,
  title
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  affix,
  bounds,
  getContainer,
  href,
  offsetBottom,
  offsetTop,
  showInkInFixed,
  title
});
