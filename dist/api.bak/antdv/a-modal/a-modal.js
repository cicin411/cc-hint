// src/api/antdv/a-modal/a-modal.json
var afterClose = {
  description: "Specify a function that will be called when modal is closed completely.",
  optionType: "function",
  defaultValue: "-"
};
var bodyStyle = {
  description: "Body style for modal body element. Such as height, padding etc.",
  optionType: "object",
  defaultValue: "{}"
};
var cancelText = {
  description: "Text of the Cancel button",
  optionType: "string|slot",
  defaultValue: "Cancel"
};
var centered = {
  description: "Centered Modal",
  optionType: "Boolean",
  defaultValue: "false"
};
var closable = {
  description: "Whether a close (x) button is visible on top right of the modal dialog or not",
  optionType: "boolean",
  defaultValue: "true"
};
var confirmLoading = {
  description: "Whether to apply loading visual effect for OK button or not",
  optionType: "boolean",
  defaultValue: "false"
};
var destroyOnClose = {
  description: "Whether to unmount child components on onClose",
  optionType: "boolean",
  defaultValue: "false"
};
var footer = {
  description: `Footer content, set as :footer="null" when you don't need default buttons`,
  optionType: "string|slot",
  defaultValue: "OK and Cancel buttons"
};
var getContainer = {
  description: "Return the mount node for Modal",
  optionType: "(instance): HTMLElement",
  defaultValue: "() => document.body"
};
var mask = {
  description: "Whether show mask or not.",
  optionType: "Boolean",
  defaultValue: "true"
};
var maskClosable = {
  description: "Whether to close the modal dialog when the mask (area outside the modal) is clicked",
  optionType: "boolean",
  defaultValue: "true"
};
var maskStyle = {
  description: "Style for modal's mask element.",
  optionType: "object",
  defaultValue: "{}"
};
var okText = {
  description: "Text of the OK button",
  optionType: "string|slot",
  defaultValue: "OK"
};
var okType = {
  description: "Button type of the OK button",
  optionType: "string",
  defaultValue: "primary"
};
var okButtonProps = {
  description: "The ok button props, follow jsx rules",
  optionType: "{props: ButtonProps, on: {}}",
  defaultValue: "-"
};
var cancelButtonProps = {
  description: "The cancel button props, follow jsx rules",
  optionType: "{props: ButtonProps, on: {}}",
  defaultValue: "-"
};
var title = {
  description: "The modal dialog's title",
  optionType: "string|slot",
  defaultValue: "-"
};
var visible = {
  description: "Whether the modal dialog is visible or not",
  optionType: "boolean",
  defaultValue: "false"
};
var width = {
  description: "Width of the modal dialog",
  optionType: "string|number",
  defaultValue: "520"
};
var wrapClassName = {
  description: "The class name of the container of the modal dialog",
  optionType: "string",
  defaultValue: "-"
};
var zIndex = {
  description: "The z-index of the Modal",
  optionType: "Number",
  defaultValue: "1000"
};
var a_modal_default = {
  afterClose,
  bodyStyle,
  cancelText,
  centered,
  closable,
  confirmLoading,
  destroyOnClose,
  footer,
  getContainer,
  mask,
  maskClosable,
  maskStyle,
  okText,
  okType,
  okButtonProps,
  cancelButtonProps,
  title,
  visible,
  width,
  wrapClassName,
  zIndex
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  afterClose,
  bodyStyle,
  cancelButtonProps,
  cancelText,
  centered,
  closable,
  confirmLoading,
  destroyOnClose,
  footer,
  getContainer,
  mask,
  maskClosable,
  maskStyle,
  okButtonProps,
  okText,
  okType,
  title,
  visible,
  width,
  wrapClassName,
  zIndex
});
