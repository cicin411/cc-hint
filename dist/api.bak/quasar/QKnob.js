// src/api/quasar/QKnob.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/knob"
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
    desc: "Any number to indicate the given value of the knob. Either use this property (along with a listener for 'update:modelValue' event) OR use the v-model directive",
    required: true,
    syncable: true,
    category: "model",
    type: "Number",
    examples: [
      'v-model="myValue"'
    ]
  },
  min: {
    type: "Number",
    desc: "The minimum value that the model (the knob value) should start at",
    category: "model"
  },
  max: {
    type: "Number",
    desc: "The maximum value that the model (the knob value) should go to",
    category: "model"
  },
  "inner-min": {
    type: "Number",
    desc: "Inner minimum value of the model; Use in case you need the model value to be inside of the track's min-max values; Needs to be higher or equal to 'min' prop; Defaults to 'min' prop",
    category: "model",
    addedIn: "v2.5.4"
  },
  "inner-max": {
    type: "Number",
    desc: "Inner maximum value of the model; Use in case you need the model value to be inside of the track's min-max values; Needs to be lower or equal to 'max' prop; Defaults to 'max' prop",
    category: "model",
    addedIn: "v2.5.4"
  },
  step: {
    type: "Number",
    default: 1,
    desc: "A number representing steps in the value of the model, while adjusting the knob",
    category: "model",
    required: false
  },
  reverse: {
    type: "Boolean",
    desc: "Reverses the direction of progress",
    category: "behavior"
  },
  "instant-feedback": {
    type: "Boolean",
    desc: "No animation when model changes",
    category: "behavior"
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
  "show-value": {
    type: "Boolean",
    desc: "Enables the default slot and uses it (if available), otherwise it displays the 'value' prop as text; Make sure the text has enough space to be displayed inside the component",
    category: "content|behavior"
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
  disable: {
    type: "Boolean",
    desc: "Put component in disabled mode",
    category: "state"
  },
  readonly: {
    type: "Boolean",
    desc: "Put component in readonly mode",
    category: "state"
  }
};
var slots = {
  default: {
    desc: "Default slot in the devland unslotted content of the component"
  }
};
var events = {
  "update:model-value": {
    desc: "Emitted when the component needs to change the model; Is also used by v-model",
    params: {
      value: {
        type: "Number",
        desc: "New model value",
        required: true
      }
    }
  },
  change: {
    desc: "Fires at the end of a knob's adjustment and offers the value of the model",
    params: {
      value: {
        type: "Number",
        desc: "New model value"
      }
    }
  },
  "drag-value": {
    desc: "The value of the model while dragging is still in progress",
    params: {
      value: {
        type: "Number",
        desc: "New model value"
      }
    }
  }
};
var QKnob_default = {
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
