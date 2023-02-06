// src/api/quasar/QScrollObserver.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/scroll-observer"
};
var props = {
  debounce: {
    type: [
      "String",
      "Number"
    ],
    desc: "Debounce amount (in milliseconds)",
    examples: [
      "0",
      "530"
    ],
    category: "behavior"
  },
  axis: {
    type: "String",
    desc: "Axis on which to detect changes",
    values: [
      "both",
      "vertical",
      "horizontal"
    ],
    default: "vertical",
    category: "behavior",
    required: false
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
  }
};
var events = {
  scroll: {
    desc: "Emitted when scroll position changes",
    params: {
      details: {
        type: "Object",
        desc: "Scroll details",
        definition: {
          position: {
            type: "Object",
            required: true,
            desc: "Scroll offset (from top and left)",
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
            }
          },
          direction: {
            type: "String",
            required: true,
            desc: "Direction of scroll",
            values: [
              "up",
              "down",
              "left",
              "right"
            ]
          },
          directionChanged: {
            type: "Boolean",
            required: true,
            desc: "Has scroll direction changed since event was last emitted?"
          },
          delta: {
            type: "Object",
            required: true,
            desc: "Delta of distance (in pixels) since event was last emitted",
            definition: {
              top: {
                type: "Number",
                required: true,
                desc: "Vertical delta distance since event was last emitted"
              },
              left: {
                type: "Number",
                required: true,
                desc: "Horizontal delta distance since event was last emitted"
              }
            }
          },
          inflectionPoint: {
            type: "Object",
            required: true,
            desc: "Last scroll offset where scroll direction has changed",
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
            }
          }
        }
      }
    }
  }
};
var methods = {
  trigger: {
    desc: "Emit a 'scroll' event",
    params: {
      immediately: {
        type: "Boolean",
        desc: "Skip over the debounce amount"
      }
    }
  },
  getPosition: {
    desc: "Get current scroll details under the form of an Object: { position, direction, directionChanged, inflectionPoint }"
  }
};
var QScrollObserver_default = {
  type,
  meta,
  props,
  events,
  methods
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  events,
  meta,
  methods,
  props,
  type
});
