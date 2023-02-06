// src/api/antdv/a-tag/a-tag.json
var afterClose = {
  description: "Callback executed when close animation is completed",
  optionType: "() => void",
  defaultValue: "-"
};
var closable = {
  description: "Whether the Tag can be closed",
  optionType: "boolean",
  defaultValue: "false"
};
var color = {
  description: "Color of the Tag",
  optionType: "string",
  defaultValue: "-"
};
var visible = {
  description: "Whether the Tag is closed or not",
  optionType: "boolean",
  defaultValue: "true"
};
var a_tag_default = {
  afterClose,
  closable,
  color,
  visible
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  afterClose,
  closable,
  color,
  visible
});
