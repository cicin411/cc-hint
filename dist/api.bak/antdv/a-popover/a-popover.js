// src/api/antdv/a-popover/a-popover.json
var content = {
  description: "Content of the card",
  optionType: "string|slot|vNode",
  defaultValue: "-"
};
var title = {
  description: "Title of the card",
  optionType: "string|slot|VNode",
  defaultValue: "-"
};
var arrowPointAtCenter = {
  description: "Whether the arrow is pointed at the center of target",
  optionType: "boolean",
  defaultValue: "false"
};
var autoAdjustOverflow = {
  description: "Whether to adjust popup placement automatically when popup is off screen",
  optionType: "boolean",
  defaultValue: "true"
};
var defaultVisible = {
  description: "Whether the floating tooltip card is visible by default",
  optionType: "boolean",
  defaultValue: "false"
};
var getPopupContainer = {
  description: "The DOM container of the tip, the default behavior is to create a div element in body.",
  optionType: "Function(triggerNode)",
  defaultValue: "() => document.body"
};
var mouseEnterDelay = {
  description: "Delay in seconds, before tooltip is shown on mouse enter",
  optionType: "number",
  defaultValue: "0"
};
var mouseLeaveDelay = {
  description: "Delay in seconds, before tooltip is hidden on mouse leave",
  optionType: "number",
  defaultValue: "0.1"
};
var overlayClassName = {
  description: "Class name of the tooltip card",
  optionType: "string",
  defaultValue: "-"
};
var overlayStyle = {
  description: "Style of the tooltip card",
  optionType: "object",
  defaultValue: "-"
};
var placement = {
  description: "The position of the tooltip relative to the target, which can be one of top left right bottom topLeft topRight bottomLeft bottomRight leftTop leftBottom rightTop rightBottom",
  optionType: "string",
  defaultValue: "top"
};
var trigger = {
  options: ["hover", "focus", "click", "contextmenu"],
  description: "Tooltip trigger mode",
  optionType: "hover | focus | click | contextmenu",
  defaultValue: "hover"
};
var visible = {
  description: "Whether the floating tooltip card is visible or not",
  optionType: "boolean",
  defaultValue: "false"
};
var align = {
  description: "this value will be merged into placement's config, please refer to the settings dom-align",
  optionType: "Object",
  defaultValue: "-"
};
var a_popover_default = {
  content,
  title,
  arrowPointAtCenter,
  autoAdjustOverflow,
  defaultVisible,
  getPopupContainer,
  mouseEnterDelay,
  mouseLeaveDelay,
  overlayClassName,
  overlayStyle,
  placement,
  trigger,
  visible,
  align
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  align,
  arrowPointAtCenter,
  autoAdjustOverflow,
  content,
  defaultVisible,
  getPopupContainer,
  mouseEnterDelay,
  mouseLeaveDelay,
  overlayClassName,
  overlayStyle,
  placement,
  title,
  trigger,
  visible
});
