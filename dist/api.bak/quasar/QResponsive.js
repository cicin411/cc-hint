// src/api/quasar/QResponsive.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/responsive"
};
var props = {
  ratio: {
    type: [
      "String",
      "Number"
    ],
    desc: "Aspect ratio for the content; If value is a String, then avoid using a computational statement (like '16/9') and instead specify the String value of the result directly (eg. '1.7777')",
    examples: [
      ':ratio="4/3"',
      ':ratio="16/9"',
      'ratio="1"'
    ],
    category: "style"
  }
};
var slots = {
  default: {
    desc: "Default slot in the devland unslotted content of the component"
  }
};
var QResponsive_default = {
  type,
  meta,
  props,
  slots
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  meta,
  props,
  slots,
  type
});
