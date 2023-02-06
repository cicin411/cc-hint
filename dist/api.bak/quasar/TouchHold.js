// src/api/quasar/TouchHold.json
var type = "directive";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-directives/touch-hold"
};
var value = {
  type: "Function",
  desc: "Function to call after user has hold touch/click for the specified amount of time (use a non-function to disable)",
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
        position: {
          type: "Object",
          desc: "Event Position Object",
          definition: {
            top: {
              type: "Number",
              desc: "Vertical offset from top of window"
            },
            left: {
              type: "Number",
              desc: "Horizontal offset from left of window"
            }
          }
        },
        duration: {
          type: "Number",
          desc: "How long it took to trigger the event (in milliseconds)"
        }
      }
    }
  },
  returns: null,
  examples: [
    'v-touch-hold="fnToCall"',
    'v-touch-hold="void 0"'
  ]
};
var arg = {
  type: "String",
  desc: "x:y:z, where x is the amount of time to wait (in milliseconds), y is the touch event sensitivity (in pixels) and z is the mouse event sensitivity (in pixels)",
  default: "600:5:7",
  examples: [
    'v-touch-hold:400="fnToCall"',
    'v-touch-hold:400:15="fnToCall"',
    'v-touch-hold:400:10:10="fnToCall"'
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
  }
};
var TouchHold_default = {
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
