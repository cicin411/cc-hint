// src/api/quasar/QDialog.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/dialog"
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
  "model-value": {
    type: "Boolean",
    desc: "Model of the component defining shown/hidden state; Either use this property (along with a listener for 'update:model-value' event) OR use v-model directive",
    category: "model"
  },
  persistent: {
    type: "Boolean",
    desc: "User cannot dismiss Dialog if clicking outside of it or hitting ESC key; Also, an app route change won't dismiss it",
    category: "behavior"
  },
  "no-esc-dismiss": {
    type: "Boolean",
    desc: "User cannot dismiss Dialog by hitting ESC key; No need to set it if 'persistent' prop is also set",
    category: "behavior"
  },
  "no-backdrop-dismiss": {
    type: "Boolean",
    desc: "User cannot dismiss Dialog by clicking outside of it; No need to set it if 'persistent' prop is also set",
    category: "behavior"
  },
  "no-route-dismiss": {
    type: "Boolean",
    desc: "Changing route app won't dismiss Dialog; No need to set it if 'persistent' prop is also set",
    category: "behavior"
  },
  "auto-close": {
    type: "Boolean",
    desc: "Any click/tap inside of the dialog will close it",
    category: "behavior"
  },
  seamless: {
    type: "Boolean",
    desc: "Put Dialog into seamless mode; Does not use a backdrop so user is able to interact with the rest of the page too",
    category: "content"
  },
  maximized: {
    type: "Boolean",
    desc: "Put Dialog into maximized mode",
    category: "content"
  },
  "full-width": {
    type: "Boolean",
    desc: "Dialog will try to render with same width as the window",
    category: "content"
  },
  "full-height": {
    type: "Boolean",
    desc: "Dialog will try to render with same height as the window",
    category: "content"
  },
  position: {
    type: "String",
    desc: "Stick dialog to one of the sides (top, right, bottom or left)",
    default: "standard",
    values: [
      "standard",
      "top",
      "right",
      "bottom",
      "left"
    ],
    category: "content",
    required: false
  },
  square: {
    type: "Boolean",
    desc: "Forces content to have squared borders",
    category: "style"
  },
  "no-refocus": {
    type: "Boolean",
    desc: "(Accessibility) When Dialog gets hidden, do not refocus on the DOM element that previously had focus",
    category: "behavior"
  },
  "no-focus": {
    type: "Boolean",
    desc: "(Accessibility) When Dialog gets shown, do not switch focus on it",
    category: "behavior"
  },
  "no-shake": {
    type: "Boolean",
    desc: "Do not shake up the Dialog to catch user's attention",
    category: "behavior",
    addedIn: "v2.1.1"
  },
  "allow-focus-outside": {
    type: "Boolean",
    desc: "Allow elements outside of the Dialog to be focusable; By default, for accessibility reasons, QDialog does not allow outer focus",
    category: "behavior",
    addedIn: "v2.7.2"
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
  shake: {
    desc: "Emitted when the Dialog shakes in order to catch user's attention, unless the 'no-shake' property is set"
  },
  "escape-key": {
    desc: "Emitted when ESC key is pressed; Does not get emitted if Dialog is 'persistent' or it has 'no-esc-key' set"
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
  focus: {
    desc: "Focus dialog; if you have content with autofocus attribute, it will directly focus it",
    params: {
      selector: {
        type: "String",
        required: false,
        desc: "Optional CSS selector to override default focusable element",
        examples: [
          '[tabindex]:not([tabindex="-1"])'
        ],
        addedIn: "v2.6.5"
      }
    }
  },
  shake: {
    desc: "Shakes dialog",
    params: {
      focusTarget: {
        type: "Element",
        desc: "Optional DOM Element to be focused after shake",
        examples: [
          "document.getElementById('example')"
        ],
        addedIn: "v2.10.1"
      }
    }
  }
};
var computedProps = {
  contentEl: {
    type: "Element",
    desc: "The DOM Element of the rendered content",
    addedIn: "v2.10.1"
  }
};
var QDialog_default = {
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
