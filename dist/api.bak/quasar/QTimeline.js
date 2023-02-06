// src/api/quasar/QTimeline.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/timeline"
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
  side: {
    type: "String",
    desc: "Side to place the timeline entries in dense and comfortable layout; For loose layout it gets overridden by QTimelineEntry side prop",
    default: "right",
    values: [
      "left",
      "right"
    ],
    category: "behavior",
    required: false
  },
  layout: {
    type: "String",
    desc: "Layout of the timeline. Dense keeps content and labels on one side. Comfortable keeps content on one side and labels on the opposite side. Loose puts content on both sides.",
    default: "dense",
    values: [
      "dense",
      "comfortable",
      "loose"
    ],
    category: "behavior",
    required: false
  },
  dark: {
    type: "Boolean",
    desc: "Notify the component that the background is a dark color",
    category: "style"
  }
};
var slots = {
  default: {
    desc: "Used for content of component"
  }
};
var QTimeline_default = {
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
