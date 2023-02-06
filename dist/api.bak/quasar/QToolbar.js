// src/api/quasar/QToolbar.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/toolbar"
};
var props = {
  inset: {
    type: "Boolean",
    desc: "Apply an inset to content (useful for subsequent toolbars)",
    category: "content"
  }
};
var slots = {
  default: {
    desc: "Default slot in the devland unslotted content of the component"
  }
};
var QToolbar_default = {
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
