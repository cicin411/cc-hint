// src/api/quasar/AppFullscreen.json
var type = "plugin";
var meta = {
  docsUrl: "https://v2.quasar.dev/quasar-plugins/app-fullscreen"
};
var injection = "$q.fullscreen";
var props = {
  isCapable: {
    type: "Boolean",
    desc: "Does browser support it?"
  },
  isActive: {
    type: "Boolean",
    desc: "Is Fullscreen active?"
  },
  activeEl: {
    type: [
      "Element",
      "null"
    ],
    desc: "The DOM element used as root for fullscreen, otherwise 'null'",
    examples: [
      "document.fullscreenElement",
      "null"
    ]
  }
};
var methods = {
  request: {
    desc: "Request going into Fullscreen (with optional target)",
    params: {
      target: {
        type: "Element",
        desc: "Optional Element of target to request Fullscreen on",
        examples: [
          "document.getElementById('example')"
        ]
      }
    },
    returns: {
      type: "Promise<void>",
      desc: "A Promise which is resolved when transitioned to fullscreen mode. It gets rejected with 'Not capable' if the browser is not capable, and with an Error object if something else went wrong.",
      examples: [
        "request().then(response => { ... }).catch(err => { ... })"
      ]
    }
  },
  exit: {
    desc: "Request exiting out of Fullscreen mode",
    returns: {
      type: "Promise<void>",
      desc: "A Promise which is resolved when exited out of fullscreen mode. It gets rejected with 'Not capable' if the browser is not capable, and with an Error object if something else went wrong.",
      examples: [
        "exit().then(response => { ... }).catch(err => { ... })"
      ]
    }
  },
  toggle: {
    desc: "Request toggling Fullscreen mode (with optional target if requesting going into Fullscreen only)",
    params: {
      target: {
        type: "Element",
        desc: "Optional Element of target to request Fullscreen on",
        examples: [
          "document.getElementById('example')"
        ]
      }
    },
    returns: {
      type: "Promise<void>",
      desc: "A Promise which is resolved when transitioned to / exited out of fullscreen mode. It gets rejected with 'Not capable' if the browser is not capable, and with an Error object if something else went wrong.",
      examples: [
        "toggle().then(response => { ... }).catch(err => { ... })"
      ]
    }
  }
};
var AppFullscreen_default = {
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
