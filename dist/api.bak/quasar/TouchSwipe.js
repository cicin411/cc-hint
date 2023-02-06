// src/api/quasar/TouchSwipe.json
var type = "directive";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-directives/touch-swipe"
};
var value = {
  type: "Function",
  desc: "Handler for swipe (use a non-function to disable)",
  params: {
    details: {
      type: "Object",
      desc: "Event details",
      definition: {
        evt: {
          type: "Event",
          desc: "Original JS event Object"
        },
        touch: {
          type: "Boolean",
          desc: "Triggered by a touch event"
        },
        mouse: {
          type: "Boolean",
          desc: "Triggered by a mouse event"
        },
        direction: {
          type: "String",
          desc: "Direction of movement",
          values: [
            "up",
            "right",
            "down",
            "left"
          ]
        },
        duration: {
          type: "Number",
          desc: "How long it took to trigger the event (in milliseconds)"
        },
        distance: {
          type: "Object",
          desc: "Absolute distance (in pixels) since movement started from initial point",
          definition: {
            x: {
              type: "Number",
              desc: "Absolute distance horizontally"
            },
            y: {
              type: "Number",
              desc: "Absolute distance vertically"
            }
          }
        }
      }
    }
  },
  returns: null,
  examples: [
    'v-touch-swipe="fnToCall"',
    'v-touch-swipe="void 0"'
  ]
};
var arg = {
  type: "String",
  desc: "x:y:z, where x is minimum velocity (dist/time; please use float without a dot, example: 6e-2 which is equivalent to 6 * 10^-2 = 0.06), y is minimum distance on first move on mobile, z is minimum distance on desktop until deciding if it's a swipe indeed",
  default: "6e-2:6:50",
  examples: [
    'v-touch-swipe:7e-2:10:100="fnToCall"'
  ],
  required: false
};
var modifiers = {
  capture: {
    type: "Boolean",
    desc: "Use capture for touchstart event"
  },
  mouse: {
    type: "Boolean",
    desc: "Listen for mouse events too"
  },
  mouseCapture: {
    type: "Boolean",
    desc: "Use capture for mousedown event"
  },
  horizontal: {
    type: "Boolean",
    desc: "Catch horizontal (left/right) movement"
  },
  vertical: {
    type: "Boolean",
    desc: "Catch vertical (up/down) movement"
  },
  up: {
    type: "Boolean",
    desc: "Catch swipe to up"
  },
  right: {
    type: "Boolean",
    desc: "Catch swipe to right"
  },
  down: {
    type: "Boolean",
    desc: "Catch swipe to down"
  },
  left: {
    type: "Boolean",
    desc: "Catch swipe to left"
  }
};
var TouchSwipe_default = {
  type,
  meta,
  value,
  arg,
  modifiers
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  arg,
  meta,
  modifiers,
  type,
  value
});
