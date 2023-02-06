// src/api/quasar/QBtn.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/button"
};
var props = {
  size: {
    type: "String",
    desc: "Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)",
    examples: [
      "16px",
      "2rem",
      "xs",
      "md"
    ],
    category: "style"
  },
  type: {
    type: "String",
    desc: "1) Define the button native type attribute (submit, reset, button) or 2) render component with <a> tag so you can access events even if disable or 3) Use 'href' prop and specify 'type' as a media tag",
    default: "button",
    examples: [
      "a",
      "submit",
      "button",
      "reset",
      "image/png",
      'href="https://quasar.dev" target="_blank"'
    ],
    category: "general",
    required: false
  },
  to: {
    type: [
      "String",
      "Object"
    ],
    desc: "Equivalent to Vue Router <router-link> 'to' property; Superseded by 'href' prop if used",
    examples: [
      "/home/dashboard",
      `:to="{ name: 'my-route-name' }"`
    ],
    category: "navigation"
  },
  replace: {
    type: "Boolean",
    desc: "Equivalent to Vue Router <router-link> 'replace' property; Superseded by 'href' prop if used",
    category: "navigation"
  },
  href: {
    type: "String",
    desc: "Native <a> link href attribute; Has priority over the 'to' and 'replace' props",
    examples: [
      "https://quasar.dev",
      'href="https://quasar.dev" target="_blank"'
    ],
    category: "navigation",
    addedIn: "v2.4"
  },
  target: {
    type: "String",
    desc: "Native <a> link target attribute; Use it only with 'to' or 'href' props",
    examples: [
      "_blank",
      "_self",
      "_parent",
      "_top"
    ],
    category: "navigation",
    addedIn: "v2.4"
  },
  label: {
    type: [
      "String",
      "Number"
    ],
    desc: "The text that will be shown on the button",
    examples: [
      "Button Label"
    ],
    category: "content"
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
  "icon-right": {
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
  outline: {
    type: "Boolean",
    desc: "Use 'outline' design",
    category: "style"
  },
  flat: {
    type: "Boolean",
    desc: "Use 'flat' design",
    category: "style"
  },
  unelevated: {
    type: "Boolean",
    desc: "Remove shadow",
    category: "style"
  },
  rounded: {
    type: "Boolean",
    desc: "Applies a more prominent border-radius for a squared shape button",
    category: "style"
  },
  push: {
    type: "Boolean",
    desc: "Use 'push' design",
    category: "style"
  },
  square: {
    type: "Boolean",
    desc: "Removes border-radius so borders are squared",
    category: "style",
    addedIn: "v2.7.6"
  },
  glossy: {
    type: "Boolean",
    desc: "Applies a glossy effect",
    category: "style"
  },
  fab: {
    type: "Boolean",
    desc: "Makes button size and shape to fit a Floating Action Button",
    category: "style"
  },
  "fab-mini": {
    type: "Boolean",
    desc: "Makes button size and shape to fit a small Floating Action Button",
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
      "md lg",
      "2px 2px 5px 7px"
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
  "no-caps": {
    type: "Boolean",
    desc: "Avoid turning label text into caps (which happens by default)",
    category: "content"
  },
  "no-wrap": {
    type: "Boolean",
    desc: "Avoid label text wrapping",
    category: "content"
  },
  dense: {
    type: "Boolean",
    desc: "Dense mode; occupies less space",
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
  align: {
    type: "String",
    desc: "Label or content alignment",
    default: "center",
    values: [
      "left",
      "right",
      "center",
      "around",
      "between",
      "evenly"
    ],
    category: "content",
    required: false
  },
  stack: {
    type: "Boolean",
    desc: "Stack icon and label vertically instead of on same line (like it is by default)",
    category: "content"
  },
  stretch: {
    type: "Boolean",
    desc: "When used on flexbox parent, button will stretch to parent's height",
    category: "content"
  },
  loading: {
    type: "Boolean",
    desc: "Put button into loading state (displays a QSpinner -- can be overridden by using a 'loading' slot)",
    category: "behavior|state"
  },
  disable: {
    type: "Boolean",
    desc: "Put component in disabled mode",
    category: "state"
  },
  round: {
    type: "Boolean",
    desc: "Makes a circle shaped button",
    category: "style"
  },
  percentage: {
    type: "Number",
    desc: "Percentage (0.0 < x < 100.0); To be used along 'loading' prop; Display a progress bar on the background",
    category: "behavior"
  },
  "dark-percentage": {
    type: "Boolean",
    desc: "Progress bar on the background should have dark color; To be used along with 'percentage' and 'loading' props",
    category: "behavior"
  }
};
var slots = {
  default: {
    desc: "Use for custom content, instead of relying on 'icon' and 'label' props"
  },
  loading: {
    desc: "Override the default QSpinner when in 'loading' state"
  }
};
var events = {
  click: {
    desc: "Emitted when the component is clicked",
    params: {
      evt: {
        type: "Event",
        desc: "JS event object; If you are using route navigation ('to'/'replace' props) and you want to cancel navigation then call evt.preventDefault() synchronously in your event handler"
      },
      go: {
        type: "Function",
        desc: "Available ONLY if you are using route navigation ('to'/'replace' props); When you need to control the time at which the component should trigger the route navigation then call evt.preventDefault() synchronously and then call this function at your convenience; Useful if you have async work to be done before the actual route navigation or if you want to redirect somewhere else",
        required: false,
        addedIn: "v2.9",
        params: {
          opts: {
            type: "Object",
            desc: "Optional options",
            required: false,
            definition: {
              to: {
                type: [
                  "String",
                  "Object"
                ],
                desc: "Equivalent to Vue Router <router-link> 'to' property; Specify it explicitly otherwise it will be set with same value as component's 'to' prop",
                required: false,
                examples: [
                  "/home/dashboard",
                  "{ name: 'my-route-name' }"
                ]
              },
              replace: {
                type: "Boolean",
                desc: "Equivalent to Vue Router <router-link> 'replace' property; Specify it explicitly otherwise it will be set with same value as component's 'replace' prop",
                required: false
              },
              returnRouterError: {
                type: "Boolean",
                desc: "Return the router error, if any; Otherwise the returned Promise will always fulfill",
                required: false
              }
            }
          }
        },
        returns: {
          type: "Promise<any>",
          desc: "Returns the router's navigation promise"
        }
      }
    }
  }
};
var methods = {
  click: {
    desc: "Emulate click on QBtn",
    params: {
      evt: {
        type: "Event",
        desc: "JS event object"
      }
    }
  }
};
var QBtn_default = {
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
