// src/api/quasar/QSkeleton.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/skeleton"
};
var props = {
  dark: {
    type: "Boolean",
    desc: "Notify the component that the background is a dark color",
    category: "style"
  },
  type: {
    type: "String",
    desc: "Type of skeleton placeholder",
    values: [
      "text",
      "rect",
      "circle",
      "QBtn",
      "QBadge",
      "QChip",
      "QToolbar",
      "QCheckbox",
      "QRadio",
      "QToggle",
      "QSlider",
      "QRange",
      "QInput",
      "QAvatar"
    ],
    default: "rect",
    category: "content",
    required: false
  },
  animation: {
    type: "String",
    desc: "The animation effect of the skeleton placeholder",
    values: [
      "wave",
      "pulse",
      "pulse-x",
      "pulse-y",
      "fade",
      "blink",
      "none"
    ],
    default: "wave",
    category: "style",
    required: false
  },
  "animation-speed": {
    type: [
      "String",
      "Number"
    ],
    desc: "Animation speed (in milliseconds, without unit)",
    examples: [
      500,
      "1200"
    ],
    category: "style",
    default: 300,
    addedIn: "v2.2",
    required: false
  },
  square: {
    type: "Boolean",
    desc: "Removes border-radius so borders are squared",
    category: "style"
  },
  bordered: {
    type: "Boolean",
    desc: "Applies a default border to the component",
    category: "style"
  },
  size: {
    type: "String",
    desc: "Size in CSS units, including unit name; Overrides 'height' and 'width' props and applies the value to both height and width",
    examples: [
      "16px",
      "2rem"
    ],
    category: "style"
  },
  width: {
    type: "String",
    desc: "Width in CSS units, including unit name; Apply custom width; Use this prop or through CSS; Overridden by 'size' prop if used",
    examples: [
      "16px",
      "2rem"
    ],
    category: "style"
  },
  height: {
    type: "String",
    desc: "Height in CSS units, including unit name; Apply custom height; Use this prop or through CSS; Overridden by 'size' prop if used",
    examples: [
      "16px",
      "2rem"
    ],
    category: "style"
  },
  tag: {
    type: "String",
    desc: "HTML tag to use",
    examples: [
      "div",
      "span",
      "div",
      "span"
    ],
    category: "content",
    default: "div",
    required: false
  }
};
var slots = {
  default: {
    desc: "Default slot in the devland unslotted content of the component"
  }
};
var QSkeleton_default = {
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
