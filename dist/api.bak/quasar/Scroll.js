// src/api/quasar/Scroll.json
var type = "directive";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-directives/scroll"
};
var value = {
  type: "Function",
  desc: "Function to call when scrolling occurs (use a non-function to disable)",
  params: {
    verticalScrollPosition: {
      type: "Number",
      desc: "Scroll offset from top"
    },
    horizontalScrollPosition: {
      type: "Number",
      desc: "Scroll offset from left"
    }
  },
  returns: null,
  examples: [
    'v-scroll="fnToCall"',
    'v-scroll="void 0"'
  ]
};
var Scroll_default = {
  type,
  meta,
  value
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  meta,
  type,
  value
});
