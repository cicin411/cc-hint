// src/api/antdv/a-pagination/a-pagination.json
var current = {
  description: "current page number",
  optionType: "number",
  defaultValue: "-"
};
var defaultCurrent = {
  description: "default initial page number",
  optionType: "number",
  defaultValue: "1"
};
var defaultPageSize = {
  description: "default number of data items per page",
  optionType: "number",
  defaultValue: "10"
};
var hideOnSinglePage = {
  description: "Whether to hide pager on single page",
  optionType: "boolean",
  defaultValue: "false"
};
var itemRender = {
  description: "to customize item innerHTML",
  optionType: "(page, type: 'page' | 'prev' | 'next', originalElement) => vNode",
  defaultValue: "-"
};
var pageSize = {
  description: "number of data items per page",
  optionType: "number",
  defaultValue: "-"
};
var pageSizeOptions = {
  description: "specify the sizeChanger options",
  optionType: "string[]",
  defaultValue: "['10', '20', '30', '40']"
};
var showQuickJumper = {
  description: "determine whether you can jump to pages directly",
  optionType: "boolean",
  defaultValue: "false"
};
var showSizeChanger = {
  description: "determine whether pageSize can be changed",
  optionType: "boolean",
  defaultValue: "false"
};
var showTotal = {
  description: "to display the total number and range",
  optionType: "Function(total, range)",
  defaultValue: "-"
};
var simple = {
  description: "whether to use simple mode",
  optionType: "boolean",
  defaultValue: "-"
};
var size = {
  options: ["small", "large"],
  description: "specify the size of Pagination, can be set to small",
  optionType: "string",
  defaultValue: '""'
};
var total = {
  description: "total number of data items",
  optionType: "number",
  defaultValue: "0"
};
var a_pagination_default = {
  current,
  defaultCurrent,
  defaultPageSize,
  hideOnSinglePage,
  itemRender,
  pageSize,
  pageSizeOptions,
  showQuickJumper,
  showSizeChanger,
  showTotal,
  simple,
  size,
  total
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  current,
  defaultCurrent,
  defaultPageSize,
  hideOnSinglePage,
  itemRender,
  pageSize,
  pageSizeOptions,
  showQuickJumper,
  showSizeChanger,
  showTotal,
  simple,
  size,
  total
});
