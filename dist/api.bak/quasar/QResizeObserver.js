// src/api/quasar/QResizeObserver.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/resize-observer"
};
var props = {
  debounce: {
    type: [
      "String",
      "Number"
    ],
    desc: "Debounce amount (in milliseconds)",
    default: 100,
    examples: [
      "0",
      "530"
    ],
    category: "behavior",
    required: false
  }
};
var events = {
  resize: {
    desc: "Parent element has resized (width or height changed)",
    params: {
      size: {
        type: "Object",
        desc: "New size",
        definition: {
          height: {
            type: "Number",
            required: true,
            desc: "Layout height"
          },
          width: {
            type: "Number",
            required: true,
            desc: "Layout width"
          }
        }
      }
    }
  }
};
var methods = {
  trigger: {
    desc: "Emit a 'resize' event",
    params: {
      immediately: {
        type: "Boolean",
        desc: "Skip over the debounce amount"
      }
    }
  }
};
var QResizeObserver_default = {
  type,
  meta,
  props,
  events,
  methods
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  events,
  meta,
  methods,
  props,
  type
});
