// src/api/quasar/Ripple.json
var type = "directive";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-directives/material-ripple"
};
var quasarConfOptions = {
  propName: "ripple",
  definition: {
    early: {
      type: "Boolean",
      desc: "Trigger early/immediately on user interaction"
    },
    stop: {
      type: "Boolean",
      desc: "Stop click/touch event propagation"
    },
    center: {
      type: "Boolean",
      desc: "Ripple starts from the absolute center"
    },
    color: {
      type: "String",
      desc: "Color name from Quasar Color Palette; Overrides default dynamic color",
      examples: [
        "orange-5"
      ]
    },
    keyCodes: {
      type: [
        "Array",
        "Number"
      ],
      desc: "List of keyCode that should trigger the ripple",
      examples: [
        "[]",
        "[13, 32]"
      ]
    }
  }
};
var value = {
  type: [
    "Boolean",
    "Object"
  ],
  desc: "Boolean (if just wanting to enable/disable) or Object for configuring more options",
  definition: {
    early: {
      type: "Boolean",
      desc: "Trigger early/immediately on user interaction"
    },
    stop: {
      type: "Boolean",
      desc: "Stop click/touch event propagation"
    },
    center: {
      type: "Boolean",
      desc: "Ripple starts from the absolute center"
    },
    color: {
      type: "String",
      desc: "Color name from Quasar Color Palette; Overrides default dynamic color",
      examples: [
        "orange-5"
      ]
    },
    keyCodes: {
      type: [
        "Array",
        "Number"
      ],
      desc: "List of keyCode that should trigger the ripple",
      examples: [
        "[]",
        "[13, 32]"
      ]
    }
  },
  examples: [
    'v-ripple="booleanState"',
    `v-ripple="{ center: true, color: 'primary', keyCodes: [] }"`
  ]
};
var arg = {
  type: "String",
  desc: "Color name from Quasar Color Palette; Overrides default dynamic color",
  examples: [
    "v-ripple:orange-5"
  ]
};
var modifiers = {
  early: {
    type: "Boolean",
    desc: "Trigger early/immediately on user interaction"
  },
  stop: {
    type: "Boolean",
    desc: "Stop click/touch event propagation",
    examples: [
      "v-ripple.stop"
    ]
  },
  center: {
    type: "Boolean",
    desc: "Ripple starts from the absolute center",
    examples: [
      "v-ripple.center"
    ]
  }
};
var Ripple_default = {
  type,
  meta,
  quasarConfOptions,
  value,
  arg,
  modifiers
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  arg,
  meta,
  modifiers,
  quasarConfOptions,
  type,
  value
});
