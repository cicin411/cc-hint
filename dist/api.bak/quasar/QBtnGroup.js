// src/api/quasar/QBtnGroup.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/button-group"
};
var props = {
  spread: {
    type: "Boolean",
    desc: "Spread horizontally to all available space",
    category: "content"
  },
  outline: {
    type: "Boolean",
    desc: "Use 'outline' design for buttons",
    category: "style"
  },
  flat: {
    type: "Boolean",
    desc: "Use 'flat' design for buttons",
    category: "style"
  },
  unelevated: {
    type: "Boolean",
    desc: "Remove shadow on buttons",
    category: "style"
  },
  rounded: {
    type: "Boolean",
    desc: "Applies a more prominent border-radius for squared shape buttons",
    category: "style"
  },
  square: {
    type: "Boolean",
    desc: "Removes border-radius so borders are squared",
    category: "style",
    addedIn: "v2.7.6"
  },
  push: {
    type: "Boolean",
    desc: "Use 'push' design for buttons",
    category: "style"
  },
  stretch: {
    type: "Boolean",
    desc: "When used on flexbox parent, buttons will stretch to parent's height",
    category: "content"
  },
  glossy: {
    type: "Boolean",
    desc: "Applies a glossy effect",
    category: "style"
  }
};
var slots = {
  default: {
    desc: "Suggestion: QBtn"
  }
};
var QBtnGroup_default = {
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