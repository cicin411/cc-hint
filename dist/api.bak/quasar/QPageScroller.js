// src/api/quasar/QPageScroller.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/layout/page-scroller"
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
    category: "content",
    default: [
      18,
      18
    ],
    required: false
  },
  expand: {
    type: "Boolean",
    desc: "By default the component shrinks to content's size; By using this prop you make the component fully expand horizontally or vertically, based on 'position' prop",
    category: "content"
  },
  "scroll-offset": {
    type: "Number",
    desc: "Scroll offset (in pixels) from which point the component is shown on page; Measured from the top of the page (or from the bottom if in 'reverse' mode)",
    default: 1e3,
    category: "behavior",
    required: false
  },
  reverse: {
    type: "Boolean",
    desc: "Work in reverse (shows when scrolling to the top of the page and scrolls to bottom when triggered)",
    category: "behavior"
  },
  duration: {
    type: "Number",
    desc: "Duration (in milliseconds) of the scrolling until it reaches its target",
    default: 300,
    category: "behavior",
    required: false
  }
};
var slots = {
  default: {
    desc: "Default slot in the devland unslotted content of the component"
  }
};
var QPageScroller_default = {
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
