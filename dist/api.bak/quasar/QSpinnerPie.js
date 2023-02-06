// src/api/quasar/QSpinnerPie.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/spinners"
};
var props = {
  size: {
    type: "String",
    desc: "Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)",
    examples: [
      "16px",
      "2rem",
      "xs",
      "md"
    ],
    category: "style"
  },
  color: {
    type: "String",
    desc: "Color name for component from the Quasar Color Palette",
    examples: [
      "primary",
      "teal-10"
    ],
    category: "style"
  }
};
var QSpinnerPie_default = {
  type,
  meta,
  props
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  meta,
  props,
  type
});
