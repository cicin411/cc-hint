// src/api/quasar/QSeparator.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/separator"
};
var props = {
  dark: {
    type: "Boolean",
    desc: "Notify the component that the background is a dark color",
    category: "style"
  },
  spaced: {
    type: [
      "Boolean",
      "String"
    ],
    desc: "If set to true, the corresponding direction margins will be set to 8px; It can also be set to a size in CSS units, including unit name, or one of the xs|sm|md|lg|xl predefined sizes",
    default: "md",
    examples: [
      "12px",
      "sm",
      "md"
    ],
    category: "content",
    required: false
  },
  inset: {
    type: [
      "Boolean",
      "String"
    ],
    desc: "If set to Boolean true, the left and right margins will be set to 16px. If set to 'item' then it will match a QItem's design. If set to 'item-thumbnail' then it will match the design of a QItem with a thumbnail on the left side",
    examples: [
      "item",
      "item-thumbnail"
    ],
    category: "content"
  },
  vertical: {
    type: "Boolean",
    desc: "If set to true, the separator will be vertical.",
    category: "content"
  },
  size: {
    type: "String",
    desc: "Size in CSS units, including unit name",
    examples: [
      "16px",
      "2rem"
    ],
    category: "style"
  },
  color: {
    type: "String",
    desc: "Color name for component from the Quasar Color Palette",
    examples: [
      "primary",
      "teal-10"
    ],
    category: "style"
  }
};
var QSeparator_default = {
  type,
  meta,
  props
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  meta,
  props,
  type
});
