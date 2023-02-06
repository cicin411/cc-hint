// src/api/quasar/QCardActions.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/card"
};
var props = {
  align: {
    type: "String",
    desc: "Specify how to align the actions",
    default: "left (for horizontal mode) / stretch (for vertical mode)",
    values: [
      "left",
      "center",
      "right",
      "between",
      "around",
      "evenly",
      "stretch"
    ],
    category: "content",
    required: false
  },
  vertical: {
    type: "Boolean",
    desc: "Display actions one below the other",
    category: "content"
  }
};
var slots = {
  default: {
    desc: "Suggestions: QBtn"
  }
};
var QCardActions_default = {
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
