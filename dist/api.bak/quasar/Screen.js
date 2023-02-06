// src/api/quasar/Screen.json
var type = "plugin";
var meta = {
  docsUrl: "https://v2.quasar.dev/options/screen-plugin"
};
var injection = "$q.screen";
var props = {
  width: {
    type: "Number",
    desc: "Screen width (in pixels)",
    reactive: true,
    examples: [
      452
    ]
  },
  height: {
    type: "Number",
    desc: "Screen height (in pixels)",
    reactive: true,
    examples: [
      721
    ]
  },
  name: {
    type: "String",
    desc: "Tells current window breakpoint",
    values: [
      "xs",
      "sm",
      "md",
      "lg",
      "xl"
    ],
    reactive: true
  },
  sizes: {
    type: "Object",
    desc: "Breakpoints (in pixels)",
    definition: {
      sm: {
        type: "Number",
        desc: "Breakpoint width size (minimum size)"
      },
      md: {
        type: "Number",
        desc: "Breakpoint width size (minimum size)"
      },
      lg: {
        type: "Number",
        desc: "Breakpoint width size (minimum size)"
      },
      xl: {
        type: "Number",
        desc: "Breakpoint width size (minimum size)"
      }
    },
    reactive: true,
    examples: [
      "{ sm: 600, md: 1024, lg: 1440, xl: 1920 }"
    ]
  },
  lt: {
    type: "Object",
    desc: "Tells if current screen width is lower than breakpoint-name",
    reactive: true,
    definition: {
      sm: {
        type: "Boolean",
        desc: "Is current screen width lower than this breakpoint's lowest limit?"
      },
      md: {
        type: "Boolean",
        desc: "Is current screen width lower than this breakpoint's lowest limit?"
      },
      lg: {
        type: "Boolean",
        desc: "Is current screen width lower than this breakpoint's lowest limit?"
      },
      xl: {
        type: "Boolean",
        desc: "Is current screen width lower than this breakpoint's lowest limit?"
      }
    },
    examples: [
      "{ sm: false, md: true, lg: true, xl: true }"
    ]
  },
  gt: {
    type: "Object",
    desc: "Tells if current screen width is greater than breakpoint-name",
    reactive: true,
    definition: {
      xs: {
        type: "Boolean",
        desc: "Is current screen width greater than this breakpoint's max limit?"
      },
      sm: {
        type: "Boolean",
        desc: "Is current screen width greater than this breakpoint's max limit?"
      },
      md: {
        type: "Boolean",
        desc: "Is current screen width greater than this breakpoint's max limit?"
      },
      lg: {
        type: "Boolean",
        desc: "Is current screen width greater than this breakpoint's max limit?"
      }
    },
    examples: [
      "{ xs: true, sm: true, md: false, lg: false, xl: false }"
    ]
  },
  xs: {
    type: "Boolean",
    desc: "Current screen width fits exactly 'xs' breakpoint",
    reactive: true
  },
  sm: {
    type: "Boolean",
    desc: "Current screen width fits exactly 'sm' breakpoint",
    reactive: true
  },
  md: {
    type: "Boolean",
    desc: "Current screen width fits exactly 'md' breakpoint",
    reactive: true
  },
  lg: {
    type: "Boolean",
    desc: "Current screen width fits exactly 'lg' breakpoint",
    reactive: true
  },
  xl: {
    type: "Boolean",
    desc: "Current screen width fits exactly 'xl' breakpoint",
    reactive: true
  }
};
var methods = {
  setSizes: {
    desc: "Override default breakpoint sizes",
    params: {
      breakpoints: {
        type: "Object",
        desc: "Pick what you want to override",
        definition: {
          sm: {
            type: "Number",
            desc: "Breakpoint width size (minimum size)"
          },
          md: {
            type: "Number",
            desc: "Breakpoint width size (minimum size)"
          },
          lg: {
            type: "Number",
            desc: "Breakpoint width size (minimum size)"
          },
          xl: {
            type: "Number",
            desc: "Breakpoint width size (minimum size)"
          }
        },
        required: true
      }
    }
  },
  setDebounce: {
    desc: "Debounce update of all props when screen width/height changes",
    params: {
      amount: {
        type: "Number",
        desc: "Amount in milliseconds",
        required: true
      }
    }
  }
};
var Screen_default = {
  type,
  meta,
  injection,
  props,
  methods
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  injection,
  meta,
  methods,
  props,
  type
});
