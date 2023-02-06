// src/api/antdv/a-time-picker/a-time-picker.json
var addon = {
  description: "some addon to timepicker panel bottom",
  optionType: "slot | slot-scope",
  defaultValue: "-"
};
var allowEmpty = {
  description: "allow clearing text",
  optionType: "boolean",
  defaultValue: "true"
};
var autoFocus = {
  description: "get focus when component mounted",
  optionType: "boolean",
  defaultValue: "false"
};
var clearText = {
  description: "clear tooltip of icon",
  optionType: "string",
  defaultValue: "clear"
};
var defaultOpenValue = {
  description: "default open panel value, used to set utcOffset,locale if value/defaultValue absent",
  optionType: "moment",
  defaultValue: "moment()"
};
var defaultValue = {
  description: "to set default time",
  optionType: "moment",
  defaultValue: "-"
};
var disabled = {
  description: "determine whether the TimePicker is disabled",
  optionType: "boolean",
  defaultValue: "false"
};
var disabledHours = {
  description: "to specify the hours that cannot be selected",
  optionType: "function()",
  defaultValue: "-"
};
var disabledMinutes = {
  description: "to specify the minutes that cannot be selected",
  optionType: "function(selectedHour)",
  defaultValue: "-"
};
var disabledSeconds = {
  description: "to specify the seconds that cannot be selected",
  optionType: "function(selectedHour, selectedMinute)",
  defaultValue: "-"
};
var format = {
  description: "to set the time format",
  optionType: "string",
  defaultValue: '"HH:mm:ss"'
};
var getPopupContainer = {
  description: "to set the container of the floating layer, while the default is to create a div element in body",
  optionType: "function(trigger)",
  defaultValue: "-"
};
var hideDisabledOptions = {
  description: "hide the options that can not be selected",
  optionType: "boolean",
  defaultValue: "false"
};
var hourStep = {
  description: "interval between hours in picker",
  optionType: "number",
  defaultValue: "1"
};
var inputReadOnly = {
  description: "Set the readonly attribute of the input tag (avoids virtual keyboard on touch devices)",
  optionType: "boolean",
  defaultValue: "false"
};
var minuteStep = {
  description: "interval between minutes in picker",
  optionType: "number",
  defaultValue: "1"
};
var open = {
  description: "whether to popup panel",
  optionType: "boolean",
  defaultValue: "false"
};
var placeholder = {
  description: "display when there's no value",
  optionType: "string",
  defaultValue: '"Select a time"'
};
var popupClassName = {
  description: "className of panel",
  optionType: "string",
  defaultValue: "''"
};
var secondStep = {
  description: "interval between seconds in picker",
  optionType: "number",
  defaultValue: "1"
};
var suffixIcon = {
  description: "The custom suffix icon",
  optionType: "string | VNode | slot",
  defaultValue: "-"
};
var use12Hours = {
  description: "display as 12 hours format, with default format h:mm:ss a",
  optionType: "boolean",
  defaultValue: "false"
};
var value = {
  description: "to set time",
  optionType: "moment",
  defaultValue: "-"
};
var a_time_picker_default = {
  addon,
  allowEmpty,
  autoFocus,
  clearText,
  defaultOpenValue,
  defaultValue,
  disabled,
  disabledHours,
  disabledMinutes,
  disabledSeconds,
  format,
  getPopupContainer,
  hideDisabledOptions,
  hourStep,
  inputReadOnly,
  minuteStep,
  open,
  placeholder,
  popupClassName,
  secondStep,
  suffixIcon,
  use12Hours,
  value
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  addon,
  allowEmpty,
  autoFocus,
  clearText,
  defaultOpenValue,
  defaultValue,
  disabled,
  disabledHours,
  disabledMinutes,
  disabledSeconds,
  format,
  getPopupContainer,
  hideDisabledOptions,
  hourStep,
  inputReadOnly,
  minuteStep,
  open,
  placeholder,
  popupClassName,
  secondStep,
  suffixIcon,
  use12Hours,
  value
});
