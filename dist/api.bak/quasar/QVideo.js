// src/api/quasar/QVideo.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/video"
};
var props = {
  ratio: {
    type: [
      "String",
      "Number"
    ],
    desc: "Aspect ratio for the content; If value is a String, then avoid using a computational statement (like '16/9') and instead specify the String value of the result directly (eg. '1.7777')",
    examples: [
      ':ratio="4/3"',
      ':ratio="16/9"',
      'ratio="1"'
    ],
    category: "style"
  },
  src: {
    type: "String",
    desc: "The source url to display in an iframe",
    required: true,
    examples: [
      "https://www.youtube.com/embed/k3_tw44QsZQ"
    ],
    category: "model"
  },
  title: {
    type: "String",
    desc: "(Accessibility) Set the native 'title' attribute value of the inner iframe being used",
    required: false,
    examples: [
      "My Daily Marathon"
    ],
    category: "accessibility",
    addedIn: "v2.4.3"
  },
  fetchpriority: {
    type: "String",
    desc: "Provides a hint of the relative priority to use when fetching the iframe document",
    default: "auto",
    values: [
      "high",
      "low",
      "auto"
    ],
    category: "behavior",
    addedIn: "v2.6.6",
    required: false
  },
  loading: {
    type: "String",
    desc: "Indicates how the browser should load the iframe",
    default: "eager",
    values: [
      "eager",
      "lazy"
    ],
    category: "behavior",
    addedIn: "v2.6.6",
    required: false
  },
  referrerpolicy: {
    type: "String",
    desc: "Indicates which referrer to send when fetching the frame's resource",
    default: "strict-origin-when-cross-origin",
    values: [
      "no-referrer",
      "no-referrer-when-downgrade",
      "origin",
      "origin-when-cross-origin",
      "same-origin",
      "strict-origin",
      "strict-origin-when-cross-origin",
      "unsafe-url"
    ],
    category: "behavior",
    addedIn: "v2.6.6",
    required: false
  }
};
var QVideo_default = {
  type,
  meta,
  props
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  meta,
  props,
  type
});
