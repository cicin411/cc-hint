// src/api/antdv/a-tree-select/a-tree-select.json
var allowClear = {
  description: "Whether allow clear",
  optionType: "boolean",
  defaultValue: "false"
};
var defaultValue = {
  description: "To set the initial selected treeNode(s).",
  optionType: "string|string[]",
  defaultValue: "-"
};
var disabled = {
  description: "Disabled or not",
  optionType: "boolean",
  defaultValue: "false"
};
var dropdownClassName = {
  description: "className of dropdown menu",
  optionType: "string",
  defaultValue: "-"
};
var dropdownMatchSelectWidth = {
  description: "Determine whether the dropdown menu and the select input are the same width",
  optionType: "boolean",
  defaultValue: "true"
};
var dropdownStyle = {
  description: "To set the style of the dropdown menu",
  optionType: "object",
  defaultValue: "-"
};
var filterTreeNode = {
  description: "Whether to filter treeNodes by input value. The value of treeNodeFilterProp is used for filtering by default.",
  optionType: "boolean|Function(inputValue: string, treeNode: TreeNode) (should return boolean)",
  defaultValue: "Function"
};
var getPopupContainer = {
  description: "To set the container of the dropdown menu. The default is to create a div element in body, you can reset it to the scrolling area and make a relative reposition.",
  optionType: "Function(triggerNode)",
  defaultValue: "() => document.body"
};
var labelInValue = {
  description: "whether to embed label in value, turn the format of value from string to {value: string, label: VNode, halfChecked: string[]}",
  optionType: "boolean",
  defaultValue: "false"
};
var loadData = {
  description: "Load data asynchronously.",
  optionType: "function(node)",
  defaultValue: "-"
};
var multiple = {
  description: "Support multiple or not, will be true when enable treeCheckable.",
  optionType: "boolean",
  defaultValue: "false"
};
var placeholder = {
  description: "Placeholder of the select input",
  optionType: "string|slot",
  defaultValue: "-"
};
var searchPlaceholder = {
  description: "Placeholder of the search input",
  optionType: "string|slot",
  defaultValue: "-"
};
var searchValue__sync_ = {
  description: "work with search event to make search value controlled.",
  optionType: "string",
  defaultValue: "-"
};
var showCheckedStrategy = {
  description: "The way show selected item in box. Default: just show child nodes. TreeSelect.SHOW_ALL: show all checked treeNodes (include parent treeNode). TreeSelect.SHOW_PARENT: show checked treeNodes (just show parent treeNode).",
  optionType: "enum { TreeSelect.SHOW_ALL, TreeSelect.SHOW_PARENT, TreeSelect.SHOW_CHILD }",
  defaultValue: "TreeSelect.SHOW_CHILD"
};
var showSearch = {
  description: "Whether to display a search input in the dropdown menu(valid only in the single mode)",
  optionType: "boolean",
  defaultValue: "false"
};
var size = {
  description: "To set the size of the select input, options: large small",
  optionType: "string",
  defaultValue: "'default'"
};
var suffixIcon = {
  description: "The custom suffix icon",
  optionType: "VNode | slot",
  defaultValue: "-"
};
var treeCheckable = {
  description: "Whether to show checkbox on the treeNodes",
  optionType: "boolean",
  defaultValue: "false"
};
var treeCheckStrictly = {
  description: "Whether to check nodes precisely (in the checkable mode), means parent and child nodes are not associated, and it will make labelInValue be true",
  optionType: "boolean",
  defaultValue: "false"
};
var treeData = {
  description: "Data of the treeNodes, manual construction work is no longer needed if this property has been set(ensure the Uniqueness of each value)",
  optionType: "array<{ value, label, children, [disabled, disableCheckbox, selectable] }>",
  defaultValue: "[]"
};
var treeDataSimpleMode = {
  description: `Enable simple mode of treeData.(treeData should like this: [{id:1, pId:0, value:'1', label:"test1",...},...], pId is parent node's id)`,
  optionType: "false|Array<{ id: string, pId: string, rootPId: null }>",
  defaultValue: "false"
};
var treeDefaultExpandAll = {
  description: "Whether to expand all treeNodes by default",
  optionType: "boolean",
  defaultValue: "false"
};
var treeDefaultExpandedKeys = {
  description: "Default expanded treeNodes",
  optionType: "string[] | number[]",
  defaultValue: "-"
};
var treeExpandedKeys = {
  description: "Set expanded keys",
  optionType: "string[] | number[]",
  defaultValue: "-"
};
var treeNodeFilterProp = {
  description: "Will be used for filtering if filterTreeNode returns true",
  optionType: "string",
  defaultValue: "'value'"
};
var treeNodeLabelProp = {
  description: "Will render as content of select",
  optionType: "string",
  defaultValue: "'title'"
};
var value = {
  description: "To set the current selected treeNode(s).",
  optionType: "string|string[]",
  defaultValue: "-"
};
var a_tree_select_default = {
  allowClear,
  defaultValue,
  disabled,
  dropdownClassName,
  dropdownMatchSelectWidth,
  dropdownStyle,
  filterTreeNode,
  getPopupContainer,
  labelInValue,
  loadData,
  multiple,
  placeholder,
  searchPlaceholder,
  "searchValue(.sync)": searchValue__sync_,
  showCheckedStrategy,
  showSearch,
  size,
  suffixIcon,
  treeCheckable,
  treeCheckStrictly,
  treeData,
  treeDataSimpleMode,
  treeDefaultExpandAll,
  treeDefaultExpandedKeys,
  treeExpandedKeys,
  treeNodeFilterProp,
  treeNodeLabelProp,
  value
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  allowClear,
  defaultValue,
  disabled,
  dropdownClassName,
  dropdownMatchSelectWidth,
  dropdownStyle,
  filterTreeNode,
  getPopupContainer,
  labelInValue,
  loadData,
  multiple,
  placeholder,
  searchPlaceholder,
  "searchValue(.sync)",
  showCheckedStrategy,
  showSearch,
  size,
  suffixIcon,
  treeCheckStrictly,
  treeCheckable,
  treeData,
  treeDataSimpleMode,
  treeDefaultExpandAll,
  treeDefaultExpandedKeys,
  treeExpandedKeys,
  treeNodeFilterProp,
  treeNodeLabelProp,
  value
});
