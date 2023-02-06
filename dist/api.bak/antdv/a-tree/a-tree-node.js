// src/api/antdv/a-tree/a-tree-node.json
var class2 = {
  description: "className",
  optionType: "string",
  defaultValue: "-"
};
var style = {
  description: "style",
  optionType: "string|object",
  defaultValue: "-"
};
var disableCheckbox = {
  description: "Disables the checkbox of the treeNode",
  optionType: "boolean",
  defaultValue: "false"
};
var disabled = {
  description: "Disables the treeNode",
  optionType: "boolean",
  defaultValue: "false"
};
var icon = {
  description: "customize icon. When you pass component, whose render will receive full TreeNode props as component props",
  optionType: "slot|slot-scope",
  defaultValue: "-"
};
var isLeaf = {
  description: "Determines if this is a leaf node(effective when loadData is specified)",
  optionType: "boolean",
  defaultValue: "false"
};
var key = {
  description: "Used with (default)ExpandedKeys / (default)CheckedKeys / (default)SelectedKeys. P.S.: It must be unique in all of treeNodes of the tree!",
  optionType: "string | number",
  defaultValue: "internal calculated position of treeNode"
};
var selectable = {
  description: "Set whether the treeNode can be selected",
  optionType: "boolean",
  defaultValue: "true"
};
var title = {
  description: "Title",
  optionType: "string|slot|slot-scope",
  defaultValue: "'---'"
};
var slots = {
  description: "When using treeNodes, you can use this property to configure the properties that support the slot, such as slots: { title: 'XXX'}",
  optionType: "object",
  defaultValue: "-"
};
var scopedSlots = {
  description: "When using treeNodes, you can use this property to configure the properties that support the slot-scope, such as scopedSlots: { title: 'XXX'}",
  optionType: "object",
  defaultValue: "-"
};
var on = {
  description: "When using treeNodes, you can use this property to configure the events, such as on: { click: () => {}}",
  optionType: "object",
  defaultValue: "-"
};
var a_tree_node_default = {
  class: class2,
  style,
  disableCheckbox,
  disabled,
  icon,
  isLeaf,
  key,
  selectable,
  title,
  slots,
  scopedSlots,
  on
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  class: null,
  disableCheckbox,
  disabled,
  icon,
  isLeaf,
  key,
  on,
  scopedSlots,
  selectable,
  slots,
  style,
  title
});
