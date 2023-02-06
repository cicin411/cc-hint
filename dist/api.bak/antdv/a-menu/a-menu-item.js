// src/api/antdv/a-menu/a-menu-item.json
var disabled = {
  description: "whether menu item is disabled or not",
  optionType: "boolean",
  defaultValue: "false"
};
var key = {
  description: "unique id of the menu item",
  optionType: "string",
  defaultValue: ""
};
var title = {
  description: "set display title for collapsed item",
  optionType: "string",
  defaultValue: ""
};
var a_menu_item_default = {
  disabled,
  key,
  title
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  disabled,
  key,
  title
});
