// src/api/antdv/a-calendar/a-calendar.json
var dateCellRender = {
  description: "Customize the display of the date cell by setting a scoped slot, the returned content will be appended to the cell",
  optionType: "function(date: moment)",
  defaultValue: "-"
};
var dateFullCellRender = {
  description: "Customize the display of the date cell by setting a scoped slot, the returned content will override the cell",
  optionType: "function(date: moment)",
  defaultValue: "-"
};
var defaultValue = {
  description: "The date selected by default",
  optionType: "moment",
  defaultValue: "default date"
};
var disabledDate = {
  description: "Function that specifies the dates that cannot be selected",
  optionType: "(currentDate: moment) => boolean",
  defaultValue: "-"
};
var fullscreen = {
  description: "Whether to display in full-screen",
  optionType: "boolean",
  defaultValue: "true"
};
var locale = {
  description: "The calendar's locale",
  optionType: "object",
  defaultValue: "default"
};
var mode = {
  description: "The display mode of the calendar",
  optionType: "month | year",
  defaultValue: "month"
};
var monthCellRender = {
  description: "Customize the display of the month cell by setting a scoped slot, the returned content will be appended to the cell",
  optionType: "function(date: moment)",
  defaultValue: "-"
};
var monthFullCellRender = {
  description: "Customize the display of the month cell by setting a scoped slot, the returned content will override the cell",
  optionType: "function(date: moment)",
  defaultValue: "-"
};
var validRange = {
  description: "to set valid range",
  optionType: "[moment, moment]",
  defaultValue: "-"
};
var value = {
  description: "The current selected date",
  optionType: "moment",
  defaultValue: "current date"
};
var a_calendar_default = {
  dateCellRender,
  dateFullCellRender,
  defaultValue,
  disabledDate,
  fullscreen,
  locale,
  mode,
  monthCellRender,
  monthFullCellRender,
  validRange,
  value
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  dateCellRender,
  dateFullCellRender,
  defaultValue,
  disabledDate,
  fullscreen,
  locale,
  mode,
  monthCellRender,
  monthFullCellRender,
  validRange,
  value
});
