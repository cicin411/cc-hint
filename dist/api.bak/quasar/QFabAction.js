// src/api/quasar/QFabAction.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/floating-action-button"
};
var props = {
  type: {
    type: "String",
    desc: "Define the button HTML DOM type",
    default: "a",
    values: [
      "a",
      "submit",
      "button",
      "reset"
    ],
    category: "general",
    required: false
  },
  outline: {
    type: "Boolean",
    desc: "Use 'outline' design for Fab button",
    category: "style"
  },
  push: {
    type: "Boolean",
    desc: "Use 'push' design for Fab button",
    category: "style"
  },
  flat: {
    type: "Boolean",
    desc: "Use 'flat' design for Fab button",
    category: "style"
  },
  unelevated: {
    type: "Boolean",
    desc: "Remove shadow",
    category: "style"
  },
  padding: {
    type: "String",
    desc: "Apply custom padding (vertical [horizontal]); Size in CSS units, including unit name or standard size name (none|xs|sm|md|lg|xl); Also removes the min width and height when set",
    examples: [
      "16px",
      "10px 5px",
      "2rem",
      "xs",
      "md lg"
    ],
    category: "style"
  },
  color: {
    type: "String",
    desc: "Color name for component from the Quasar Color Palette",
    examples: [
      "primary",
      "teal-10"
    ],
    category: "style"
  },
  "text-color": {
    type: "String",
    desc: "Overrides text color (if needed); Color name from the Quasar Color Palette",
    examples: [
      "primary",
      "teal-10"
    ],
    category: "style"
  },
  glossy: {
    type: "Boolean",
    desc: "Apply the glossy effect over the button",
    category: "style"
  },
  "external-label": {
    type: "Boolean",
    desc: "Display label besides the FABs, as external content",
    category: "style|content"
  },
  label: {
    type: [
      "String",
      "Number"
    ],
    desc: "The label that will be shown when Fab is extended",
    examples: [
      "Button Label"
    ],
    category: "content"
  },
  "label-position": {
    type: "String",
    desc: "Position of the label around the icon",
    values: [
      "top",
      "right",
      "bottom",
      "left"
    ],
    category: "style|content"
  },
  "hide-label": {
    type: "Boolean",
    desc: "Hide the label; Useful for animation purposes where you toggle the visibility of the label",
    category: "style|content"
  },
  "label-class": {
    type: [
      "String",
      "Array",
      "Object"
    ],
    tsType: "VueClassProp",
    desc: "Class definitions to be attributed to the label container",
    examples: [
      "my-special-class",
      `:input-class="{ 'my-special-class': <condition> }"`
    ],
    category: "style"
  },
  "label-style": {
    type: [
      "String",
      "Array",
      "Object"
    ],
    tsType: "VueStyleProp",
    desc: "Style definitions to be attributed to the label container",
    examples: [
      "background-color: #ff0000",
      `:input-style="{ backgroundColor: '#ff0000' }"`
    ],
    category: "style"
  },
  square: {
    type: "Boolean",
    desc: "Apply a rectangle aspect to the FAB",
    category: "style"
  },
  disable: {
    type: "Boolean",
    desc: "Put component in disabled mode",
    category: "state"
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
  },
  icon: {
    type: "String",
    desc: "Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix; If 'none' (String) is used as value then no icon is rendered (but screen real estate will still be used for it)",
    examples: [
      "map",
      "ion-add",
      "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
      "img:path/to/some_image.png"
    ],
    category: "content"
  },
  anchor: {
    type: "String",
    desc: "How to align the Fab Action relative to Fab expand side; By default it uses the align specified in QFab",
    values: [
      "start",
      "center",
      "end"
    ],
    category: "style|content"
  },
  to: {
    type: [
      "String",
      "Object"
    ],
    desc: "Equivalent to Vue Router <router-link> 'to' property",
    examples: [
      "/home/dashboard",
      `:to="{ name: 'my-route-name' }"`
    ],
    category: "router"
  },
  replace: {
    type: "Boolean",
    desc: "Equivalent to Vue Router <router-link> 'replace' property",
    category: "router"
  }
};
var slots = {
  default: {
    desc: "Suggestion for this slot: QTooltip"
  },
  icon: {
    desc: "Slot for icon; Suggestion: QIcon",
    addedIn: "v2.4"
  },
  label: {
    desc: "Slot for label",
    addedIn: "v2.4"
  }
};
var events = {
  click: {
    desc: "Emitted when user clicks/taps on the component",
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
  click: {
    desc: "Emulate click on QFabAction",
    params: {
      evt: {
        type: "Event",
        desc: "JS event object"
      }
    }
  }
};
var QFabAction_default = {
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
