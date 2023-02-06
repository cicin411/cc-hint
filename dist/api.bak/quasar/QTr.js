// src/api/quasar/QTr.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/table"
};
var props = {
  props: {
    type: "Object",
    desc: "QTable's row scoped slot property",
    examples: [
      ':props="props"'
    ],
    category: "general"
  },
  "no-hover": {
    type: "Boolean",
    desc: "Disable hover effect",
    category: "style"
  }
};
var slots = {
  default: {
    desc: "Default slot in the devland unslotted content of the component"
  }
};
var QTr_default = {
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
