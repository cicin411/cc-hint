// src/api/antdv/a-steps/a-step.json
var current = {
  description: "to set the current step, counting from 0. You can overwrite this state by using status of Step",
  optionType: "number",
  defaultValue: "0"
};
var direction = {
  description: "to specify the direction of the step bar, horizontal and vertical are currently supported",
  optionType: "string",
  defaultValue: "horizontal"
};
var labelPlacement = {
  description: "support vertial title and description",
  optionType: "string",
  defaultValue: "horizontal"
};
var progressDot = {
  description: "Steps with progress dot style, customize the progress dot by setting a scoped slot. labelPlacement will be vertical",
  optionType: 'Boolean or slot="progressDot" slot-scope="{index, status, title, description, prefixCls})"',
  defaultValue: "false"
};
var size = {
  description: "to specify the size of the step bar, default and small are currently supported",
  optionType: "string",
  defaultValue: "default"
};
var status = {
  description: "to specify the status of current step, can be set to one of the following values: wait process finish error",
  optionType: "string",
  defaultValue: "process"
};
var initial = {
  description: "set the initial step, counting from 0",
  optionType: "number",
  defaultValue: "0"
};
var a_step_default = {
  current,
  direction,
  labelPlacement,
  progressDot,
  size,
  status,
  initial
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  current,
  direction,
  initial,
  labelPlacement,
  progressDot,
  size,
  status
});
