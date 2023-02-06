// src/api/quasar/QCarouselControl.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/carousel"
};
var props = {
  position: {
    type: "String",
    desc: "Side/corner to stick to",
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
    desc: "An array of two numbers to offset the component horizontally and vertically (in pixels)",
    default: "[18, 18]",
    examples: [
      "[8, 8]",
      "[5, 10]"
    ],
    category: "position",
    required: false
  }
};
var slots = {
  default: {
    desc: "Default slot in the devland unslotted content of the component"
  }
};
var QCarouselControl_default = {
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
