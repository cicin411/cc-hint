// src/api/quasar/QSlideTransition.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/slide-transition"
};
var props = {
  appear: {
    type: "Boolean",
    desc: "If set to true, the transition will be applied on the initial render.",
    category: "behavior"
  },
  duration: {
    type: "Number",
    desc: "Duration (in milliseconds) enabling animated scroll.",
    default: 300,
    category: "behavior",
    required: false
  }
};
var slots = {
  default: {
    desc: "This is where content goes"
  }
};
var events = {
  show: {
    desc: "Emitted when component show animation is finished"
  },
  hide: {
    desc: "Emitted when component hide animation is finished"
  }
};
var QSlideTransition_default = {
  type,
  meta,
  props,
  slots,
  events
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  events,
  meta,
  props,
  slots,
  type
});
