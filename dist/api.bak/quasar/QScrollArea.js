// src/api/quasar/QScrollArea.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/scroll-area"
};
var props = {
  dark: {
    type: "Boolean",
    desc: "Notify the component that the background is a dark color",
    category: "style"
  },
  "bar-style": {
    type: [
      "String",
      "Array",
      "Object"
    ],
    tsType: "VueStyleProp",
    desc: "Object with CSS properties and values for custom styling the scrollbars (both vertical and horizontal)",
    examples: [
      `:bar-style="{ borderRadius: '5px', background: 'red', opacity: 1 }"`
    ],
    category: "style"
  },
  "vertical-bar-style": {
    type: [
      "String",
      "Array",
      "Object"
    ],
    tsType: "VueStyleProp",
    desc: "Object with CSS properties and values for custom styling the vertical scrollbar; Is applied on top of 'bar-style' prop",
    examples: [
      `:bar-style="{ right: '4px', borderRadius: '5px', background: 'red', width: '10px', opacity: 1 }"`
    ],
    category: "style"
  },
  "horizontal-bar-style": {
    type: [
      "String",
      "Array",
      "Object"
    ],
    tsType: "VueStyleProp",
    desc: "Object with CSS properties and values for custom styling the horizontal scrollbar; Is applied on top of 'bar-style' prop",
    examples: [
      `:bar-style="{ bottom: '4px', borderRadius: '5px', background: 'red', height: '10px', opacity: 1 }"`
    ],
    category: "style"
  },
  "thumb-style": {
    type: "Object",
    tsType: "VueStyleObjectProp",
    desc: "Object with CSS properties and values for custom styling the thumb of scrollbars (both vertical and horizontal)",
    examples: [
      `:thumb-style="{ right: '4px', borderRadius: '5px', background: 'red', width: '10px', opacity: 1 }"`
    ],
    category: "style"
  },
  "vertical-thumb-style": {
    type: "Object",
    tsType: "VueStyleObjectProp",
    desc: "Object with CSS properties and values for custom styling the thumb of the vertical scrollbar; Is applied on top of 'thumb-style' prop",
    examples: [
      `:thumb-style="{ right: '4px', borderRadius: '5px', background: 'red', width: '10px', opacity: 1 }"`
    ],
    category: "style"
  },
  "horizontal-thumb-style": {
    type: "Object",
    tsType: "VueStyleObjectProp",
    desc: "Object with CSS properties and values for custom styling the thumb of the horizontal scrollbar; Is applied on top of 'thumb-style' prop",
    examples: [
      `:thumb-style="{ bottom: '4px', borderRadius: '5px', background: 'red', height: '10px', opacity: 1 }"`
    ],
    category: "style"
  },
  "content-style": {
    type: [
      "String",
      "Array",
      "Object"
    ],
    tsType: "VueStyleProp",
    desc: "Object with CSS properties and values for styling the container of QScrollArea",
    examples: [
      `:content-style="{ backgroundColor: '#C0C0C0' }"`
    ],
    category: "style"
  },
  "content-active-style": {
    type: [
      "String",
      "Array",
      "Object"
    ],
    tsType: "VueStyleProp",
    desc: "Object with CSS properties and values for styling the container of QScrollArea when scroll area becomes active (is mouse hovered)",
    examples: [
      `:content-active-style="{ backgroundColor: 'white' }"`
    ],
    category: "style"
  },
  visible: {
    type: "Boolean",
    desc: "Manually control the visibility of the scrollbar; Overrides default mouse over/leave behavior",
    category: "behavior"
  },
  delay: {
    type: [
      "Number",
      "String"
    ],
    desc: "When content changes, the scrollbar appears; this delay defines the amount of time (in milliseconds) before scrollbars disappear again (if component is not hovered)",
    default: 1e3,
    category: "behavior",
    required: false
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
    desc: "Default slot in the devland unslotted content of the component"
  }
};
var events = {
  scroll: {
    desc: "Emitted when scroll information changes (and listener is configured)",
    params: {
      info: {
        type: "Object",
        desc: "An object containing scroll information",
        definition: {
          ref: {
            type: "Component",
            tsType: "QScrollArea",
            required: true,
            desc: "Vue reference to the QScrollArea which triggered the event"
          },
          verticalPosition: {
            type: "Number",
            required: true,
            desc: "Vertical scroll position (in px)"
          },
          verticalPercentage: {
            type: "Number",
            required: true,
            desc: "Vertical scroll percentage (0.0 <= x <= 1.0)"
          },
          verticalSize: {
            type: "Number",
            required: true,
            desc: "Vertical scroll size (in px)"
          },
          verticalContainerSize: {
            type: "Number",
            required: true,
            desc: "Height of the container (in px)"
          },
          horizontalPosition: {
            type: "Number",
            required: true,
            desc: "Horizontal scroll position (in px)"
          },
          horizontalPercentage: {
            type: "Number",
            required: true,
            desc: "Horizontal scroll percentage (0.0 <= x <= 1.0)"
          },
          horizontalSize: {
            type: "Number",
            required: true,
            desc: "Horizontal scroll size (in px)"
          },
          horizontalContainerSize: {
            type: "Number",
            required: true,
            desc: "Width of the container (in px)"
          }
        }
      }
    }
  }
};
var methods = {
  getScrollTarget: {
    desc: "Get the scrolling DOM element target",
    returns: {
      type: "Element",
      desc: "DOM element upon which scrolling takes place"
    }
  },
  getScroll: {
    desc: "Get the current scroll information",
    returns: {
      type: "Object",
      desc: "Scroll information",
      definition: {
        verticalPosition: {
          type: "Number",
          required: true,
          desc: "Vertical scroll position (in px)"
        },
        verticalPercentage: {
          type: "Number",
          required: true,
          desc: "Vertical scroll percentage (0.0 <= x <= 1.0)"
        },
        verticalSize: {
          type: "Number",
          required: true,
          desc: "Vertical scroll size (in px)"
        },
        verticalContainerSize: {
          type: "Number",
          required: true,
          desc: "Height of the container (in px)"
        },
        horizontalPosition: {
          type: "Number",
          required: true,
          desc: "Horizontal scroll position (in px)"
        },
        horizontalPercentage: {
          type: "Number",
          required: true,
          desc: "Horizontal scroll percentage (0.0 <= x <= 1.0)"
        },
        horizontalSize: {
          type: "Number",
          required: true,
          desc: "Horizontal scroll size (in px)"
        },
        horizontalContainerSize: {
          type: "Number",
          required: true,
          desc: "Width of the container (in px)"
        }
      }
    }
  },
  getScrollPosition: {
    desc: "Get current scroll position",
    returns: {
      type: "Object",
      desc: "An object containing scroll position information",
      definition: {
        top: {
          type: "Number",
          required: true,
          desc: "Scroll offset from top (vertical)"
        },
        left: {
          type: "Number",
          required: true,
          desc: "Scroll offset from left (horizontal)"
        }
      },
      examples: [
        "{ top: 10, left: 0 }"
      ]
    }
  },
  getScrollPercentage: {
    desc: "Get current scroll position in percentage (0.0 <= x <= 1.0)",
    returns: {
      type: "Object",
      desc: "An object containing scroll position information in percentage",
      definition: {
        top: {
          type: "Number",
          required: true,
          desc: "Scroll percentage (0.0 <= x <= 1.0) offset from top (vertical)"
        },
        left: {
          type: "Number",
          required: true,
          desc: "Scroll percentage (0.0 <= x <= 1.0) offset from left (horizontal)"
        }
      },
      examples: [
        "{ top: 0.212, left: 0 }"
      ]
    }
  },
  setScrollPosition: {
    desc: "Set scroll position to an offset; If a duration (in milliseconds) is specified then the scroll is animated",
    params: {
      axis: {
        type: "String",
        required: true,
        desc: "Scroll axis",
        values: [
          "vertical",
          "horizontal"
        ]
      },
      offset: {
        type: "Number",
        required: true,
        desc: "Scroll position offset from top (in pixels)"
      },
      duration: {
        type: "Number",
        desc: "Duration (in milliseconds) enabling animated scroll"
      }
    }
  },
  setScrollPercentage: {
    desc: "Set scroll position to a percentage (0.0 <= x <= 1.0) of the total scrolling size; If a duration (in milliseconds) is specified then the scroll is animated",
    params: {
      axis: {
        type: "String",
        desc: "Scroll axis",
        values: [
          "vertical",
          "horizontal"
        ],
        required: true
      },
      offset: {
        type: "Number",
        desc: "Scroll percentage (0.0 <= x <= 1.0) of the total scrolling size",
        required: true
      },
      duration: {
        type: "Number",
        desc: "Duration (in milliseconds) enabling animated scroll"
      }
    }
  }
};
var QScrollArea_default = {
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