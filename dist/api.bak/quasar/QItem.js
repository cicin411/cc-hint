// src/api/quasar/QItem.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/list-and-list-items"
};
var props = {
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
  exact: {
    type: "Boolean",
    desc: "Equivalent to Vue Router <router-link> 'exact' property; Superseded by 'href' prop if used",
    category: "navigation"
  },
  replace: {
    type: "Boolean",
    desc: "Equivalent to Vue Router <router-link> 'replace' property; Superseded by 'href' prop if used",
    category: "navigation"
  },
  "active-class": {
    type: "String",
    desc: "Equivalent to Vue Router <router-link> 'active-class' property; Superseded by 'href' prop if used",
    examples: [
      "my-active-class"
    ],
    category: "navigation"
  },
  "exact-active-class": {
    type: "String",
    desc: "Equivalent to Vue Router <router-link> 'active-class' property; Superseded by 'href' prop if used",
    examples: [
      "my-exact-active-class"
    ],
    category: "navigation"
  },
  href: {
    type: "String",
    desc: "Native <a> link href attribute; Has priority over the 'to'/'exact'/'replace'/'active-class'/'exact-active-class' props",
    examples: [
      "https://quasar.dev"
    ],
    category: "navigation",
    addedIn: "v2.4"
  },
  target: {
    type: "String",
    desc: "Native <a> link target attribute; Use it only along with 'href' prop; Has priority over the 'to'/'exact'/'replace'/'active-class'/'exact-active-class' props",
    examples: [
      "_blank",
      "_self",
      "_parent",
      "_top"
    ],
    category: "navigation",
    addedIn: "v2.4"
  },
  disable: {
    type: "Boolean",
    desc: "Put component in disabled mode",
    category: "state"
  },
  active: {
    type: "Boolean",
    desc: "Put item into 'active' state",
    category: "state",
    default: null,
    required: false
  },
  dark: {
    type: "Boolean",
    desc: "Notify the component that the background is a dark color",
    category: "style"
  },
  clickable: {
    type: "Boolean",
    desc: "Is QItem clickable? If it's the case, then it will add hover effects and emit 'click' events",
    category: "state"
  },
  dense: {
    type: "Boolean",
    desc: "Dense mode; occupies less space",
    category: "style"
  },
  "inset-level": {
    type: "Number",
    desc: "Apply an inset; Useful when avatar/left side is missing but you want to align content with other items that do have a left side, or when you're building a menu",
    examples: [
      ':inset-level="1"'
    ],
    category: "content"
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
  tag: {
    type: "String",
    desc: "HTML tag to render; Suggestion: use 'label' when encapsulating a QCheckbox/QRadio/QToggle so that when user clicks/taps on the whole item it will trigger a model change for the mentioned components",
    examples: [
      "div",
      "span",
      "a",
      "label",
      "div"
    ],
    category: "content",
    default: "div",
    required: false
  },
  "manual-focus": {
    type: "Boolean",
    desc: "Put item into a manual focus state; Enables 'focused' prop which will determine if item is focused or not, rather than relying on native hover/focus states",
    category: "state"
  },
  focused: {
    type: "Boolean",
    desc: "Determines focus state, ONLY if 'manual-focus' is enabled / set to true",
    category: "state"
  }
};
var slots = {
  default: {
    desc: "This is where QItem's content goes"
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
var QItem_default = {
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
