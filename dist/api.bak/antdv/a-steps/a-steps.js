// src/api/antdv/a-steps/a-steps.json
var description = {
  description: "description of the step, optional property",
  optionType: "string|slot",
  defaultValue: "-"
};
var icon = {
  description: "icon of the step, optional property",
  optionType: "string|slot",
  defaultValue: "-"
};
var status = {
  description: "to specify the status. It will be automatically set by current of Steps if not configured. Optional values are: wait process finish error",
  optionType: "string",
  defaultValue: "wait"
};
var title = {
  description: "title of the step",
  optionType: "string|slot",
  defaultValue: "-"
};
var a_steps_default = {
  description,
  icon,
  status,
  title
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  description,
  icon,
  status,
  title
});
