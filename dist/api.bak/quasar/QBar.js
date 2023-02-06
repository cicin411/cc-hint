// src/api/quasar/QBar.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/bar"
};
var props = {
  dense: {
    type: "Boolean",
    desc: "Dense mode; occupies less space",
    category: "style"
  },
  dark: {
    type: "Boolean",
    desc: "The component background color lights up the parent's background (as opposed to default behavior which is to darken it); Works unless you specify a CSS background color for it",
    category: "style"
  }
};
var slots = {
  default: {
    desc: "Default slot in the devland unslotted content of the component"
  }
};
var QBar_default = {
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
