// src/api/quasar/QDrawer.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/layout/drawer"
};
var props = {
  "model-value": {
    type: "Boolean",
    desc: "Model of the component defining shown/hidden state; Either use this property (along with a listener for 'update:model-value' event) OR use v-model directive",
    category: "model"
  },
  side: {
    type: "String",
    desc: "Side to attach to",
    values: [
      "left",
      "right"
    ],
    default: "left",
    category: "behavior",
    required: false
  },
  overlay: {
    type: "Boolean",
    desc: "Puts drawer into overlay mode (does not occupy space on screen, narrowing the page)",
    category: "behavior"
  },
  width: {
    type: "Number",
    desc: "Width of drawer (in pixels)",
    default: 300,
    examples: [
      ':width="350"'
    ],
    category: "style",
    required: false
  },
  mini: {
    type: "Boolean",
    desc: "Puts drawer into mini mode",
    category: "behavior"
  },
  "mini-width": {
    type: "Number",
    desc: "Width of drawer (in pixels) when in mini mode",
    default: 60,
    examples: [
      ':mini-width="100"'
    ],
    category: "style",
    required: false
  },
  dark: {
    type: "Boolean",
    desc: "Notify the component that the background is a dark color",
    category: "style"
  },
  "mini-to-overlay": {
    type: "Boolean",
    desc: "Mini mode will expand as an overlay",
    category: "behavior"
  },
  breakpoint: {
    type: "Number",
    desc: "Breakpoint (in pixels) of layout width up to which mobile mode is used",
    default: 1023,
    examples: [
      1200,
      ':breakpoint="1400"'
    ],
    category: "behavior",
    required: false
  },
  behavior: {
    type: "String",
    desc: "Overrides the default dynamic mode into which the drawer is put on",
    values: [
      "default",
      "desktop",
      "mobile"
    ],
    default: "default",
    category: "behavior",
    required: false
  },
  bordered: {
    type: "Boolean",
    desc: "Applies a default border to the component",
    category: "style"
  },
  elevated: {
    type: "Boolean",
    desc: "Adds a default shadow to the header",
    category: "style"
  },
  persistent: {
    type: "Boolean",
    desc: "Prevents drawer from auto-closing when app's route changes",
    category: "behavior"
  },
  "show-if-above": {
    type: "Boolean",
    desc: "Forces drawer to be shown on screen on initial render if the layout width is above breakpoint, regardless of v-model; This is the default behavior when SSR is taken over by client on initial render",
    category: "behavior"
  },
  "no-swipe-open": {
    type: "Boolean",
    desc: "Disables the default behavior where drawer can be swiped into view; Useful for iOS platforms where it might interfere with Safari's 'swipe to go to previous/next page' feature",
    category: "behavior"
  },
  "no-swipe-close": {
    type: "Boolean",
    desc: "Disables the default behavior where drawer can be swiped out of view (applies to drawer content only); Useful for iOS platforms where it might interfere with Safari's 'swipe to go to previous/next page' feature",
    category: "behavior"
  },
  "no-swipe-backdrop": {
    type: "Boolean",
    desc: "Disables the default behavior where drawer backdrop can be swiped",
    category: "behavior"
  }
};
var slots = {
  default: {
    desc: "Default slot in the devland unslotted content of the component (overridden by 'mini' slot if used and drawer is in mini mode)"
  },
  mini: {
    desc: "Content to show when in mini mode (overrides 'default' slot)"
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
  "on-layout": {
    desc: "Emitted when drawer toggles between occupying space on page or not",
    params: {
      state: {
        type: "Boolean",
        desc: "New state"
      }
    }
  },
  click: {
    desc: "Emitted when user clicks/taps on the component and drawer is NOT in mobile mode; Useful for when taking a decision to toggle mini mode",
    params: {
      evt: {
        type: "Event",
        desc: "JS event object",
        required: true
      }
    }
  },
  mouseover: {
    desc: "Emitted when user moves mouse cursor over the component and drawer is NOT in mobile mode; Useful for when taking a decision to toggle mini mode",
    params: {
      evt: {
        type: "Event",
        desc: "JS event object",
        required: true
      }
    }
  },
  mouseout: {
    desc: "Emitted when user moves mouse cursor out of the component and drawer is NOT in mobile mode; Useful for when taking a decision to toggle mini mode",
    params: {
      evt: {
        type: "Event",
        desc: "JS event object",
        required: true
      }
    }
  },
  "mini-state": {
    desc: "Emitted when drawer changes the mini-mode state (sometimes it is forced to do so)",
    params: {
      state: {
        type: "Boolean",
        desc: "New state"
      }
    }
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
  }
};
var QDrawer_default = {
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
