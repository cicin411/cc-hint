// src/api/quasar/QList.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/list-and-list-items"
};
var props = {
  bordered: {
    type: "Boolean",
    desc: "Applies a default border to the component",
    category: "style"
  },
  dense: {
    type: "Boolean",
    desc: "Dense mode; occupies less space",
    category: "style"
  },
  separator: {
    type: "Boolean",
    desc: "Applies a separator between contained items",
    category: "content"
  },
  dark: {
    type: "Boolean",
    desc: "Notify the component that the background is a dark color",
    category: "style"
  },
  padding: {
    type: "Boolean",
    desc: "Applies a material design-like padding on top and bottom",
    category: "content"
  },
  tag: {
    type: "String",
    desc: "HTML tag to use",
    examples: [
      "div",
      "span",
      "div",
      "ul",
      "ol"
    ],
    category: "content",
    default: "div",
    addedIn: "v2.10.1",
    required: false
  }
};
var slots = {
  default: {
    desc: "This is where the content goes; Suggestion: QItem, QExpansionItem, ..."
  }
};
var QList_default = {
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
