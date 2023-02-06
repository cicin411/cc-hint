// src/api/quasar/LoadingBar.json
var type = "plugin";
var meta = {
  docsUrl: "https://v2.quasar.dev/quasar-plugins/loading-bar"
};
var injection = "$q.loadingBar";
var quasarConfOptions = {
  propName: "loadingBar",
  definition: {
    "...props": {
      type: "Object",
      desc: "QAjaxBar component props, EXCEPT for 'hijack-filter'"
    }
  }
};
var props = {
  isActive: {
    type: "Boolean",
    desc: "Is LoadingBar active?",
    reactive: true
  }
};
var methods = {
  start: {
    desc: "Notify bar you've started a background activity",
    params: {
      speed: {
        type: "Number",
        desc: "Delay (in milliseconds) between bar progress increments",
        default: 300,
        required: false
      }
    }
  },
  stop: {
    desc: "Notify bar one background activity has finalized"
  },
  increment: {
    desc: "Manually trigger a bar progress increment",
    params: {
      amount: {
        type: "Number",
        desc: "Amount (0.0 < x < 1.0) to increment with"
      }
    }
  },
  setDefaults: {
    desc: "Set the inner QAjaxBar's props",
    params: {
      props: {
        type: "Object",
        required: true,
        desc: "QAjaxBar component props",
        examples: [
          "{ position: 'bottom', reverse: true }"
        ]
      }
    }
  }
};
var LoadingBar_default = {
  type,
  meta,
  injection,
  quasarConfOptions,
  props,
  methods
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  injection,
  meta,
  methods,
  props,
  quasarConfOptions,
  type
});
