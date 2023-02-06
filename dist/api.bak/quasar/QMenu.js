// src/api/quasar/QMenu.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/menu"
};
var props = {
  "transition-show": {
    type: "String",
    desc: "One of Quasar's embedded transitions",
    examples: [
      "fade",
      "slide-down"
    ],
    category: "transition",
    default: "fade",
    required: false
  },
  "transition-hide": {
    type: "String",
    desc: "One of Quasar's embedded transitions",
    examples: [
      "fade",
      "slide-down"
    ],
    category: "transition",
    default: "fade",
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
    required: false
  },
  target: {
    type: [
      "Boolean",
      "String",
      "Element"
    ],
    desc: "Configure a target element to trigger component toggle; 'true' means it enables the parent DOM element, 'false' means it disables attaching events to any DOM elements; By using a String (CSS selector) or a DOM element it attaches the events to the specified DOM element (if it exists)",
    default: true,
    values: [
      "(Boolean) true",
      "(Boolean) false",
      "(CSS selector)",
      "(DOM Element)"
    ],
    examples: [
      ':target="false"',
      ':target="$refs.target"',
      'target=".my-parent"',
      'target="#target-id"'
    ],
    category: "behavior",
    required: false
  },
  "no-parent-event": {
    type: "Boolean",
    desc: "Skips attaching events to the target DOM element (that trigger the element to get shown)",
    category: "behavior"
  },
  "context-menu": {
    type: "Boolean",
    desc: "Allows the component to behave like a context menu, which opens with a right mouse click (or long tap on mobile)",
    category: "behavior"
  },
  "model-value": {
    type: "Boolean",
    desc: "Model of the component defining shown/hidden state; Either use this property (along with a listener for 'update:model-value' event) OR use v-model directive",
    category: "model"
  },
  dark: {
    type: "Boolean",
    desc: "Notify the component that the background is a dark color",
    category: "style"
  },
  fit: {
    type: "Boolean",
    desc: "Allows the menu to match at least the full width of its target",
    category: "position"
  },
  cover: {
    type: "Boolean",
    desc: "Allows the menu to cover its target. When used, the 'self' and 'fit' props are no longer effective",
    category: "position"
  },
  anchor: {
    type: "String",
    desc: "Two values setting the starting position or anchor point of the menu relative to its target",
    values: [
      "top left",
      "top middle",
      "top right",
      "top start",
      "top end",
      "center left",
      "center middle",
      "center right",
      "center start",
      "center end",
      "bottom left",
      "bottom middle",
      "bottom right",
      "bottom start",
      "bottom end"
    ],
    category: "position"
  },
  self: {
    type: "String",
    desc: "Two values setting the menu's own position relative to its target",
    values: [
      "top left",
      "top middle",
      "top right",
      "top start",
      "top end",
      "center left",
      "center middle",
      "center right",
      "center start",
      "center end",
      "bottom left",
      "bottom middle",
      "bottom right",
      "bottom start",
      "bottom end"
    ],
    category: "position"
  },
  offset: {
    type: "Array",
    desc: "An array of two numbers to offset the menu horizontally and vertically in pixels",
    examples: [
      "[8, 8]",
      "[5, 10]"
    ],
    category: "position"
  },
  "scroll-target": {
    type: [
      "Element",
      "String"
    ],
    desc: "CSS selector or DOM element to be used as a custom scroll container instead of the auto detected one",
    examples: [
      ':scroll-target="$refs.scrollTarget"',
      'scroll-target=".scroll-target-class"',
      'scroll-target="#scroll-target-id"',
      'scroll-target="body"'
    ],
    category: "behavior"
  },
  "touch-position": {
    type: "Boolean",
    desc: "Allows for the target position to be set by the mouse position, when the target of the menu is either clicked or touched",
    category: "behavior"
  },
  persistent: {
    type: "Boolean",
    desc: "Allows the menu to not be dismissed by a click/tap outside of the menu or by hitting the ESC key",
    category: "behavior"
  },
  "no-route-dismiss": {
    type: "Boolean",
    desc: "Changing route app won't dismiss the popup; No need to set it if 'persistent' prop is also set",
    category: "behavior"
  },
  "auto-close": {
    type: "Boolean",
    desc: "Allows any click/tap in the menu to close it; Useful instead of attaching events to each menu item that should close the menu on click/tap",
    category: "behavior"
  },
  "separate-close-popup": {
    type: "Boolean",
    desc: "Separate from parent menu, marking it as a separate closing point for v-close-popup (without this, chained menus close all together)",
    category: "behavior"
  },
  square: {
    type: "Boolean",
    desc: "Forces content to have squared borders",
    category: "style"
  },
  "no-refocus": {
    type: "Boolean",
    desc: "(Accessibility) When Menu gets hidden, do not refocus on the DOM element that previously had focus",
    category: "behavior"
  },
  "no-focus": {
    type: "Boolean",
    desc: "(Accessibility) When Menu gets shown, do not switch focus on it",
    category: "behavior"
  },
  "max-height": {
    type: "String",
    desc: "The maximum height of the menu; Size in CSS units, including unit name",
    examples: [
      "16px",
      "2rem"
    ],
    category: "style"
  },
  "max-width": {
    type: "String",
    desc: "The maximum width of the menu; Size in CSS units, including unit name",
    examples: [
      "16px",
      "2rem"
    ],
    category: "style"
  }
};
var slots = {
  default: {
    desc: "Default slot in the devland unslotted content of the component"
  }
};
var events = {
  "update:model-value": {
    desc: "Emitted when showing/hidden state changes; Is also used by v-model",
    params: {
      value: {
        type: "Boolean",
        desc: "New state (showing/hidden)"
      }
    }
  },
  show: {
    desc: "Emitted after component has triggered show()",
    params: {
      evt: {
        type: "Event",
        desc: "JS event object",
        required: true
      }
    }
  },
  "before-show": {
    desc: "Emitted when component triggers show() but before it finishes doing it",
    params: {
      evt: {
        type: "Event",
        desc: "JS event object",
        required: true
      }
    }
  },
  hide: {
    desc: "Emitted after component has triggered hide()",
    params: {
      evt: {
        type: "Event",
        desc: "JS event object",
        required: true
      }
    }
  },
  "before-hide": {
    desc: "Emitted when component triggers hide() but before it finishes doing it",
    params: {
      evt: {
        type: "Event",
        desc: "JS event object",
        required: true
      }
    }
  },
  "escape-key": {
    desc: "Emitted when ESC key is pressed; Does not get emitted if Menu is 'persistent'"
  }
};
var methods = {
  show: {
    desc: "Triggers component to show",
    params: {
      evt: {
        type: "Event",
        desc: "JS event object",
        required: false
      }
    }
  },
  hide: {
    desc: "Triggers component to hide",
    params: {
      evt: {
        type: "Event",
        desc: "JS event object",
        required: false
      }
    }
  },
  toggle: {
    params: {
      evt: {
        type: "Event",
        desc: "JS event object",
        required: false
      }
    },
    desc: "Triggers component to toggle between show/hide"
  },
  updatePosition: {
    desc: "There are some custom scenarios for which Quasar cannot automatically reposition the menu without significant performance drawbacks so the optimal solution is for you to call this method when you need it"
  },
  focus: {
    desc: "Focus menu; if you have content with autofocus attribute, it will directly focus it"
  }
};
var computedProps = {
  contentEl: {
    type: "Element",
    desc: "The DOM Element of the rendered content",
    addedIn: "v2.10.1"
  }
};
var QMenu_default = {
  type,
  meta,
  props,
  slots,
  events,
  methods,
  computedProps
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  computedProps,
  events,
  meta,
  methods,
  props,
  slots,
  type
});
