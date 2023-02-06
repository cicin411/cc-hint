// src/api/antdv/a-tree/a-tree.json
var treeData = {
  description: "treeNode of tree, please use treeNodes before v1.1.4",
  optionType: "array",
  defaultValue: "-"
};
var autoExpandParent = {
  description: "Whether to automatically expand a parent treeNode",
  optionType: "boolean",
  defaultValue: "true"
};
var checkable = {
  description: "Adds a Checkbox before the treeNodes",
  optionType: "boolean",
  defaultValue: "false"
};
var checkedKeys = {
  description: "(Controlled) Specifies the keys of the checked treeNodes (PS: When this specifies the key of a treeNode which is also a parent treeNode, all the children treeNodes of will be checked; and vice versa, when it specifies the key of a treeNode which is a child treeNode, its parent treeNode will also be checked. When checkable and checkStrictly is true, its object has checked and halfChecked property. Regardless of whether the child or parent treeNode is checked, they won't impact each other.",
  optionType: "string[] | number[] | {checked: string[] | number[], halfChecked: string[] | number[]}",
  defaultValue: "[]"
};
var checkStrictly = {
  description: "Check treeNode precisely; parent treeNode and children treeNodes are not associated",
  optionType: "boolean",
  defaultValue: "false"
};
var defaultCheckedKeys = {
  description: "Specifies the keys of the default checked treeNodes",
  optionType: "string[] | number[]",
  defaultValue: "[]"
};
var defaultExpandAll = {
  description: "Whether to expand all treeNodes by default",
  optionType: "boolean",
  defaultValue: "false"
};
var defaultExpandedKeys = {
  description: "Specify the keys of the default expanded treeNodes",
  optionType: "string[] | number[]",
  defaultValue: "[]"
};
var defaultExpandParent = {
  description: "auto expand parent treeNodes when init",
  optionType: "bool",
  defaultValue: "true"
};
var defaultSelectedKeys = {
  description: "Specifies the keys of the default selected treeNodes",
  optionType: "string[] | number[]",
  defaultValue: "[]"
};
var disabled = {
  description: "whether disabled the tree",
  optionType: "bool",
  defaultValue: "false"
};
var draggable = {
  description: "Specifies whether this Tree is draggable (IE > 8)",
  optionType: "boolean",
  defaultValue: "false"
};
var expandedKeys = {
  description: "(Controlled) Specifies the keys of the expanded treeNodes",
  optionType: "string[] | number[]",
  defaultValue: "[]"
};
var filterTreeNode = {
  description: "Defines a function to filter (highlight) treeNodes. When the function returns true, the corresponding treeNode will be highlighted",
  optionType: "function(node)",
  defaultValue: "-"
};
var loadData = {
  description: "Load data asynchronously",
  optionType: "function(node)",
  defaultValue: "-"
};
var loadedKeys = {
  description: "(Controlled) Set loaded tree nodes. Need work with loadData",
  optionType: "string[] | number[]",
  defaultValue: "[]"
};
var multiple = {
  description: "Allows selecting multiple treeNodes",
  optionType: "boolean",
  defaultValue: "false"
};
var selectedKeys = {
  description: "(Controlled) Specifies the keys of the selected treeNodes",
  optionType: "string[] | number[]",
  defaultValue: "-"
};
var showIcon = {
  description: "Shows the icon before a TreeNode's title. There is no default style; you must set a custom style for it if set to true",
  optionType: "boolean",
  defaultValue: "false"
};
var showLine = {
  description: "Shows a connecting line",
  optionType: "boolean",
  defaultValue: "false"
};
var a_tree_default = {
  treeData,
  autoExpandParent,
  checkable,
  checkedKeys,
  checkStrictly,
  defaultCheckedKeys,
  defaultExpandAll,
  defaultExpandedKeys,
  defaultExpandParent,
  defaultSelectedKeys,
  disabled,
  draggable,
  expandedKeys,
  filterTreeNode,
  loadData,
  loadedKeys,
  multiple,
  selectedKeys,
  showIcon,
  showLine
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  autoExpandParent,
  checkStrictly,
  checkable,
  checkedKeys,
  defaultCheckedKeys,
  defaultExpandAll,
  defaultExpandParent,
  defaultExpandedKeys,
  defaultSelectedKeys,
  disabled,
  draggable,
  expandedKeys,
  filterTreeNode,
  loadData,
  loadedKeys,
  multiple,
  selectedKeys,
  showIcon,
  showLine,
  treeData
});
