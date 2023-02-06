// src/api/quasar/QTabPanel.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/tab-panels"
};
var props = {
  name: {
    type: "Any",
    desc: "Panel name",
    required: true,
    examples: [
      "accounts",
      "firstPanel",
      ':name="1"'
    ],
    category: "general"
  },
  disable: {
    type: "Boolean",
    desc: "Put component in disabled mode",
    category: "state"
  },
  dark: {
    type: "Boolean",
    desc: "Notify the component that the background is a dark color",
    category: "style"
  }
};
var slots = {
  default: {
    desc: "Default slot in the devland unslotted content of the component"
  }
};
var QTabPanel_default = {
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
