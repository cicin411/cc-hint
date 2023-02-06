// src/api/antdv/a-list/a-list-item-meta.json
var avatar = {
  description: "The avatar of list item",
  optionType: "slot",
  defaultValue: "-"
};
var description = {
  description: "The description of list item",
  optionType: "string|slot",
  defaultValue: "-"
};
var title = {
  description: "The title of list item",
  optionType: "string|slot",
  defaultValue: "-"
};
var a_list_item_meta_default = {
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
