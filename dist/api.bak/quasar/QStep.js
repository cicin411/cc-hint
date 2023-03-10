// src/api/quasar/QStep.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/stepper"
};
var props = {
  name: {
    type: "Any",
    desc: "Panel name",
    required: true,
    examples: [
      "accounts",
      "firstPanel",
      ':name="1"'
    ],
    category: "general"
  },
  disable: {
    type: "Boolean",
    desc: "Put component in disabled mode",
    category: "state"
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
    category: "header"
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
  title: {
    type: "String",
    desc: "Step title",
    required: true,
    examples: [
      "Ad Groups",
      "Payment"
    ],
    category: "header"
  },
  caption: {
    type: "String",
    desc: "Step\u2019s additional information that appears beneath the title",
    examples: [
      "Create an account",
      "Payment details"
    ],
    category: "header"
  },
  prefix: {
    type: [
      "String",
      "Number"
    ],
    desc: "Step's prefix (max 2 characters) which replaces the icon if step does not has error, is being edited or is marked as done",
    examples: [
      "1",
      "2",
      "A",
      "B"
    ],
    category: "header"
  },
  "done-icon": {
    type: "String",
    desc: "Icon name following Quasar convention; If 'none' (String) is used as value, then it will defer to prefix or the regular icon for this state; Make sure you have the icon library installed unless you are using 'img:' prefix",
    examples: [
      "map",
      "ion-add",
      "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
      "img:path/to/some_image.png"
    ],
    category: "header"
  },
  "done-color": {
    type: "String",
    desc: "Color name for component from the Quasar Color Palette",
    examples: [
      "primary",
      "teal-10"
    ],
    category: "header"
  },
  "active-icon": {
    type: "String",
    desc: "Icon name following Quasar convention; If 'none' (String) is used as value, then it will defer to prefix or the regular icon for this state; Make sure you have the icon library installed unless you are using 'img:' prefix",
    examples: [
      "map",
      "ion-add",
      "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
      "img:path/to/some_image.png"
    ],
    category: "header"
  },
  "active-color": {
    type: "String",
    desc: "Color name for component from the Quasar Color Palette",
    examples: [
      "primary",
      "teal-10"
    ],
    category: "header"
  },
  "error-icon": {
    type: "String",
    desc: "Icon name following Quasar convention; If 'none' (String) is used as value, then it will defer to prefix or the regular icon for this state; Make sure you have the icon library installed unless you are using 'img:' prefix",
    examples: [
      "map",
      "ion-add",
      "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
      "img:path/to/some_image.png"
    ],
    category: "header"
  },
  "error-color": {
    type: "String",
    desc: "Color name for component from the Quasar Color Palette",
    examples: [
      "primary",
      "teal-10"
    ],
    category: "header"
  },
  "header-nav": {
    type: "Boolean",
    default: true,
    desc: "Allow navigation through the header",
    category: "behavior",
    required: false
  },
  done: {
    type: "Boolean",
    desc: "Mark the step as 'done'",
    category: "state"
  },
  error: {
    type: "Boolean",
    desc: "Mark the step as having an error",
    category: "state"
  }
};
var slots = {
  default: {
    desc: "The content of the step; Can also contain a QStepperNavigation if you want to handle step navigation and don't have a global navigation in place"
  }
};
var QStep_default = {
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
