// src/api/quasar/QPagination.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/pagination"
};
var props = {
  "model-value": {
    desc: "Current page (must be between min/max)",
    required: true,
    syncable: true,
    category: "model",
    type: "Number"
  },
  min: {
    type: [
      "Number",
      "String"
    ],
    desc: "Minimum page (must be lower than 'max')",
    default: 1,
    category: "model",
    required: false
  },
  max: {
    type: [
      "Number",
      "String"
    ],
    desc: "Number of last page (must be higher than 'min')",
    required: true,
    category: "model"
  },
  dark: {
    type: "Boolean",
    desc: "Notify the component that the background is a dark color (useful when you are using it along with the 'input' prop)",
    category: "style"
  },
  size: {
    type: "String",
    desc: "Button size in CSS units, including unit name",
    examples: [
      "20px"
    ],
    category: "style"
  },
  disable: {
    type: "Boolean",
    desc: "Put component in disabled mode",
    category: "state"
  },
  input: {
    type: "Boolean",
    desc: "Use an input instead of buttons",
    category: "content"
  },
  "icon-prev": {
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
  "icon-next": {
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
  "icon-first": {
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
  "icon-last": {
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
  "to-fn": {
    type: "Function",
    desc: "Generate link for page buttons; For best performance, reference it from your scope and do not define it inline",
    params: {
      page: {
        type: "Number",
        desc: "Page number to navigate to"
      }
    },
    returns: {
      type: [
        "Object",
        "String"
      ],
      desc: "Object or String that can be passed to a <router-link> as `to` parameter"
    },
    examples: [
      ':to-fn="page => ({ query: { page } })"'
    ],
    category: "content"
  },
  "boundary-links": {
    type: "Boolean",
    desc: "Show boundary button links",
    category: "content"
  },
  "boundary-numbers": {
    type: "Boolean",
    desc: "Always show first and last page buttons (if not using 'input')",
    category: "content"
  },
  "direction-links": {
    type: "Boolean",
    desc: "Show direction buttons",
    category: "content"
  },
  ellipses: {
    type: "Boolean",
    desc: "Show ellipses (...) when pages are available",
    category: "content"
  },
  "max-pages": {
    type: [
      "Number",
      "String"
    ],
    default: 0,
    desc: "Maximum number of page links to display at a time; 0 means Infinite",
    category: "content",
    required: false
  },
  flat: {
    type: "Boolean",
    desc: "Use 'flat' design for non-active buttons (it's the default option)",
    category: "style"
  },
  outline: {
    type: "Boolean",
    desc: "Use 'outline' design for non-active buttons",
    category: "style"
  },
  unelevated: {
    type: "Boolean",
    desc: "Remove shadow for non-active buttons",
    category: "style"
  },
  push: {
    type: "Boolean",
    desc: "Use 'push' design for non-active buttons",
    category: "style"
  },
  color: {
    type: "String",
    desc: "Color name from the Quasar Color Palette for the non-active buttons",
    examples: [
      "primary",
      "teal-10"
    ],
    category: "style",
    default: "primary",
    required: false
  },
  "text-color": {
    type: "String",
    desc: "Text color name from the Quasar Color Palette for the ACTIVE buttons",
    examples: [
      "primary",
      "teal-10"
    ],
    category: "style"
  },
  "active-design": {
    type: "String",
    desc: "The design of the ACTIVE button, similar to the flat/outline/push/unelevated props (but those are used for non-active buttons)",
    values: [
      "flat",
      "outline",
      "push",
      "unelevated"
    ],
    category: "style",
    addedIn: "v2.10"
  },
  "active-color": {
    type: "String",
    desc: "Color name from the Quasar Color Palette for the ACTIVE button",
    examples: [
      "primary",
      "teal-10"
    ],
    category: "style",
    default: "primary",
    required: false
  },
  "active-text-color": {
    type: "String",
    desc: "Text color name from the Quasar Color Palette for the ACTIVE button",
    examples: [
      "primary",
      "teal-10"
    ],
    category: "style"
  },
  round: {
    type: "Boolean",
    desc: "Makes a circle shaped button for all buttons",
    category: "style"
  },
  rounded: {
    type: "Boolean",
    desc: "Applies a more prominent border-radius for a squared shape button for all buttons",
    category: "style"
  },
  glossy: {
    type: "Boolean",
    desc: "Applies a glossy effect for all buttons",
    category: "style"
  },
  gutter: {
    type: "String",
    desc: "Apply custom gutter; Size in CSS units, including unit name or standard size name (none|xs|sm|md|lg|xl)",
    default: "2px",
    examples: [
      "16px",
      "10px 5px",
      "2rem",
      "xs",
      "md lg",
      "2px 2px 5px 7px"
    ],
    category: "style",
    addedIn: "v2.10",
    required: false
  },
  padding: {
    type: "String",
    desc: "Apply custom padding (vertical [horizontal]); Size in CSS units, including unit name or standard size name (none|xs|sm|md|lg|xl); Also removes the min width and height when set",
    examples: [
      "16px",
      "10px 5px",
      "2rem",
      "xs",
      "md lg",
      "2px 2px 5px 7px"
    ],
    category: "style"
  },
  "input-style": {
    type: [
      "String",
      "Array",
      "Object"
    ],
    tsType: "VueStyleProp",
    desc: "Style definitions to be attributed to the input (if using one)",
    examples: [
      "background-color: #ff0000",
      `:input-style="{ backgroundColor: '#ff0000' }"`
    ],
    category: "style"
  },
  "input-class": {
    type: [
      "String",
      "Array",
      "Object"
    ],
    tsType: "VueClassProp",
    desc: "Class definitions to be attributed to the input (if using one)",
    examples: [
      "my-special-class",
      `:input-class="{ 'my-special-class': <condition> }"`
    ],
    category: "style"
  },
  ripple: {
    type: [
      "Boolean",
      "Object"
    ],
    desc: "Configure buttons material ripple (disable it by setting it to 'false' or supply a config object); Does not applies to boundary and ellipsis buttons",
    default: true,
    examples: [
      false,
      "{ early: true, center: true, color: 'teal', keyCodes: [] }"
    ],
    category: "style",
    required: false
  }
};
var events = {
  "update:model-value": {
    desc: "Emitted when the component needs to change the model; Is also used by v-model",
    params: {
      value: {
        type: "Number",
        desc: "New model value",
        required: true
      }
    }
  }
};
var methods = {
  set: {
    desc: "Go directly to the specified page",
    params: {
      pageNumber: {
        type: "Number",
        desc: "Page number to go to"
      }
    }
  },
  setByOffset: {
    desc: "Increment/Decrement current page by offset",
    params: {
      offset: {
        type: "Number",
        desc: "Offset page, can be negative or positive"
      }
    }
  }
};
var QPagination_default = {
  type,
  meta,
  props,
  events,
  methods
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  events,
  meta,
  methods,
  props,
  type
});
