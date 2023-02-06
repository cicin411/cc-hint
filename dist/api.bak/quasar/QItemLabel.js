// src/api/quasar/QItemLabel.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/list-and-list-items"
};
var props = {
  overline: {
    type: "Boolean",
    desc: "Renders an overline label",
    category: "content"
  },
  caption: {
    type: "Boolean",
    desc: "Renders a caption label",
    category: "content"
  },
  header: {
    type: "Boolean",
    desc: "Renders a header label",
    category: "content"
  },
  lines: {
    type: [
      "Number",
      "String"
    ],
    desc: "Apply ellipsis when there's not enough space to render on the specified number of lines;",
    category: "content|behavior"
  }
};
var slots = {
  default: {
    desc: "The content of the label; Suggestion: text"
  }
};
var QItemLabel_default = {
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
