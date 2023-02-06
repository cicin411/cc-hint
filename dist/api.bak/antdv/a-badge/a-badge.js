// src/api/antdv/a-badge/a-badge.json
var count = {
  description: "Number to show in badge",
  optionType: "number|string | slot",
  defaultValue: ""
};
var dot = {
  description: "Whether to display a red dot instead of count",
  optionType: "boolean",
  defaultValue: "false"
};
var offset = {
  description: "set offset of the badge dot, like [x, y]",
  optionType: "[number|string, number|string]",
  defaultValue: "-"
};
var overflowCount = {
  description: "Max count to show",
  optionType: "number",
  defaultValue: "99"
};
var showZero = {
  description: "Whether to show badge when count is zero",
  optionType: "boolean",
  defaultValue: "false"
};
var status = {
  options: ["success", "processing", "default", "error", "warning"],
  description: "Set Badge as a status dot",
  optionType: "success | processing | default | error | warning",
  defaultValue: "''"
};
var text = {
  description: "If status is set, text sets the display text of the status dot",
  optionType: "string",
  defaultValue: "''"
};
var numberStyle = {
  description: "sets the display style of the status dot",
  optionType: "object",
  defaultValue: "''"
};
var title = {
  description: "Text to show when hovering over the badge",
  optionType: "string",
  defaultValue: "count"
};
var a_badge_default = {
  count,
  dot,
  offset,
  overflowCount,
  showZero,
  status,
  text,
  numberStyle,
  title
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  count,
  dot,
  numberStyle,
  offset,
  overflowCount,
  showZero,
  status,
  text,
  title
});
