// src/api/antdv/a-timeline/a-timeline-item.json
var color = {
  description: "Set the circle's color to blue, red, green or other custom colors",
  optionType: "string",
  defaultValue: "blue"
};
var dot = {
  description: "Customize timeline dot",
  optionType: "string|slot",
  defaultValue: "-"
};
var a_timeline_item_default = {
  color,
  dot
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  color,
  dot
});
