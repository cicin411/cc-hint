// src/api/quasar/QCircularProgress.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/circular-progress"
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
  value: {
    type: "Number",
    default: 0,
    desc: "Current progress (must be between min/max)",
    category: "model",
    required: false
  },
  min: {
    type: "Number",
    default: 0,
    desc: "Minimum value defining 'no progress' (must be lower than 'max')",
    category: "model",
    required: false
  },
  max: {
    type: "Number",
    default: 100,
    desc: "Maximum value defining 100% progress made (must be higher than 'min')",
    category: "model",
    required: false
  },
  color: {
    type: "String",
    desc: "Color name for the arc progress from the Quasar Color Palette",
    examples: [
      "primary",
      "teal-10"
    ],
    category: "style"
  },
  "center-color": {
    type: "String",
    desc: "Color name for the center part of the component from the Quasar Color Palette",
    examples: [
      "primary",
      "teal-10"
    ],
    category: "style"
  },
  "track-color": {
    type: "String",
    desc: "Color name for the track of the component from the Quasar Color Palette",
    examples: [
      "primary",
      "teal-10"
    ],
    category: "style"
  },
  "font-size": {
    type: "String",
    desc: "Size of text in CSS units, including unit name. Suggestion: use 'em' units to sync with component size",
    default: "0.25em",
    examples: [
      "1em",
      "16px",
      "2rem"
    ],
    category: "style",
    required: false
  },
  rounded: {
    type: "Boolean",
    desc: "Rounding the arc of progress",
    category: "style",
    addedIn: "v2.8.4"
  },
  thickness: {
    type: "Number",
    default: 0.2,
    desc: "Thickness of progress arc as a ratio (0.0 < x < 1.0) of component size",
    category: "style",
    required: false
  },
  angle: {
    type: "Number",
    desc: "Angle to rotate progress arc by",
    default: 0,
    category: "content",
    required: false
  },
  indeterminate: {
    type: "Boolean",
    desc: "Put component into 'indeterminate' state; Ignores 'value' prop",
    category: "behavior"
  },
  "show-value": {
    type: "Boolean",
    desc: "Enables the default slot and uses it (if available), otherwise it displays the 'value' prop as text; Make sure the text has enough space to be displayed inside the component",
    category: "content|behavior"
  },
  reverse: {
    type: "Boolean",
    desc: "Reverses the direction of progress; Only for determined state",
    category: "behavior"
  },
  "instant-feedback": {
    type: "Boolean",
    desc: "No animation when model changes",
    category: "behavior"
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
    default: 600,
    addedIn: "v2.3",
    required: false
  }
};
var slots = {
  default: {
    desc: "Used for component content only if 'show-value' prop is set; Make sure the content has enough space to be displayed inside the component"
  }
};
var QCircularProgress_default = {
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
