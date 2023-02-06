// src/api/antdv/a-card/a-card-meta.json
var avatar = {
  description: "avatar or icon",
  optionType: "slot",
  defaultValue: "-"
};
var description = {
  description: "description content",
  optionType: "string|slot",
  defaultValue: "-"
};
var title = {
  description: "title content",
  optionType: "string|slot",
  defaultValue: "-"
};
var a_card_meta_default = {
  avatar,
  description,
  title
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  avatar,
  description,
  title
});
