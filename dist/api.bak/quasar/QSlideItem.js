// src/api/quasar/QSlideItem.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/slide-item"
};
var props = {
  "left-color": {
    type: "String",
    desc: "Color name for left-side background from the Quasar Color Palette",
    examples: [
      "primary",
      "teal-10"
    ],
    category: "style"
  },
  "right-color": {
    type: "String",
    desc: "Color name for right-side background from the Quasar Color Palette",
    examples: [
      "primary",
      "teal-10"
    ],
    category: "style"
  },
  "top-color": {
    type: "String",
    desc: "Color name for top-side background from the Quasar Color Palette",
    examples: [
      "primary",
      "teal-10"
    ],
    category: "style"
  },
  "bottom-color": {
    type: "String",
    desc: "Color name for bottom-side background from the Quasar Color Palette",
    examples: [
      "primary",
      "teal-10"
    ],
    category: "style"
  },
  dark: {
    type: "Boolean",
    desc: "Notify the component that the background is a dark color",
    category: "style"
  }
};
var slots = {
  default: {
    desc: "This is where item's sections go; Suggestion: QItemSection"
  },
  left: {
    desc: "Left side content when sliding"
  },
  right: {
    desc: "Right side content when sliding"
  },
  top: {
    desc: "Top side content when sliding"
  },
  bottom: {
    desc: "Bottom side content when sliding"
  }
};
var events = {
  left: {
    desc: "Emitted when user finished sliding the item to the left",
    params: {
      details: {
        type: "Object",
        desc: "Details",
        definition: {
          reset: {
            type: "Function",
            required: true,
            desc: "When called, it resets the component to its initial non-slided state",
            params: null,
            returns: null
          }
        }
      }
    }
  },
  right: {
    desc: "Emitted when user finished sliding the item to the right",
    params: {
      details: {
        type: "Object",
        desc: "Details",
        definition: {
          reset: {
            type: "Function",
            required: true,
            desc: "When called, it resets the component to its initial non-slided state",
            params: null,
            returns: null
          }
        }
      }
    }
  },
  top: {
    desc: "Emitted when user finished sliding the item up",
    params: {
      details: {
        type: "Object",
        desc: "Details",
        definition: {
          reset: {
            type: "Function",
            required: true,
            desc: "When called, it resets the component to its initial non-slided state",
            params: null,
            returns: null
          }
        }
      }
    }
  },
  bottom: {
    desc: "Emitted when user finished sliding the item down",
    params: {
      details: {
        type: "Object",
        desc: "Details",
        definition: {
          reset: {
            type: "Function",
            required: true,
            desc: "When called, it resets the component to its initial non-slided state",
            params: null,
            returns: null
          }
        }
      }
    }
  },
  slide: {
    desc: "Emitted while user is sliding the item to one of the available sides",
    params: {
      details: {
        type: "Object",
        desc: "Details",
        definition: {
          side: {
            type: "String",
            required: true,
            desc: "Side to which sliding is taking effect",
            values: [
              "left",
              "right",
              "top",
              "bottom"
            ]
          },
          ratio: {
            type: "Number",
            required: true,
            desc: "Ratio of how much of the required slide was performed (0 <= x <= 1)"
          },
          isReset: {
            type: "Boolean",
            required: true,
            desc: "Ratio has been reset"
          }
        }
      }
    }
  },
  action: {
    desc: "Emitted when user finished sliding the item to either sides",
    params: {
      details: {
        type: "Object",
        desc: "Details",
        definition: {
          side: {
            type: "String",
            required: true,
            desc: "Side to which sliding has taken effect",
            values: [
              "left",
              "right",
              "top",
              "bottom"
            ]
          },
          reset: {
            type: "Function",
            required: true,
            desc: "When called, it resets the component to its initial non-slided state",
            params: null,
            returns: null
          }
        }
      }
    }
  }
};
var methods = {
  reset: {
    desc: "Reset to initial state (not swiped to any side)"
  }
};
var QSlideItem_default = {
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
