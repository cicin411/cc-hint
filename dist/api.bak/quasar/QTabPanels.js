// src/api/quasar/QTabPanels.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/tab-panels"
};
var props = {
  "model-value": {
    type: "Any",
    desc: "Model of the component defining the current panel's name; If a Number is used, it does not define the panel's index, but rather the panel's name which can also be an Integer; Either use this property (along with a listener for 'update:model-value' event) OR use the v-model directive.",
    examples: [
      'v-model="panelName"'
    ],
    category: "model"
  },
  "keep-alive": {
    type: "Boolean",
    desc: "Equivalent to using Vue's native <keep-alive> component on the content",
    category: "behavior"
  },
  "keep-alive-include": {
    type: [
      "String",
      "Array",
      "RegExp"
    ],
    desc: "Equivalent to using Vue's native include prop for <keep-alive>; Values must be valid Vue component names",
    examples: [
      "a,b",
      "/a|b/",
      "['a', 'b']"
    ],
    category: "behavior"
  },
  "keep-alive-exclude": {
    type: [
      "String",
      "Array",
      "RegExp"
    ],
    desc: "Equivalent to using Vue's native exclude prop for <keep-alive>; Values must be valid Vue component names",
    examples: [
      "a,b",
      "/a|b/",
      "['a', 'b']"
    ],
    category: "behavior"
  },
  "keep-alive-max": {
    type: "Number",
    desc: "Equivalent to using Vue's native max prop for <keep-alive>",
    category: "behavior"
  },
  animated: {
    type: "Boolean",
    desc: "Enable transitions between panel (also see 'transition-prev' and 'transition-next' props)",
    category: "behavior"
  },
  infinite: {
    type: "Boolean",
    desc: "Makes component appear as infinite (when reaching last panel, next one will become the first one)",
    category: "behavior"
  },
  swipeable: {
    type: "Boolean",
    desc: "Enable swipe events (may interfere with content's touch/mouse events)",
    category: "behavior"
  },
  vertical: {
    type: "Boolean",
    desc: "Default transitions and swipe actions will be on the vertical axis",
    category: "behavior"
  },
  "transition-prev": {
    type: "String",
    desc: "One of Quasar's embedded transitions (has effect only if 'animated' prop is set)",
    examples: [
      "fade",
      "slide-down"
    ],
    category: "transition",
    default: "slide-right/slide-down",
    required: false
  },
  "transition-next": {
    type: "String",
    desc: "One of Quasar's embedded transitions (has effect only if 'animated' prop is set)",
    examples: [
      "fade",
      "slide-down"
    ],
    category: "transition",
    default: "slide-left/slide-up",
    required: false
  },
  "transition-duration": {
    type: [
      "String",
      "Number"
    ],
    desc: "Transition duration (in milliseconds, without unit)",
    default: 300,
    category: "transition",
    addedIn: "v2.2",
    required: false
  }
};
var slots = {
  default: {
    desc: "Default slot in the devland unslotted content of the component"
  }
};
var events = {
  "update:model-value": {
    desc: "Emitted when the component changes the model; This event _isn't_ fired if the model is changed externally; Is also used by v-model",
    params: {
      value: {
        type: [
          "String",
          "Number"
        ],
        desc: "New current panel name",
        examples: [
          "dashboard"
        ]
      }
    }
  },
  "before-transition": {
    desc: "Emitted before transitioning to a new panel",
    params: {
      newVal: {
        type: [
          "String",
          "Number"
        ],
        desc: "Panel name towards transition is going",
        examples: [
          "dashboard"
        ]
      },
      oldVal: {
        type: [
          "String",
          "Number"
        ],
        desc: "Panel name from which transition is happening",
        examples: [
          "dashboard"
        ]
      }
    }
  },
  transition: {
    desc: "Emitted after component transitioned to a new panel",
    params: {
      newVal: {
        type: [
          "String",
          "Number"
        ],
        desc: "Panel name towards transition has occurred",
        examples: [
          "dashboard"
        ]
      },
      oldVal: {
        type: [
          "String",
          "Number"
        ],
        desc: "Panel name from which transition has happened",
        examples: [
          "dashboard"
        ]
      }
    }
  }
};
var methods = {
  next: {
    desc: "Go to next panel"
  },
  previous: {
    desc: "Go to previous panel"
  },
  goTo: {
    desc: "Go to specific panel",
    params: {
      panelName: {
        type: [
          "String",
          "Number"
        ],
        desc: "Panel's name, which may be a String or Number; Number does not refers to panel index, but to its name, which may be an Integer",
        required: true,
        examples: [
          "dashboard"
        ]
      }
    }
  }
};
var QTabPanels_default = {
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
