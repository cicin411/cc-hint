// src/api/antdv/a-divider/a-divider.json
var dashed = {
  description: "whether line is dashed",
  optionType: "Boolean",
  defaultValue: "false"
};
var orientation = {
  options: ["left", "right", "center"],
  description: "position of title inside divider",
  optionType: "enum: left right center",
  defaultValue: "center"
};
var type = {
  options: ["horizontal", "vertical"],
  description: "direction type of divider",
  optionType: "enum: horizontal vertical",
  defaultValue: "horizontal"
};
var a_divider_default = {
  dashed,
  orientation,
  type
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  dashed,
  orientation,
  type
});
