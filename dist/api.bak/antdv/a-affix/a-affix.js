// src/api/antdv/a-affix/a-affix.json
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
var target = {
  description: "specifies the scrollable area dom node",
  optionType: "() => HTMLElement",
  defaultValue: "() => window"
};
var a_affix_default = {
  offsetBottom,
  offsetTop,
  target
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  offsetBottom,
  offsetTop,
  target
});
