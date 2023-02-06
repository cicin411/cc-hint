// src/api/quasar/Dark.json
var type = "plugin";
var meta = {
  docsUrl: "https://v2.quasar.dev/quasar-plugins/dark"
};
var injection = "$q.dark";
var props = {
  isActive: {
    type: "Boolean",
    desc: "Is Dark mode active?",
    reactive: true
  },
  mode: {
    type: [
      "Boolean",
      "String"
    ],
    desc: "Dark mode configuration (not status)",
    values: [
      "auto",
      "(Boolean) true",
      "(Boolean) false"
    ],
    reactive: true
  }
};
var methods = {
  set: {
    desc: "Set dark mode status",
    params: {
      status: {
        type: [
          "Boolean",
          "String"
        ],
        desc: "Dark mode status",
        values: [
          "(Boolean) true",
          "(Boolean) false",
          "auto"
        ],
        required: true
      }
    }
  },
  toggle: {
    desc: "Toggle dark mode status"
  }
};
var Dark_default = {
  type,
  meta,
  injection,
  props,
  methods
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  injection,
  meta,
  methods,
  props,
  type
});
