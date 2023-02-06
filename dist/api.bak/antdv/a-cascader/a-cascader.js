// src/api/antdv/a-cascader/a-cascader.json
var allowClear = {
  description: "whether allow clear",
  optionType: "boolean",
  defaultValue: "true"
};
var autoFocus = {
  description: "get focus when component mounted",
  optionType: "boolean",
  defaultValue: "false"
};
var changeOnSelect = {
  description: "change value on each selection if set to true, see above demo for details",
  optionType: "boolean",
  defaultValue: "false"
};
var defaultValue = {
  description: "initial selected value",
  optionType: "string[]",
  defaultValue: "[]"
};
var disabled = {
  description: "whether disabled select",
  optionType: "boolean",
  defaultValue: "false"
};
var displayRender = {
  description: 'render function of displaying selected options, you can use slot="displayRender" and slot-scope="{labels, selectedOptions}"',
  optionType: "({labels, selectedOptions}) => vNode",
  defaultValue: "labels => labels.join(' / ')"
};
var expandTrigger = {
  description: "expand current item when click or hover, one of 'click' 'hover'",
  optionType: "string",
  defaultValue: "'click'"
};
var fieldNames = {
  description: "custom field name for label and value and children",
  optionType: "object",
  defaultValue: "{ label: 'label', value: 'value', children: 'children' }"
};
var getPopupContainer = {
  description: "Parent Node which the selector should be rendered to. Default to body. When position issues happen, try to modify it into scrollable content and position it relative.",
  optionType: "Function(triggerNode)",
  defaultValue: "() => document.body"
};
var loadData = {
  description: "To load option lazily, and it cannot work with showSearch",
  optionType: "(selectedOptions) => void",
  defaultValue: "-"
};
var notFoundContent = {
  description: "Specify content to show when no result matches.",
  optionType: "string",
  defaultValue: "'Not Found'"
};
var options = {
  description: "data options of cascade",
  optionType: "object",
  defaultValue: "-"
};
var placeholder = {
  description: "input placeholder",
  optionType: "string",
  defaultValue: "'Please select'"
};
var popupClassName = {
  description: "additional className of popup overlay",
  optionType: "string",
  defaultValue: "-"
};
var popupStyle = {
  description: "additional style of popup overlay",
  optionType: "object",
  defaultValue: "{}"
};
var popupPlacement = {
  description: "use preset popup align config from builtinPlacements\uFF1AbottomLeft bottomRight topLeft topRight",
  optionType: "string",
  defaultValue: "bottomLeft"
};
var popupVisible = {
  description: "set visible of cascader popup",
  optionType: "boolean",
  defaultValue: "-"
};
var showSearch = {
  description: "Whether show search input in single mode.",
  optionType: "boolean|object",
  defaultValue: "false"
};
var size = {
  description: "input size, one of large default small",
  optionType: "string",
  defaultValue: "default"
};
var suffixIcon = {
  description: "The custom suffix icon",
  optionType: "string | VNode | slot",
  defaultValue: "-"
};
var value = {
  description: "selected value",
  optionType: "string[]",
  defaultValue: "-"
};
var a_cascader_default = {
  allowClear,
  autoFocus,
  changeOnSelect,
  defaultValue,
  disabled,
  displayRender,
  expandTrigger,
  fieldNames,
  getPopupContainer,
  loadData,
  notFoundContent,
  options,
  placeholder,
  popupClassName,
  popupStyle,
  popupPlacement,
  popupVisible,
  showSearch,
  size,
  suffixIcon,
  value
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  allowClear,
  autoFocus,
  changeOnSelect,
  defaultValue,
  disabled,
  displayRender,
  expandTrigger,
  fieldNames,
  getPopupContainer,
  loadData,
  notFoundContent,
  options,
  placeholder,
  popupClassName,
  popupPlacement,
  popupStyle,
  popupVisible,
  showSearch,
  size,
  suffixIcon,
  value
});
