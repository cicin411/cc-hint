// src/api/antdv/a-avatar/a-avatar.json
var icon = {
  description: "the Icon type for an icon avatar, see Icon Component",
  optionType: "string",
  defaultValue: "-"
};
var shape = {
  description: "the shape of avatar",
  optionType: "circle | square",
  defaultValue: "circle"
};
var size = {
  description: "the size of the avatar",
  optionType: "number | string: large small default",
  defaultValue: "default"
};
var src = {
  description: "the address of the image for an image avatar",
  optionType: "string",
  defaultValue: "-"
};
var srcSet = {
  description: "a list of sources to use for different screen resolutions",
  optionType: "string",
  defaultValue: "-"
};
var alt = {
  description: "This attribute defines the alternative text describing the image",
  optionType: "string",
  defaultValue: "-"
};
var loadError = {
  description: "handler when img load error\uFF0Creturn false to prevent default fallback behavior",
  optionType: "() => boolean",
  defaultValue: "-"
};
var a_avatar_default = {
  icon,
  shape,
  size,
  src,
  srcSet,
  alt,
  loadError
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  alt,
  icon,
  loadError,
  shape,
  size,
  src,
  srcSet
});
