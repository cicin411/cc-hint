// src/api/antdv/a-spin/a-spin.json
var delay = {
  description: "specifies a delay in milliseconds for loading state (prevent flush)",
  optionType: "number (milliseconds)",
  defaultValue: "-"
};
var indicator = {
  description: "vue node of the spinning indicator",
  optionType: "vNode |slot",
  defaultValue: "-"
};
var size = {
  description: "size of Spin, options: small, default and large",
  optionType: "string",
  defaultValue: "default"
};
var spinning = {
  description: "whether Spin is spinning",
  optionType: "boolean",
  defaultValue: "true"
};
var tip = {
  description: "customize description content when Spin has children",
  optionType: "string",
  defaultValue: "-"
};
var wrapperClassName = {
  description: "className of wrapper when Spin has children",
  optionType: "string",
  defaultValue: "-"
};
var a_spin_default = {
  delay,
  indicator,
  size,
  spinning,
  tip,
  wrapperClassName
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  delay,
  indicator,
  size,
  spinning,
  tip,
  wrapperClassName
});
