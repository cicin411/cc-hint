// src/api/antdv/a-date-picker/a-week.json
var allowClear = {
  description: "Whether to show clear button",
  optionType: "boolean",
  defaultValue: "true"
};
var autoFocus = {
  description: "get focus when component mounted",
  optionType: "boolean",
  defaultValue: "false"
};
var dateRender = {
  description: "custom rendering function for date cells by setting a scoped slot",
  optionType: 'slot="dateRender" slot-scope="current, today"',
  defaultValue: "-"
};
var disabled = {
  description: "determine whether the DatePicker is disabled",
  optionType: "boolean",
  defaultValue: "false"
};
var disabledDate = {
  description: "specify the date that cannot be selected",
  optionType: "(currentDate: moment) => boolean",
  defaultValue: "-"
};
var getCalendarContainer = {
  description: "to set the container of the floating layer, while the default is to create a div element in body",
  optionType: "function(trigger)",
  defaultValue: "-"
};
var locale = {
  description: "localization configuration",
  optionType: "object",
  defaultValue: "default"
};
var open = {
  description: "open state of picker",
  optionType: "boolean",
  defaultValue: "-"
};
var placeholder = {
  description: "placeholder of date input",
  optionType: "string|RangePicker[]",
  defaultValue: "-"
};
var popupStyle = {
  description: "to customize the style of the popup calendar",
  optionType: "object",
  defaultValue: "{}"
};
var dropdownClassName = {
  description: "to customize the className of the popup calendar",
  optionType: "string",
  defaultValue: "-"
};
var size = {
  description: "determine the size of the input box, the height of large and small, are 40px and 24px respectively, while default size is 32px",
  optionType: "string",
  defaultValue: "-"
};
var suffixIcon = {
  description: "The custom suffix icon",
  optionType: "VNode | slot",
  defaultValue: "-"
};
var defaultValue = {
  description: "to set default date",
  optionType: "moment",
  defaultValue: "-"
};
var defaultPickerValue = {
  description: "to set default picker date",
  optionType: "moment",
  defaultValue: "-"
};
var format = {
  description: "to set the date format, refer to moment.js",
  optionType: "string",
  defaultValue: '"YYYY-wo"'
};
var value = {
  description: "to set date",
  optionType: "moment",
  defaultValue: "-"
};
var a_week_default = {
  allowClear,
  autoFocus,
  dateRender,
  disabled,
  disabledDate,
  getCalendarContainer,
  locale,
  open,
  placeholder,
  popupStyle,
  dropdownClassName,
  size,
  suffixIcon,
  defaultValue,
  defaultPickerValue,
  format,
  value
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  allowClear,
  autoFocus,
  dateRender,
  defaultPickerValue,
  defaultValue,
  disabled,
  disabledDate,
  dropdownClassName,
  format,
  getCalendarContainer,
  locale,
  open,
  placeholder,
  popupStyle,
  size,
  suffixIcon,
  value
});
