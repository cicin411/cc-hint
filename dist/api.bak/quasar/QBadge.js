// src/api/quasar/QBadge.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/badge"
};
var props = {
  color: {
    type: "String",
    desc: "Color name for component from the Quasar Color Palette",
    examples: [
      "primary",
      "teal-10"
    ],
    category: "style"
  },
  "text-color": {
    type: "String",
    desc: "Overrides text color (if needed); Color name from the Quasar Color Palette",
    examples: [
      "primary",
      "teal-10"
    ],
    category: "style"
  },
  floating: {
    type: "Boolean",
    desc: "Tell QBadge if it should float to the top right side of the relative positioned parent element or not",
    category: "content"
  },
  transparent: {
    type: "Boolean",
    desc: "Applies a 0.8 opacity; Useful especially for floating QBadge",
    category: "style"
  },
  "multi-line": {
    type: "Boolean",
    desc: "Content can wrap to multiple lines",
    category: "content"
  },
  label: {
    type: [
      "String",
      "Number"
    ],
    desc: "Badge's content as string; overrides default slot if specified",
    examples: [
      "John Doe",
      22
    ],
    category: "content"
  },
  align: {
    type: "String",
    desc: "Sets vertical-align CSS prop",
    values: [
      "top",
      "middle",
      "bottom"
    ],
    category: "content"
  },
  outline: {
    type: "Boolean",
    desc: "Use 'outline' design (colored text and borders only)",
    category: "style"
  },
  rounded: {
    type: "Boolean",
    desc: "Makes a rounded shaped badge",
    category: "style"
  }
};
var slots = {
  default: {
    desc: "This is where QBadge content goes, if not using 'label' property"
  }
};
var QBadge_default = {
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
