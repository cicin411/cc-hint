// src/api/quasar/QTab.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/tabs"
};
var props = {
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
  label: {
    type: [
      "Number",
      "String"
    ],
    desc: "A number or string to label the tab",
    examples: [
      "Home"
    ],
    category: "content"
  },
  alert: {
    type: [
      "Boolean",
      "String"
    ],
    desc: "Adds an alert symbol to the tab, notifying the user there are some updates; If its value is not a Boolean, then you can specify a color",
    examples: [
      "alert",
      'alert="purple"'
    ],
    category: "content"
  },
  "alert-icon": {
    type: "String",
    desc: "Adds a floating icon to the tab, notifying the user there are some updates; It's displayed only if 'alert' is set; Can use the color specified by 'alert' prop",
    examples: [
      'alert-icon="alarm_on"'
    ],
    category: "content"
  },
  name: {
    type: [
      "Number",
      "String"
    ],
    desc: "Panel name",
    default: "A random UID",
    examples: [
      "home",
      ':name="1"'
    ],
    category: "general",
    required: false
  },
  "no-caps": {
    type: "Boolean",
    desc: "Turns off capitalizing all letters within the tab (which is the default)",
    category: "content"
  },
  "content-class": {
    type: "String",
    desc: "Class definitions to be attributed to the content wrapper",
    examples: [
      "my-special-class"
    ],
    category: "style"
  },
  ripple: {
    type: [
      "Boolean",
      "Object"
    ],
    desc: "Configure material ripple (disable it by setting it to 'false' or supply a config object)",
    default: true,
    examples: [
      false,
      "{ early: true, center: true, color: 'teal', keyCodes: [] }"
    ],
    category: "style",
    required: false
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
  disable: {
    type: "Boolean",
    desc: "Put component in disabled mode",
    category: "state"
  }
};
var slots = {
  default: {
    desc: "Suggestion: QMenu, QTooltip"
  }
};
var QTab_default = {
  type,
  meta,
  props,
  slots
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  meta,
  props,
  slots,
  type
});
