// src/api/antdv/a-skeleton/a-skeleton.json
var active = {
  description: "Show animation effect",
  optionType: "boolean",
  defaultValue: "false"
};
var avatar = {
  description: "Show avatar placeholder",
  optionType: "boolean | SkeletonAvatarProps",
  defaultValue: "false"
};
var loading = {
  description: "Display the skeleton when true",
  optionType: "boolean",
  defaultValue: "-"
};
var paragraph = {
  description: "Show paragraph placeholder",
  optionType: "boolean | SkeletonParagraphProps",
  defaultValue: "true"
};
var title = {
  description: "Show title placeholder",
  optionType: "boolean | SkeletonTitleProps",
  defaultValue: "true"
};
var a_skeleton_default = {
  active,
  avatar,
  loading,
  paragraph,
  title
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  active,
  avatar,
  loading,
  paragraph,
  title
});
