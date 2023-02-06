// src/api/antdv/a-layout/a-layout.json
var class2 = {
  description: "container className",
  optionType: "string",
  defaultValue: "-"
};
var style = {
  description: "to customize the styles",
  optionType: "object|string",
  defaultValue: "-"
};
var hasSider = {
  description: "whether contain Sider in children, don't have to assign it normally. Useful in ssr avoid style flickering",
  optionType: "boolean",
  defaultValue: "-"
};
var a_layout_default = {
  class: class2,
  style,
  hasSider
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  class: null,
  hasSider,
  style
});
