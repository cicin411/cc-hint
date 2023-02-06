// src/api/quasar/QCard.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/card"
};
var props = {
  dark: {
    type: "Boolean",
    desc: "Notify the component that the background is a dark color",
    category: "style"
  },
  square: {
    type: "Boolean",
    desc: "Removes border-radius so borders are squared",
    category: "style"
  },
  flat: {
    type: "Boolean",
    desc: "Applies a 'flat' design (no default shadow)",
    category: "style"
  },
  bordered: {
    type: "Boolean",
    desc: "Applies a default border to the component",
    category: "style"
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
var QCard_default = {
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
