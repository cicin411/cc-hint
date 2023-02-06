// src/api/antdv/a-alert/a-alert.json
var afterClose = {
  description: "Called when close animation is finished",
  optionType: "() => void",
  defaultValue: "-"
};
var banner = {
  description: "Whether to show as banner",
  optionType: "boolean",
  defaultValue: "false"
};
var closable = {
  description: "Whether Alert can be closed",
  optionType: "boolean",
  defaultValue: "-"
};
var closeText = {
  description: "Close text to show",
  optionType: "string|slot",
  defaultValue: "-"
};
var description = {
  description: "Additional content of Alert",
  optionType: "string|slot",
  defaultValue: "-"
};
var icon = {
  description: "Custom icon, effective when showIcon is true",
  optionType: "vnode | slot",
  defaultValue: "-"
};
var message = {
  description: "Content of Alert",
  optionType: "string|slot",
  defaultValue: "-"
};
var showIcon = {
  description: "Whether to show icon",
  optionType: "boolean",
  defaultValue: "false, in banner mode default is true"
};
var type = {
  options: ["success", "info", "warning", "error"],
  description: "Type of Alert styles, options: success, info, warning, error",
  optionType: "string",
  defaultValue: "info, in banner mode default is warning"
};
var a_alert_default = {
  afterClose,
  banner,
  closable,
  closeText,
  description,
  icon,
  message,
  showIcon,
  type
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  afterClose,
  banner,
  closable,
  closeText,
  description,
  icon,
  message,
  showIcon,
  type
});
