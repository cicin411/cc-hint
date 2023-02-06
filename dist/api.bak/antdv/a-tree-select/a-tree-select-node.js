// src/api/antdv/a-tree-select/a-tree-select-node.json
var selectable = {
  description: "can be selected",
  optionType: "boolean",
  defaultValue: "true"
};
var disableCheckbox = {
  description: "Disables the checkbox of the treeNode",
  optionType: "boolean",
  defaultValue: "false"
};
var disabled = {
  description: "Disabled or not",
  optionType: "boolean",
  defaultValue: "false"
};
var isLeaf = {
  description: "Leaf node or not",
  optionType: "boolean",
  defaultValue: "false"
};
var key = {
  description: "Required property, should be unique in the tree",
  optionType: "string | number",
  defaultValue: "-"
};
var title = {
  description: "Content showed on the treeNodes",
  optionType: "string|slot",
  defaultValue: "'---'"
};
var value = {
  description: "Will be treated as treeNodeFilterProp by default, should be unique in the tree",
  optionType: "string",
  defaultValue: "-"
};
var scopedSlots = {
  description: "When using treeNodes, you can use this property to configure the properties that support the slot, such as scopedSlots: { title: 'XXX'}",
  optionType: "object",
  defaultValue: "-"
};
var a_tree_select_node_default = {
  selectable,
  disableCheckbox,
  disabled,
  isLeaf,
  key,
  title,
  value,
  scopedSlots
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  disableCheckbox,
  disabled,
  isLeaf,
  key,
  scopedSlots,
  selectable,
  title,
  value
});
