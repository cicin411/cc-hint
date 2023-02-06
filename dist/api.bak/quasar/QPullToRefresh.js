// src/api/quasar/QPullToRefresh.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/pull-to-refresh"
};
var props = {
  color: {
    type: "String",
    desc: "Color name for the icon from the Quasar Color Palette",
    examples: [
      "primary",
      "teal-10"
    ],
    category: "style"
  },
  "bg-color": {
    type: "String",
    desc: "Color name for background of the icon container from the Quasar Color Palette",
    examples: [
      "primary",
      "teal-10"
    ],
    category: "style"
  },
  icon: {
    type: "String",
    desc: "Icon to display when refreshing the content",
    examples: [
      "map",
      "ion-add",
      "img:https://cdn.quasar.dev/logo-v2/svg/logo.svg",
      "img:path/to/some_image.png"
    ],
    category: "content"
  },
  "no-mouse": {
    type: "Boolean",
    desc: "Don't listen for mouse events",
    category: "behavior"
  },
  disable: {
    type: "Boolean",
    desc: "Put component in disabled mode",
    category: "state"
  },
  "scroll-target": {
    type: [
      "Element",
      "String"
    ],
    desc: "CSS selector or DOM element to be used as a custom scroll container instead of the auto detected one",
    examples: [
      ':scroll-target="$refs.scrollTarget"',
      'scroll-target=".scroll-target-class"',
      'scroll-target="#scroll-target-id"',
      'scroll-target="body"'
    ],
    category: "behavior"
  }
};
var slots = {
  default: {
    desc: "Content (area controlled by the component) goes here"
  }
};
var events = {
  refresh: {
    desc: "Called whenever a refresh is triggered; at this time, your function should load more data",
    params: {
      done: {
        type: "Function",
        desc: "Call the done() function when your data has been refreshed",
        params: null,
        returns: null
      }
    }
  }
};
var methods = {
  trigger: {
    desc: "Triggers a refresh"
  },
  updateScrollTarget: {
    desc: "Updates the scroll target; Useful when the parent elements change so that the scrolling target also changes"
  }
};
var QPullToRefresh_default = {
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
