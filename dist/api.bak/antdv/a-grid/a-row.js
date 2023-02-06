// src/api/antdv/a-grid/a-row.json
var align = {
  description: "the vertical alignment of the flex layout: top middle bottom",
  optionType: "string",
  defaultValue: "top"
};
var gutter = {
  description: "spacing between grids, could be a number or a object like { xs: 8, sm: 16, md: 24}",
  optionType: "number/object",
  defaultValue: "0"
};
var justify = {
  description: "horizontal arrangement of the flex layout: start end center space-around space-between",
  optionType: "string",
  defaultValue: "start"
};
var type = {
  description: "layout mode, optional flex, browser support",
  optionType: "string",
  defaultValue: ""
};
var a_row_default = {
  align,
  gutter,
  justify,
  type
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  align,
  gutter,
  justify,
  type
});
