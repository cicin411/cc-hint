// src/api/quasar/QBanner.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/banner"
};
var props = {
  "inline-actions": {
    type: "Boolean",
    desc: "Display actions on same row as content",
    category: "content"
  },
  dense: {
    type: "Boolean",
    desc: "Dense mode; occupies less space",
    category: "style"
  },
  rounded: {
    type: "Boolean",
    desc: "Applies a small standard border-radius for a squared shape of the component",
    category: "style"
  },
  dark: {
    type: "Boolean",
    desc: "Notify the component that the background is a dark color",
    category: "style"
  }
};
var slots = {
  default: {
    desc: "This is where Banner content goes"
  },
  avatar: {
    desc: "Slot for displaying an avatar (suggestions: QIcon, QAvatar)"
  },
  action: {
    desc: "Slot for Banner action (suggestions: QBtn)"
  }
};
var QBanner_default = {
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
