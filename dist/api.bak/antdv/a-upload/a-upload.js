// src/api/antdv/a-upload/a-upload.json
var accept = {
  description: "File types that can be accepted. See input accept Attribute",
  optionType: "string",
  defaultValue: "-"
};
var action = {
  description: "Uploading URL",
  optionType: "string|(file) => Promise",
  defaultValue: "-"
};
var directory = {
  description: "support upload whole directory (caniuse)",
  optionType: "boolean",
  defaultValue: "false"
};
var beforeUpload = {
  description: "Hook function which will be executed before uploading. Uploading will be stopped with false or a rejected Promise returned. Warning\uFF1Athis function is not supported in IE9\u3002",
  optionType: "(file, fileList) => boolean | Promise",
  defaultValue: "-"
};
var customRequest = {
  description: "override for the default xhr behavior allowing for additional customization and ability to implement your own XMLHttpRequest",
  optionType: "Function",
  defaultValue: "-"
};
var data = {
  description: "Uploading params or function which can return uploading params.",
  optionType: "object|function(file)",
  defaultValue: "-"
};
var defaultFileList = {
  description: "Default list of files that have been uploaded.",
  optionType: "object[]",
  defaultValue: "-"
};
var disabled = {
  description: "disable upload button",
  optionType: "boolean",
  defaultValue: "false"
};
var fileList = {
  description: "List of files that have been uploaded (controlled). Here is a common issue #2423 when using it",
  optionType: "object[]",
  defaultValue: "-"
};
var headers = {
  description: "Set request headers, valid above IE10.",
  optionType: "object",
  defaultValue: "-"
};
var listType = {
  description: "Built-in stylesheets, support for three types: text, picture or picture-card",
  optionType: "string",
  defaultValue: "'text'"
};
var multiple = {
  description: "Whether to support selected multiple file. IE10+ supported. You can select multiple files with CTRL holding down while multiple is set to be true",
  optionType: "boolean",
  defaultValue: "false"
};
var name = {
  description: "The name of uploading file",
  optionType: "string",
  defaultValue: "'file'"
};
var showUploadList = {
  description: "Whether to show default upload list, could be an object to specify showPreviewIcon and showRemoveIcon individually",
  optionType: "Boolean or { showPreviewIcon?: boolean, showRemoveIcon?: boolean }",
  defaultValue: "true"
};
var supportServerRender = {
  description: "Need to be turned on while the server side is rendering.",
  optionType: "boolean",
  defaultValue: "false"
};
var withCredentials = {
  description: "ajax upload with cookie sent",
  optionType: "boolean",
  defaultValue: "false"
};
var openFileDialogOnClick = {
  description: "click open file dialog",
  optionType: "boolean",
  defaultValue: "true"
};
var remove = {
  description: "A callback function, will be executed when removing file button is clicked, remove event will be prevented when return value is false or a Promise which resolve(false) or reject.",
  optionType: "Function(file): boolean | Promise",
  defaultValue: "-"
};
var a_upload_default = {
  accept,
  action,
  directory,
  beforeUpload,
  customRequest,
  data,
  defaultFileList,
  disabled,
  fileList,
  headers,
  listType,
  multiple,
  name,
  showUploadList,
  supportServerRender,
  withCredentials,
  openFileDialogOnClick,
  remove
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  accept,
  action,
  beforeUpload,
  customRequest,
  data,
  defaultFileList,
  directory,
  disabled,
  fileList,
  headers,
  listType,
  multiple,
  name,
  openFileDialogOnClick,
  remove,
  showUploadList,
  supportServerRender,
  withCredentials
});
