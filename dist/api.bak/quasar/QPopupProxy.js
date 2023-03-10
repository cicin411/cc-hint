// src/api/quasar/QPopupProxy.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/popup-proxy"
};
var props = {
  target: {
    type: [
      "Boolean",
      "String",
      "Element"
    ],
    desc: "Configure a target element to trigger component toggle; 'true' means it enables the parent DOM element, 'false' means it disables attaching events to any DOM elements; By using a String (CSS selector) or a DOM element it attaches the events to the specified DOM element (if it exists)",
    default: true,
    values: [
      "(Boolean) true",
      "(Boolean) false",
      "(CSS selector)",
      "(DOM Element)"
    ],
    examples: [
      ':target="false"',
      ':target="$refs.target"',
      'target=".my-parent"',
      'target="#target-id"'
    ],
    category: "behavior",
    required: false
  },
  "no-parent-event": {
    type: "Boolean",
    desc: "Skips attaching events to the target DOM element (that trigger the element to get shown)",
    category: "behavior"
  },
  "context-menu": {
    type: "Boolean",
    desc: "Allows the component to behave like a context menu, which opens with a right mouse click (or long tap on mobile)",
    category: "behavior"
  },
  "model-value": {
    desc: "Defines the state of the component (shown/hidden); Either use this property (along with a listener for 'update:modelValue' event) OR use v-model directive",
    required: false,
    syncable: true,
    category: "model",
    type: "Boolean"
  },
  breakpoint: {
    type: [
      "Number",
      "String"
    ],
    desc: "Breakpoint (in pixels) of window width/height (whichever is smaller) from where a Menu will get to be used instead of a Dialog",
    default: 450,
    category: "behavior",
    required: false
  }
};
var slots = {
  default: {
    desc: "Default slot in the devland unslotted content of the component"
  }
};
var events = {
  "update:model-value": {
    desc: "Emitted when the component needs to change the model; Is also used by v-model",
    params: {
      value: {
        type: "Any",
        desc: "New model value",
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
  hide: {
    desc: "Emitted after component has triggered hide()",
    params: {
      evt: {
        type: "Event",
        desc: "JS event object",
        required: true
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
var computedProps = {
  currentComponent: {
    type: "Object",
    desc: "Access current underlying component (QMenu or QDialog)",
    definition: {
      type: {
        type: "String",
        desc: "Component type",
        values: [
          "dialog",
          "menu"
        ]
      },
      ref: {
        type: "Component",
        tsType: "QPopupProxyInnerComponent",
        desc: "The actual component (QMenu or QDialog); Access it directly, without '.value'"
      }
    }
  }
};
var QPopupProxy_default = {
  type,
  meta,
  props,
  slots,
  events,
  methods,
  computedProps
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  computedProps,
  events,
  meta,
  methods,
  props,
  slots,
  type
});
