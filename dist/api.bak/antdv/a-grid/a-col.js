// src/api/antdv/a-grid/a-col.json
var offset = {
  description: "the number of cells to offset Col from the left",
  optionType: "number",
  defaultValue: "0"
};
var order = {
  description: "raster order, used in flex layout mode",
  optionType: "number",
  defaultValue: "0"
};
var pull = {
  description: "the number of cells that raster is moved to the left",
  optionType: "number",
  defaultValue: "0"
};
var push = {
  description: "the number of cells that raster is moved to the right",
  optionType: "number",
  defaultValue: "0"
};
var span = {
  description: "raster number of cells to occupy, 0 corresponds to display: none",
  optionType: "number",
  defaultValue: "none"
};
var xs = {
  description: "<576px and also default setting, could be a span value or an object containing above props",
  optionType: "number|object",
  defaultValue: "-"
};
var sm = {
  description: "\u2265576px, could be a span value or an object containing above props",
  optionType: "number|object",
  defaultValue: "-"
};
var md = {
  description: "\u2265768px, could be a span value or an object containing above props",
  optionType: "number|object",
  defaultValue: "-"
};
var lg = {
  description: "\u2265992px, could be a span value or an object containing above props",
  optionType: "number|object",
  defaultValue: "-"
};
var xl = {
  description: "\u22651200px, could be a span value or an object containing above props",
  optionType: "number|object",
  defaultValue: "-"
};
var xxl = {
  description: "\u22651600px, could be a span value or an object containing above props",
  optionType: "number|object",
  defaultValue: "-"
};
var a_col_default = {
  offset,
  order,
  pull,
  push,
  span,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  lg,
  md,
  offset,
  order,
  pull,
  push,
  sm,
  span,
  xl,
  xs,
  xxl
});
