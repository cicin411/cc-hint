// src/api/quasar/QMarkupTable.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/markup-table"
};
var props = {
  dense: {
    type: "Boolean",
    desc: "Dense mode; occupies less space",
    category: "style"
  },
  dark: {
    type: "Boolean",
    desc: "Notify the component that the background is a dark color",
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
  square: {
    type: "Boolean",
    desc: "Removes border-radius so borders are squared",
    category: "style"
  },
  separator: {
    type: "String",
    desc: "Use a separator/border between rows, columns or all cells",
    default: "horizontal",
    values: [
      "horizontal",
      "vertical",
      "cell",
      "none"
    ],
    examples: [
      "cell"
    ],
    category: "content",
    required: false
  },
  "wrap-cells": {
    type: "Boolean",
    desc: "Wrap text within table cells",
    category: "content"
  }
};
var slots = {
  default: {
    desc: "Default slot in the devland unslotted content of the component"
  }
};
var QMarkupTable_default = {
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
