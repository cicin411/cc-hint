// src/api/antdv/a-popconfirm/a-popconfirm.json
var cancelText = {
  description: "text of the Cancel button",
  optionType: "string|slot",
  defaultValue: "Cancel"
};
var okText = {
  description: "text of the Confirm button",
  optionType: "string|slot",
  defaultValue: "Confirm"
};
var okType = {
  description: "Button type of the Confirm button",
  optionType: "string",
  defaultValue: "primary"
};
var title = {
  description: "title of the confirmation box",
  optionType: "string|slot",
  defaultValue: "-"
};
var icon = {
  description: "customize icon of confirmation",
  optionType: "vNode|slot",
  defaultValue: '<Icon type="exclamation-circle" />'
};
var a_popconfirm_default = {
  cancelText,
  okText,
  okType,
  title,
  icon
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  cancelText,
  icon,
  okText,
  okType,
  title
});
