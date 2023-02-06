// src/api/quasar/QNoSsr.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/no-ssr"
};
var props = {
  tag: {
    type: "String",
    desc: "HTML tag to use",
    examples: [
      "div",
      "span",
      "div",
      "span",
      "blockquote"
    ],
    category: "content",
    default: "div",
    required: false
  },
  placeholder: {
    type: "String",
    desc: "Text to display on server-side render (unless using 'placeholder' slot)",
    examples: [
      "This is server-side only"
    ],
    category: "content"
  }
};
var slots = {
  default: {
    desc: "Default slot is used to render content on client-side"
  },
  placeholder: {
    desc: "Slot used as placeholder on server-side render, which gets replaced by the default slot on client-side; overrides 'placeholder' prop"
  }
};
var QNoSsr_default = {
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
