// src/api/antdv/a-progress/a-progress.json
var format = {
  description: "template function of the content",
  optionType: "function(percent, successPercent)",
  defaultValue: "percent => percent + '%'"
};
var gapDegree__type_circle_ = {
  description: "the gap degree of half circle, 0 ~ 360",
  optionType: "number",
  defaultValue: "0"
};
var gapPosition__type_circle_ = {
  description: "the gap position, options: top bottom left right",
  optionType: "string",
  defaultValue: "top"
};
var percent = {
  description: "to set the completion percentage",
  optionType: "number",
  defaultValue: "0"
};
var showInfo = {
  description: "whether to display the progress value and the status icon",
  optionType: "boolean",
  defaultValue: "true"
};
var status = {
  description: "to set the status of the Progress, options: normal success exception active",
  optionType: "string",
  defaultValue: "normal"
};
var strokeWidth__type_line_ = {
  description: "to set the width of the progress bar, unit: px",
  optionType: "number",
  defaultValue: "10"
};
var strokeWidth__type_circle_ = {
  description: "to set the width of the circular progress bar, unit: percentage of the canvas width",
  optionType: "number",
  defaultValue: "6"
};
var strokeLinecap = {
  description: "to set the style of the progress linecap",
  optionType: "Enum{ 'round', 'square' }",
  defaultValue: "round"
};
var strokeColor = {
  description: "color of progress bar",
  optionType: "string",
  defaultValue: "-"
};
var successPercent = {
  description: 'segmented success percent, works when type="line"',
  optionType: "number",
  defaultValue: "0"
};
var type = {
  description: "to set the type, options: line circle dashboard",
  optionType: "string",
  defaultValue: "line"
};
var width__type_circle_ = {
  description: "to set the canvas width of the circular progress bar, unit: px",
  optionType: "number",
  defaultValue: "120"
};
var a_progress_default = {
  format,
  "gapDegree (type=circle)": gapDegree__type_circle_,
  "gapPosition (type=circle)": gapPosition__type_circle_,
  percent,
  showInfo,
  status,
  "strokeWidth (type=line)": strokeWidth__type_line_,
  "strokeWidth (type=circle)": strokeWidth__type_circle_,
  strokeLinecap,
  strokeColor,
  successPercent,
  type,
  "width (type=circle)": width__type_circle_
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  format,
  "gapDegree (type=circle)",
  "gapPosition (type=circle)",
  percent,
  showInfo,
  status,
  strokeColor,
  strokeLinecap,
  "strokeWidth (type=circle)",
  "strokeWidth (type=line)",
  successPercent,
  type,
  "width (type=circle)"
});
