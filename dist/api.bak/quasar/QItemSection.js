// src/api/quasar/QItemSection.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/list-and-list-items"
};
var props = {
  avatar: {
    type: "Boolean",
    desc: "Render an avatar item side (does not needs 'side' prop to be set)",
    category: "content"
  },
  thumbnail: {
    type: "Boolean",
    desc: "Render a thumbnail item side (does not needs 'side' prop to be set)",
    category: "content"
  },
  side: {
    type: "Boolean",
    desc: "Renders as a side of the item",
    category: "content"
  },
  top: {
    type: "Boolean",
    desc: "Align content to top (useful for multi-line items)",
    category: "content"
  },
  "no-wrap": {
    type: "Boolean",
    desc: "Do not wrap text (useful for item's main content)",
    category: "content"
  }
};
var slots = {
  default: {
    desc: "Section's actual content"
  }
};
var QItemSection_default = {
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
