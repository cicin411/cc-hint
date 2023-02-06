// src/api/quasar/QBreadcrumbs.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/breadcrumbs"
};
var props = {
  separator: {
    type: "String",
    desc: "The string used to separate the breadcrumbs",
    default: "/",
    examples: [
      "-",
      "|",
      ">"
    ],
    category: "content",
    required: false
  },
  "active-color": {
    type: "String",
    desc: "The color of the active breadcrumb, which can be any color from the Quasar Color Palette",
    examples: [
      "primary",
      "teal-10"
    ],
    category: "style",
    default: "primary",
    required: false
  },
  gutter: {
    type: "String",
    desc: "The gutter value allows you control over the space between the breadcrumb elements.",
    default: "sm",
    values: [
      "none",
      "xs",
      "sm",
      "md",
      "lg",
      "xl"
    ],
    category: "content",
    required: false
  },
  "separator-color": {
    type: "String",
    desc: "The color used to color the separator, which can be any color from the Quasar Color Palette",
    examples: [
      "primary",
      "teal-10"
    ],
    category: "style"
  },
  align: {
    type: "String",
    default: "left",
    desc: "Specify how to align the breadcrumbs horizontally",
    values: [
      "left",
      "center",
      "right",
      "between",
      "around",
      "evenly"
    ],
    category: "content",
    required: false
  }
};
var slots = {
  default: {
    desc: "Default slot in the devland unslotted content of the component"
  },
  separator: {
    desc: "HTML or component you can slot in to separate the breadcrumbs"
  }
};
var QBreadcrumbs_default = {
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
