// src/api/antdv/a-transfer/a-transfer.json
var dataSource = {
  description: "Used for setting the source data. The elements that are part of this array will be present the left column. Except the elements whose keys are included in targetKeys prop.",
  optionType: "[{key: string.isRequired,title: string.isRequired,description: string,disabled: bool}]",
  defaultValue: "[]"
};
var disabled = {
  description: "Whether disabled transfer",
  optionType: "boolean",
  defaultValue: "false"
};
var filterOption = {
  description: "A function to determine whether an item should show in search result list",
  optionType: "(inputValue, option): boolean",
  defaultValue: ""
};
var footer = {
  description: "customize the progress dot by setting a scoped slot",
  optionType: 'slot="footer" slot-scope="props"',
  defaultValue: ""
};
var lazy = {
  description: "property of vc-lazy-load for lazy rendering items. Turn off it by set to false.",
  optionType: "object|boolean",
  defaultValue: "{ height: 32, offset: 32 }"
};
var listStyle = {
  description: "A custom CSS style used for rendering the transfer columns.",
  optionType: "object",
  defaultValue: ""
};
var locale = {
  description: "i18n text including filter, empty text, item unit, etc",
  optionType: "object",
  defaultValue: "{ itemUnit: 'item', itemsUnit: 'items', notFoundContent: 'The list is empty', searchPlaceholder: 'Search here' }"
};
var operations = {
  description: "A set of operations that are sorted from top to bottom.",
  optionType: "string[]",
  defaultValue: "['>', '<']"
};
var render = {
  description: "The function to generate the item shown on a column. Based on an record (element of the dataSource array), this function should return a element which is generated from that record. Also, it can return a plain object with value and label, label is a element and value is for title",
  optionType: "Function(record)",
  defaultValue: ""
};
var selectedKeys = {
  description: "A set of keys of selected items.",
  optionType: "string[]",
  defaultValue: "[]"
};
var showSearch = {
  description: "If included, a search box is shown on each column.",
  optionType: "boolean",
  defaultValue: "false"
};
var targetKeys = {
  description: "A set of keys of elements that are listed on the right column.",
  optionType: "string[]",
  defaultValue: "[]"
};
var titles = {
  description: "A set of titles that are sorted from left to right.",
  optionType: "string[]",
  defaultValue: "-"
};
var a_transfer_default = {
  dataSource,
  disabled,
  filterOption,
  footer,
  lazy,
  listStyle,
  locale,
  operations,
  render,
  selectedKeys,
  showSearch,
  targetKeys,
  titles
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  dataSource,
  disabled,
  filterOption,
  footer,
  lazy,
  listStyle,
  locale,
  operations,
  render,
  selectedKeys,
  showSearch,
  targetKeys,
  titles
});
