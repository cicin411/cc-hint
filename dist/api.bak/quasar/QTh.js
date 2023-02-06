// src/api/quasar/QTh.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/table"
};
var props = {
  props: {
    type: "Object",
    desc: "QTable's header column scoped slot property",
    examples: [
      ':props="props"'
    ],
    category: "general"
  },
  "auto-width": {
    type: "Boolean",
    desc: "Tries to shrink header column width size; Useful for columns with a checkbox/radio/toggle",
    category: "content"
  }
};
var slots = {
  default: {
    desc: "Default slot in the devland unslotted content of the component"
  }
};
var QTh_default = {
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
