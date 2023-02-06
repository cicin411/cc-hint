// src/api/antdv/a-auto-complete/a-auto-complete.json
var allowClear = {
  description: "Show clear button, effective in multiple mode only.",
  optionType: "boolean",
  defaultValue: "false"
};
var autoFocus = {
  description: "get focus when component mounted",
  optionType: "boolean",
  defaultValue: "false"
};
var backfill = {
  description: "backfill selected item the input when using keyboard",
  optionType: "boolean",
  defaultValue: "false"
};
var dataSource = {
  description: "Data source for autocomplete",
  optionType: "slot | DataSourceItemType[]",
  defaultValue: ""
};
var defaultActiveFirstOption = {
  description: "Whether active first option by default",
  optionType: "boolean",
  defaultValue: "true"
};
var defaultValue = {
  description: "Initial selected option.",
  optionType: "string|string[]| -",
  defaultValue: ""
};
var disabled = {
  description: "Whether disabled select",
  optionType: "boolean",
  defaultValue: "false"
};
var filterOption = {
  description: "If true, filter options by input, if function, filter options against it. The function will receive two arguments, inputValue and option, if the function returns true, the option will be included in the filtered set; Otherwise, it will be excluded.",
  optionType: "boolean or function(inputValue, option)",
  defaultValue: "true"
};
var optionLabelProp = {
  description: "Which prop value of option will render as content of select.",
  optionType: "string",
  defaultValue: "children"
};
var placeholder = {
  description: "placeholder of input",
  optionType: "string",
  defaultValue: "-"
};
var value = {
  description: "selected option",
  optionType: "string|string[]|{ key: string, label: string|vNodes }|Array<{ key: string, label: string|vNodes }>",
  defaultValue: "-"
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
var a_auto_complete_default = {
  allowClear,
  autoFocus,
  backfill,
  dataSource,
  defaultActiveFirstOption,
  defaultValue,
  disabled,
  filterOption,
  optionLabelProp,
  placeholder,
  value,
  defaultOpen,
  open
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  allowClear,
  autoFocus,
  backfill,
  dataSource,
  defaultActiveFirstOption,
  defaultOpen,
  defaultValue,
  disabled,
  filterOption,
  open,
  optionLabelProp,
  placeholder,
  value
});
