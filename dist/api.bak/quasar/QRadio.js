// src/api/quasar/QRadio.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/radio"
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
      "Number",
      "String",
      "null",
      "undefined"
    ],
    examples: [
      'v-model="option"'
    ]
  },
  val: {
    type: [
      "Number",
      "String",
      "null",
      "undefined"
    ],
    required: true,
    desc: "The actual value of the option with which model value is changed",
    examples: [
      "opt1",
      50
    ],
    category: "model"
  },
  label: {
    type: "String",
    desc: "Label to display along the radio control (or use the default slot instead of this prop)",
    examples: [
      'label="Option 1"'
    ],
    category: "label"
  },
  "left-label": {
    type: "Boolean",
    desc: "Label (if any specified) should be displayed on the left side of the checkbox",
    category: "label"
  },
  "checked-icon": {
    type: "String",
    desc: "The icon to be used when selected (instead of the default design)",
    examples: [
      "visibility"
    ],
    category: "icons",
    addedIn: "v2.5"
  },
  "unchecked-icon": {
    type: "String",
    desc: "The icon to be used when un-selected (instead of the default design)",
    examples: [
      "visibility_off"
    ],
    category: "icons",
    addedIn: "v2.5"
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
    desc: "Should the color (if specified any) be kept when checkbox is unticked?",
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
  set: {
    desc: "Sets the Radio's v-model to equal the val"
  }
};
var QRadio_default = {
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
