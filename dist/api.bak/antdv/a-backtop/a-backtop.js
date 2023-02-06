// src/api/antdv/a-backtop/a-backtop.json
var target = {
  description: "specifies the scrollable area dom node",
  optionType: "() => HTMLElement",
  defaultValue: "() => window"
};
var visibilityHeight = {
  description: "the BackTop button will not show until the scroll height reaches this value",
  optionType: "number",
  defaultValue: "400"
};
var a_backtop_default = {
  target,
  visibilityHeight
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  target,
  visibilityHeight
});
