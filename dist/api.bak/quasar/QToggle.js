// src/api/quasar/QToggle.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/toggle"
};
var props = {
  name: {
    type: "String",
    desc: "Used to specify the name of the control; Useful if dealing with forms submitted directly to a URL",
    examples: [
      "car_id"
    ],
    category: "behavior"
  },
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
  "model-value": {
    desc: "Model of the component; Either use this property (along with a listener for 'update:model-value' event) OR use v-model directive",
    required: true,
    syncable: true,
    category: "model",
    type: [
      "Any",
      "Array"
    ],
    examples: [
      "false",
      "['car', 'building']"
    ]
  },
  val: {
    type: "Any",
    desc: "Works when model ('value') is Array. It tells the component which value should add/remove when ticked/unticked",
    examples: [
      "car"
    ],
    category: "model"
  },
  "true-value": {
    type: "Any",
    desc: "What model value should be considered as checked/ticked/on?",
    default: true,
    examples: [
      "Agreed"
    ],
    category: "model",
    required: false
  },
  "false-value": {
    type: "Any",
    desc: "What model value should be considered as unchecked/unticked/off?",
    default: false,
    examples: [
      "Disagree"
    ],
    category: "model",
    required: false
  },
  "indeterminate-value": {
    type: "Any",
    desc: "What model value should be considered as 'indeterminate'?",
    default: null,
    examples: [
      0,
      "not_answered"
    ],
    category: "behavior",
    required: false
  },
  "toggle-order": {
    type: "String",
    desc: "Determines toggle order of the two states ('t' stands for state of true, 'f' for state of false); If 'toggle-indeterminate' is true, then the order is: indet -> first state -> second state -> indet (and repeat), otherwise: indet -> first state -> second state -> first state -> second state -> ...",
    default: "tf",
    values: [
      "tf",
      "ft"
    ],
    category: "behavior",
    required: false
  },
  "toggle-indeterminate": {
    type: "Boolean",
    desc: "When user clicks/taps on the component, should we toggle through the indeterminate state too?",
    category: "behavior"
  },
  label: {
    type: "String",
    desc: "Label to display along the component (or use the default slot instead of this prop)",
    examples: [
      "I agree with the Terms and Conditions"
    ],
    category: "label"
  },
  "left-label": {
    type: "Boolean",
    desc: "Label (if any specified) should be displayed on the left side of the component",
    category: "label"
  },
  "checked-icon": {
    type: "String",
    examples: [
      "visibility"
    ],
    category: "icons",
    desc: "The icon to be used when the toggle is on"
  },
  "unchecked-icon": {
    type: "String",
    examples: [
      "visibility_off"
    ],
    category: "icons",
    desc: "The icon to be used when the toggle is off"
  },
  "indeterminate-icon": {
    type: "String",
    examples: [
      "help"
    ],
    category: "icons",
    desc: "The icon to be used when the model is indeterminate"
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
  "keep-color": {
    type: "Boolean",
    desc: "Should the color (if specified any) be kept when the component is unticked/ off?",
    category: "behavior"
  },
  dark: {
    type: "Boolean",
    desc: "Notify the component that the background is a dark color",
    category: "style"
  },
  dense: {
    type: "Boolean",
    desc: "Dense mode; occupies less space",
    category: "style"
  },
  disable: {
    type: "Boolean",
    desc: "Put component in disabled mode",
    category: "state"
  },
  tabindex: {
    type: [
      "Number",
      "String"
    ],
    desc: "Tabindex HTML attribute value",
    examples: [
      "0",
      "100"
    ],
    category: "general"
  },
  icon: {
    type: "String",
    desc: "Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix; If 'none' (String) is used as value then no icon is rendered (but screen real estate will still be used for it)",
    examples: [
      "map",
      "ion-add",
      "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
      "img:path/to/some_image.png"
    ],
    category: "content"
  },
  "icon-color": {
    type: "String",
    desc: "Override default icon color (for truthy state only); Color name for component from the Quasar Color Palette",
    examples: [
      "primary",
      "teal-10"
    ],
    category: "style"
  }
};
var slots = {
  default: {
    desc: "Default slot can be used as label, unless 'label' prop is specified; Suggestion: string"
  }
};
var events = {
  "update:model-value": {
    desc: "Emitted when the component needs to change the model; Is also used by v-model",
    params: {
      value: {
        type: "Any",
        desc: "New model value",
        required: true
      },
      evt: {
        type: "Event",
        desc: "JS event object",
        required: true
      }
    }
  }
};
var methods = {
  toggle: {
    desc: "Toggle the state (of the model)"
  }
};
var QToggle_default = {
  type,
  meta,
  props,
  slots,
  events,
  methods
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  events,
  meta,
  methods,
  props,
  slots,
  type
});
