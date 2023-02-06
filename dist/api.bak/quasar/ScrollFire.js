// src/api/quasar/ScrollFire.json
var type = "directive";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-directives/scroll-fire"
};
var value = {
  type: "Function",
  desc: "Function to call when scrolling and element comes into the viewport (use a non-function to disable)",
  params: {
    el: {
      type: "Element",
      desc: "DOM element that scroll-fire is applied to"
    }
  },
  returns: null,
  examples: [
    'v-scroll-fire="fnToCall"',
    'v-scroll-fire="void 0"'
  ]
};
var ScrollFire_default = {
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
