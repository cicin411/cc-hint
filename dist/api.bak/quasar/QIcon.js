// src/api/quasar/QIcon.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/icon"
};
var props = {
  size: {
    type: "String",
    desc: "Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)",
    examples: [
      "16px",
      "2rem",
      "xs",
      "md"
    ],
    category: "style"
  },
  tag: {
    type: "String",
    desc: "HTML tag to render, unless no icon is supplied or it's an svg icon",
    examples: [
      "div",
      "span",
      "div",
      "i"
    ],
    category: "content",
    default: "i",
    required: false
  },
  name: {
    type: "String",
    desc: "Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix; If 'none' (String) is used as value then no icon is rendered (but screen real estate will still be used for it)",
    examples: [
      "map",
      "ion-add",
      "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
      "img:path/to/some_image.png"
    ],
    category: "model"
  },
  color: {
    type: "String",
    desc: "Color name for component from the Quasar Color Palette",
    examples: [
      "primary",
      "teal-10"
    ],
    category: "style"
  },
  left: {
    type: "Boolean",
    desc: "Useful if icon is on the left side of something: applies a standard margin on the right side of Icon",
    category: "content"
  },
  right: {
    type: "Boolean",
    desc: "Useful if icon is on the right side of something: applies a standard margin on the left side of Icon",
    category: "content"
  }
};
var slots = {
  default: {
    desc: "Suggestions: QTooltip or QMenu"
  }
};
var QIcon_default = {
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