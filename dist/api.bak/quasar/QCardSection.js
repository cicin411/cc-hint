// src/api/quasar/QCardSection.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/card"
};
var props = {
  horizontal: {
    type: "Boolean",
    desc: "Display a horizontal section (will have no padding and can contain other QCardSection)",
    category: "content"
  },
  tag: {
    type: "String",
    desc: "HTML tag to use",
    examples: [
      "div",
      "span",
      "div",
      "form"
    ],
    category: "content",
    default: "div",
    required: false
  }
};
var slots = {
  default: {
    desc: "Default slot in the devland unslotted content of the component"
  }
};
var QCardSection_default = {
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
