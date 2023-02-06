// src/api/antdv/a-table/a-table.json
var bordered = {
  description: "Whether to show all table borders",
  optionType: "boolean",
  defaultValue: "false"
};
var childrenColumnName = {
  description: "The column contains children to display",
  optionType: "string[]",
  defaultValue: "children"
};
var columns = {
  description: "Columns of table",
  optionType: "array",
  defaultValue: "-"
};
var components = {
  description: "Override default table elements",
  optionType: "object",
  defaultValue: "-"
};
var dataSource = {
  description: "Data record array to be displayed",
  optionType: "any[]",
  defaultValue: "-"
};
var defaultExpandAllRows = {
  description: "Expand all rows initially",
  optionType: "boolean",
  defaultValue: "false"
};
var defaultExpandedRowKeys = {
  description: "Initial expanded row keys",
  optionType: "string[]",
  defaultValue: "-"
};
var expandedRowKeys = {
  description: "Current expanded row keys",
  optionType: "string[]",
  defaultValue: "-"
};
var expandedRowRender = {
  description: "Expanded container render for each row",
  optionType: "Function(record, index, indent, expanded):VNode|slot-scope",
  defaultValue: "-"
};
var expandIcon = {
  description: "Customize row expand Icon.",
  optionType: 'Function(props):VNode | slot="expandIcon" slot-scope="props"',
  defaultValue: "-"
};
var expandRowByClick = {
  description: "Whether to expand row by clicking anywhere in the whole row",
  optionType: "boolean",
  defaultValue: "false"
};
var footer = {
  description: "Table footer renderer",
  optionType: "Function(currentPageData)|slot-scope",
  defaultValue: ""
};
var indentSize = {
  description: "Indent size in pixels of tree data",
  optionType: "number",
  defaultValue: "15"
};
var loading = {
  description: "Loading status of table",
  optionType: "boolean|object",
  defaultValue: "false"
};
var locale = {
  description: "i18n text including filter, sort, empty text, etc",
  optionType: "object",
  defaultValue: "filterConfirm: 'Ok' \nfilterReset: 'Reset' \nemptyText: 'No Data'\n\n"
};
var pagination = {
  description: "Pagination config or [Pagination] (/ant-design-vue/components/pagination/), hide it by setting it to false",
  optionType: "object",
  defaultValue: ""
};
var rowClassName = {
  description: "Row's className",
  optionType: "Function(record, index):string",
  defaultValue: "-"
};
var rowKey = {
  description: "Row's unique key, could be a string or function that returns a string",
  optionType: "string|Function(record):string",
  defaultValue: "key"
};
var rowSelection = {
  description: "Row selection config",
  optionType: "object",
  defaultValue: "null"
};
var scroll = {
  description: "Set horizontal or vertical scrolling, can also be used to specify the width and height of the scroll area. It is recommended to set a number for x, if you want to set it to true, you need to add style .ant-table td { white-space: nowrap; }.",
  optionType: "{ x: number | true, y: number }",
  defaultValue: "-"
};
var showHeader = {
  description: "Whether to show table header",
  optionType: "boolean",
  defaultValue: "true"
};
var size = {
  description: "Size of table",
  optionType: "default | middle | small",
  defaultValue: "default"
};
var title = {
  description: "Table title renderer",
  optionType: "Function(currentPageData)|slot-scope",
  defaultValue: ""
};
var customHeaderRow = {
  description: "Set props on per header row",
  optionType: "Function(column, index)",
  defaultValue: "-"
};
var customRow = {
  description: "Set props on per row",
  optionType: "Function(record, index)",
  defaultValue: "-"
};
var a_table_default = {
  bordered,
  childrenColumnName,
  columns,
  components,
  dataSource,
  defaultExpandAllRows,
  defaultExpandedRowKeys,
  expandedRowKeys,
  expandedRowRender,
  expandIcon,
  expandRowByClick,
  footer,
  indentSize,
  loading,
  locale,
  pagination,
  rowClassName,
  rowKey,
  rowSelection,
  scroll,
  showHeader,
  size,
  title,
  customHeaderRow,
  customRow
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  bordered,
  childrenColumnName,
  columns,
  components,
  customHeaderRow,
  customRow,
  dataSource,
  defaultExpandAllRows,
  defaultExpandedRowKeys,
  expandIcon,
  expandRowByClick,
  expandedRowKeys,
  expandedRowRender,
  footer,
  indentSize,
  loading,
  locale,
  pagination,
  rowClassName,
  rowKey,
  rowSelection,
  scroll,
  showHeader,
  size,
  title
});
