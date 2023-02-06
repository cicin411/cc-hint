// src/api/antdv/a-menu/a-menu-sub.json
var children = {
  description: "sub menus or sub menu items",
  optionType: "Array<MenuItem|SubMenu>",
  defaultValue: ""
};
var disabled = {
  description: "whether sub menu is disabled or not",
  optionType: "boolean",
  defaultValue: "false"
};
var key = {
  description: "unique id of the sub menu",
  optionType: "string",
  defaultValue: ""
};
var title = {
  description: "title of the sub menu",
  optionType: "string|slot",
  defaultValue: ""
};
var a_menu_sub_default = {
  children,
  disabled,
  key,
  title
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  children,
  disabled,
  key,
  title
});
