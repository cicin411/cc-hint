// src/api/antdv/a-input/a-group.json
var compact = {
  description: "Whether use compact style",
  optionType: "boolean",
  defaultValue: "false"
};
var size = {
  description: "The size of Input.Group specifies the size of the included Input fields. Available: large default small",
  optionType: "string",
  defaultValue: "default"
};
var a_group_default = {
  compact,
  size
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  compact,
  size
});
