// src/api/quasar/QPage.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/layout/page"
};
var props = {
  padding: {
    type: "Boolean",
    desc: "Applies a default responsive page padding",
    category: "content"
  },
  "style-fn": {
    type: "Function",
    desc: "Override default CSS style applied to the component (sets minHeight); Function(offset: Number) => CSS props/value: Object; For best performance, reference it from your scope and do not define it inline",
    params: {
      offset: {
        type: "Number",
        desc: "Header + Footer height (in pixels)"
      },
      height: {
        type: "Number",
        desc: "Value in pixels of container height (if containerized) or window height otherwise"
      }
    },
    returns: {
      type: "Object",
      desc: "Object with CSS properties to apply to Page DOM element"
    },
    default: "(see source code)",
    examples: [
      "(see source code)"
    ],
    category: "style",
    required: false
  }
};
var slots = {
  default: {
    desc: "Default slot in the devland unslotted content of the component"
  }
};
var QPage_default = {
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
