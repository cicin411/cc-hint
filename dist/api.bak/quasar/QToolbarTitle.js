// src/api/quasar/QToolbarTitle.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/toolbar"
};
var props = {
  shrink: {
    type: "Boolean",
    desc: "By default, QToolbarTitle is set to grow to the available space. However, you can reverse that with this prop",
    category: "behavior"
  }
};
var slots = {
  default: {
    desc: "Default slot in the devland unslotted content of the component"
  }
};
var QToolbarTitle_default = {
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
