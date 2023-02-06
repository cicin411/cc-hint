// src/api/antdv/a-icon/a-icon.json
var type = {
  description: "Type of the ant design icon",
  optionType: "string",
  defaultValue: "-"
};
var style = {
  description: "Style properties of icon, like fontSize and color",
  optionType: "CSSProperties",
  defaultValue: "-"
};
var theme = {
  options: ["filled", "outlined", "twoTone"],
  description: "Theme of the ant design icon",
  optionType: "'filled' | 'outlined' | 'twoTone'",
  defaultValue: "'outlined'"
};
var spin = {
  description: "Rotate icon with animation",
  optionType: "boolean",
  defaultValue: "false"
};
var component = {
  description: "The component used for the root node. This will override the type property.",
  optionType: "ComponentType<CustomIconComponentProps>",
  defaultValue: "-"
};
var twoToneColor = {
  description: "Only support the two-tone icon. Specific the primary color.",
  optionType: "string (hex color)",
  defaultValue: "-"
};
var a_icon_default = {
  type,
  style,
  theme,
  spin,
  component,
  twoToneColor
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  component,
  spin,
  style,
  theme,
  twoToneColor,
  type
});
