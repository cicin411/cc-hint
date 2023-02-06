// src/api/quasar/QFooter.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/layout/header-and-footer"
};
var props = {
  "model-value": {
    desc: "Model of the component defining if it is shown or hidden to the user; Either use this property (along with a listener for 'update:modelValue' event) OR use v-model directive",
    required: false,
    syncable: true,
    category: "model",
    type: "Boolean",
    default: true,
    examples: [
      'v-model="footerState"'
    ]
  },
  reveal: {
    type: "Boolean",
    desc: "Enable 'reveal' mode; Takes into account user scroll to temporarily show/hide footer",
    category: "behavior"
  },
  bordered: {
    type: "Boolean",
    desc: "Applies a default border to the component",
    category: "style"
  },
  elevated: {
    type: "Boolean",
    desc: "Adds a default shadow to the footer",
    category: "style"
  },
  "height-hint": {
    type: [
      "Number",
      "String"
    ],
    desc: "When using SSR, you can optionally hint of the height (in pixels) of the QFooter",
    default: 50,
    category: "behavior",
    required: false
  }
};
var slots = {
  default: {
    desc: "Default slot in the devland unslotted content of the component; Suggestion: QToolbar"
  }
};
var events = {
  reveal: {
    desc: "Emitted when 'reveal' state gets changed",
    params: {
      value: {
        type: "Boolean",
        desc: "New 'reveal' state"
      }
    }
  }
};
var QFooter_default = {
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
