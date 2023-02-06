// src/api/antdv/a-list/a-list.json
var bordered = {
  description: "Toggles rendering of the border around the list",
  optionType: "boolean",
  defaultValue: "false"
};
var footer = {
  description: "List footer renderer",
  optionType: "string|slot",
  defaultValue: "-"
};
var grid = {
  description: "The grid type of list. You can set grid to something like {gutter: 16, column: 4}",
  optionType: "object",
  defaultValue: "-"
};
var header = {
  description: "List header renderer",
  optionType: "string|slot",
  defaultValue: "-"
};
var itemLayout = {
  description: "The layout of list, default is horizontal, If a vertical list is desired, set the itemLayout property to vertical",
  optionType: "string",
  defaultValue: "-"
};
var loading = {
  description: "Shows a loading indicator while the contents of the list are being fetched",
  optionType: "boolean|object",
  defaultValue: "false"
};
var loadMore = {
  description: "Shows a load more content",
  optionType: "string|slot",
  defaultValue: "-"
};
var locale = {
  description: "i18n text including empty text",
  optionType: "object",
  defaultValue: "emptyText: 'No Data' \n"
};
var pagination = {
  description: "Pagination config, hide it by setting it to false",
  optionType: "boolean | object",
  defaultValue: "false"
};
var split = {
  description: "Toggles rendering of the split under the list item",
  optionType: "boolean",
  defaultValue: "true"
};
var renderItem = {
  description: 'Custom item renderer, slot="renderItem" and slot-scope="item, index"',
  optionType: "(item, index) => vNode",
  defaultValue: ""
};
var rowKey = {
  description: "Specify the key that will be used for uniquely identify each element",
  optionType: "item => string|number",
  defaultValue: ""
};
var a_list_default = {
  bordered,
  footer,
  grid,
  header,
  itemLayout,
  loading,
  loadMore,
  locale,
  pagination,
  split,
  renderItem,
  rowKey
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  bordered,
  footer,
  grid,
  header,
  itemLayout,
  loadMore,
  loading,
  locale,
  pagination,
  renderItem,
  rowKey,
  split
});
