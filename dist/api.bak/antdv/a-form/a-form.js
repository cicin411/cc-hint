// src/api/antdv/a-form/a-form.json
var form = {
  description: "Decorated by Form.create() will be automatically set this.form property, so just pass to form. If you use the template syntax, you can use this.$form.createForm(this, options)",
  optionType: "object",
  defaultValue: "n/a"
};
var hideRequiredMark = {
  description: "Hide required mark of all form items",
  optionType: "Boolean",
  defaultValue: "false"
};
var layout = {
  options: ["horizontal", "vertical", "inline"],
  description: "Define form layout",
  optionType: "'horizontal'|'vertical'|'inline'",
  defaultValue: "'horizontal'"
};
var autoFormCreate_deprecated_ = {
  description: "Automate Form.create, Recommended for use under the template component, and cannot be used with Form.create(). You should use $form.createForm to instead it after 1.1.9.",
  optionType: "Function(form)",
  defaultValue: ""
};
var options_deprecated_ = {
  description: "The options corresponding to Form.create(options). You should use $form.createForm to instead it after 1.1.9.",
  optionType: "Object",
  defaultValue: "{}"
};
var a_form_default = {
  form,
  hideRequiredMark,
  layout,
  "autoFormCreate(deprecated)": autoFormCreate_deprecated_,
  "options(deprecated)": options_deprecated_
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  "autoFormCreate(deprecated)",
  form,
  hideRequiredMark,
  layout,
  "options(deprecated)"
});
