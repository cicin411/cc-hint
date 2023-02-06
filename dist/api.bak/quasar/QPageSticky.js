// src/api/quasar/QPageSticky.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/layout/page-sticky"
};
var props = {
  position: {
    type: "String",
    desc: "Page side/corner to stick to",
    default: "bottom-right",
    values: [
      "top-right",
      "top-left",
      "bottom-right",
      "bottom-left",
      "top",
      "right",
      "bottom",
      "left"
    ],
    category: "position",
    required: false
  },
  offset: {
    type: "Array",
    desc: "An array of two numbers to offset the component horizontally and vertically in pixels",
    examples: [
      "[8, 8]",
      "[5, 10]"
    ],
    category: "position"
  },
  expand: {
    type: "Boolean",
    desc: "By default the component shrinks to content's size; By using this prop you make the component fully expand horizontally or vertically, based on 'position' prop",
    category: "content"
  }
};
var slots = {
  default: {
    desc: "Default slot in the devland unslotted content of the component"
  }
};
var QPageSticky_default = {
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