// src/api/antdv/a-list/a-list-item.json
var actions = {
  description: "The actions content of list item. If itemLayout is vertical, shows the content on bottom, otherwise shows content on the far right.",
  optionType: "Array<vNode>|slot",
  defaultValue: "-"
};
var extra = {
  description: "The extra content of list item. If itemLayout is vertical, shows the content on right, otherwise shows content on the far right.",
  optionType: "string|slot",
  defaultValue: "-"
};
var a_list_item_default = {
  actions,
  extra
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  actions,
  extra
});
