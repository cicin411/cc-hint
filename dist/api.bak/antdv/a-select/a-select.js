// src/api/antdv/a-select/a-select.json
var allowClear = {
  description: "Show clear button.",
  optionType: "boolean",
  defaultValue: "false"
};
var autoClearSearchValue = {
  description: "Whether the current search will be cleared on selecting an item. Only applies when mode is set to multiple or tags.",
  optionType: "boolean",
  defaultValue: "true"
};
var autoFocus = {
  description: "Get focus by default",
  optionType: "boolean",
  defaultValue: "false"
};
var defaultActiveFirstOption = {
  description: "Whether active first option by default",
  optionType: "boolean",
  defaultValue: "true"
};
var defaultValue = {
  description: "Initial selected option.",
  optionType: "string|string[]\nnumber|number[]",
  defaultValue: "-"
};
var disabled = {
  description: "Whether disabled select",
  optionType: "boolean",
  defaultValue: "false"
};
var dropdownClassName = {
  description: "className of dropdown menu",
  optionType: "string",
  defaultValue: "-"
};
var dropdownMatchSelectWidth = {
  description: "Whether dropdown's width is same with select.",
  optionType: "boolean",
  defaultValue: "true"
};
var dropdownRender = {
  description: "Customize dropdown content",
  optionType: "(menuNode: VNode, props) => VNode",
  defaultValue: "-"
};
var dropdownStyle = {
  description: "style of dropdown menu",
  optionType: "object",
  defaultValue: "-"
};
var filterOption = {
  description: "If true, filter options by input, if function, filter options against it. The function will receive two arguments, inputValue and option, if the function returns true, the option will be included in the filtered set; Otherwise, it will be excluded.",
  optionType: "boolean or function(inputValue, option)",
  defaultValue: "true"
};
var firstActiveValue = {
  description: "Value of action option by default",
  optionType: "string|string[]",
  defaultValue: "-"
};
var getPopupContainer = {
  description: "Parent Node which the selector should be rendered to. Default to body. When position issues happen, try to modify it into scrollable content and position it relative.",
  optionType: "function(triggerNode)",
  defaultValue: "() => document.body"
};
var labelInValue = {
  description: "whether to embed label in value, turn the format of value from string to {key: string, label: vNodes}",
  optionType: "boolean",
  defaultValue: "false"
};
var maxTagCount = {
  description: "Max tag count to show",
  optionType: "number",
  defaultValue: "-"
};
var maxTagPlaceholder = {
  description: "Placeholder for not showing tags",
  optionType: "slot/function(omittedValues)",
  defaultValue: "-"
};
var mode = {
  options: ["default", "multiple", "tags"],
  description: "Set mode of Select",
  optionType: "'default' | 'multiple' | 'tags'",
  defaultValue: "'default'"
};
var notFoundContent = {
  description: "Specify content to show when no result matches..",
  optionType: "string|slot",
  defaultValue: "'Not Found'"
};
var optionFilterProp = {
  description: "Which prop value of option will be used for filter if filterOption is true",
  optionType: "string",
  defaultValue: "value"
};
var optionLabelProp = {
  description: "Which prop value of option will render as content of select.",
  optionType: "string",
  defaultValue: "value for combobox, children for other modes"
};
var placeholder = {
  description: "Placeholder of select",
  optionType: "string|slot",
  defaultValue: "-"
};
var showSearch = {
  description: "Whether show search input in single mode.",
  optionType: "boolean",
  defaultValue: "false"
};
var showArrow = {
  description: "Whether to show the drop-down arrow",
  optionType: "boolean",
  defaultValue: "true"
};
var size = {
  description: "Size of Select input. default large small",
  optionType: "string",
  defaultValue: "default"
};
var suffixIcon = {
  description: "The custom suffix icon",
  optionType: "VNode | slot",
  defaultValue: "-"
};
var removeIcon = {
  description: "The custom remove icon",
  optionType: "VNode | slot",
  defaultValue: "-"
};
var clearIcon = {
  description: "The custom clear icon",
  optionType: "VNode | slot",
  defaultValue: "-"
};
var menuItemSelectedIcon = {
  description: "The custom menuItemSelected icon",
  optionType: "VNode | slot",
  defaultValue: "-"
};
var tokenSeparators = {
  description: "Separator used to tokenize on tag/multiple mode",
  optionType: "string[]",
  defaultValue: ""
};
var value = {
  description: "Current selected option.",
  optionType: "string|number|string[]|number[]",
  defaultValue: "-"
};
var options = {
  description: "Data of the selectOption, manual construction work is no longer needed if this property has been set",
  optionType: "array<{value, label, [disabled, key, title]}>",
  defaultValue: "[]"
};
var defaultOpen = {
  description: "Initial open state of dropdown",
  optionType: "boolean",
  defaultValue: "-"
};
var open = {
  description: "Controlled open state of dropdown",
  optionType: "boolean",
  defaultValue: "-"
};
var loading = {
  description: "indicate loading state",
  optionType: "Boolean",
  defaultValue: "false"
};
var a_select_default = {
  allowClear,
  autoClearSearchValue,
  autoFocus,
  defaultActiveFirstOption,
  defaultValue,
  disabled,
  dropdownClassName,
  dropdownMatchSelectWidth,
  dropdownRender,
  dropdownStyle,
  filterOption,
  firstActiveValue,
  getPopupContainer,
  labelInValue,
  maxTagCount,
  maxTagPlaceholder,
  mode,
  notFoundContent,
  optionFilterProp,
  optionLabelProp,
  placeholder,
  showSearch,
  showArrow,
  size,
  suffixIcon,
  removeIcon,
  clearIcon,
  menuItemSelectedIcon,
  tokenSeparators,
  value,
  options,
  defaultOpen,
  open,
  loading
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  allowClear,
  autoClearSearchValue,
  autoFocus,
  clearIcon,
  defaultActiveFirstOption,
  defaultOpen,
  defaultValue,
  disabled,
  dropdownClassName,
  dropdownMatchSelectWidth,
  dropdownRender,
  dropdownStyle,
  filterOption,
  firstActiveValue,
  getPopupContainer,
  labelInValue,
  loading,
  maxTagCount,
  maxTagPlaceholder,
  menuItemSelectedIcon,
  mode,
  notFoundContent,
  open,
  optionFilterProp,
  optionLabelProp,
  options,
  placeholder,
  removeIcon,
  showArrow,
  showSearch,
  size,
  suffixIcon,
  tokenSeparators,
  value
});
