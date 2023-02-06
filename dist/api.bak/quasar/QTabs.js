// src/api/quasar/QTabs.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/tabs"
};
var props = {
  "model-value": {
    desc: "Model of the component defining current panel name; Either use this property (along with a listener for 'update:modelValue' event) OR use v-model directive",
    required: false,
    syncable: true,
    category: "model",
    type: [
      "Number",
      "String",
      "null",
      "undefined"
    ],
    examples: [
      'v-model="selectedTab"'
    ]
  },
  vertical: {
    type: "Boolean",
    desc: "Use vertical design (tabs one on top of each other rather than one next to the other horizontally)",
    category: "content"
  },
  "outside-arrows": {
    type: "Boolean",
    desc: "Reserve space for arrows to place them on each side of the tabs (the arrows fade when inactive)",
    category: "content"
  },
  "mobile-arrows": {
    type: "Boolean",
    desc: "Force display of arrows (if needed) on mobile",
    category: "content"
  },
  align: {
    type: "String",
    desc: "Horizontal alignment the tabs within the tabs container",
    default: "center",
    values: [
      "left",
      "center",
      "right",
      "justify"
    ],
    category: "content",
    required: false
  },
  breakpoint: {
    type: [
      "Number",
      "String"
    ],
    desc: "Breakpoint (in pixels) of tabs container width at which the tabs automatically turn to a justify alignment",
    default: 600,
    category: "content|behavior",
    required: false
  },
  "active-color": {
    type: "String",
    desc: "The color to be attributed to the text of the active tab",
    examples: [
      "primary",
      "teal-10"
    ],
    category: "style"
  },
  "active-bg-color": {
    type: "String",
    desc: "The color to be attributed to the background of the active tab",
    examples: [
      "primary",
      "teal-10"
    ],
    category: "style"
  },
  "indicator-color": {
    type: "String",
    desc: "The color to be attributed to the indicator (the underline) of the active tab",
    examples: [
      "primary",
      "teal-10"
    ],
    category: "style"
  },
  "content-class": {
    type: "String",
    desc: "Class definitions to be attributed to the content wrapper",
    examples: [
      "my-special-class"
    ],
    category: "style"
  },
  "active-class": {
    type: "String",
    desc: "The class to be set on the active tab",
    examples: [
      "my-active-class"
    ],
    category: "style",
    addedIn: "v2.1.4"
  },
  "left-icon": {
    type: "String",
    desc: "The name of an icon to replace the default arrow used to scroll through the tabs to the left, when the tabs extend past the width of the tabs container",
    examples: [
      "arrow_left"
    ],
    category: "content"
  },
  "right-icon": {
    type: "String",
    desc: "The name of an icon to replace the default arrow used to scroll through the tabs to the right, when the tabs extend past the width of the tabs container",
    examples: [
      "arrow_right"
    ],
    category: "content"
  },
  stretch: {
    type: "Boolean",
    desc: "When used on flexbox parent, tabs will stretch to parent's height",
    category: "content"
  },
  shrink: {
    type: "Boolean",
    desc: "By default, QTabs is set to grow to the available space; However, you can reverse that with this prop; Useful (and required) when placing the component in a QToolbar",
    category: "content"
  },
  "switch-indicator": {
    type: "Boolean",
    desc: "Switches the indicator position (on left of tab for vertical mode or above the tab for default horizontal mode)",
    category: "content"
  },
  "narrow-indicator": {
    type: "Boolean",
    desc: "Allows the indicator to be the same width as the tab's content (text or icon), instead of the whole width of the tab",
    category: "content"
  },
  "inline-label": {
    type: "Boolean",
    desc: "Allows the text to be inline with the icon, should one be used",
    category: "content"
  },
  "no-caps": {
    type: "Boolean",
    desc: "Turns off capitalizing all letters within the tab (which is the default)",
    category: "content"
  },
  dense: {
    type: "Boolean",
    desc: "Dense mode; occupies less space",
    category: "style"
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
  }
};
var QTabs_default = {
  type,
  meta,
  props,
  slots,
  events
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  events,
  meta,
  props,
  slots,
  type
});
