// src/api/quasar/QRouteTab.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/tabs"
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
  }
};
var slots = {
  default: {
    desc: "Suggestion: QMenu, QTooltip"
  }
};
var events = {
  click: {
    desc: "Emitted when the component is clicked",
    params: {
      evt: {
        type: "Event",
        desc: "JS event object; If you want to cancel navigation then call evt.preventDefault() synchronously in your event handler"
      },
      go: {
        type: "Function",
        desc: "When you need to control the time at which the component should trigger the route navigation then call evt.preventDefault() synchronously and then call this function at your convenience; Useful if you have async work to be done before the actual route navigation or if you want to redirect somewhere else",
        required: false,
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
            },
            addedIn: "v2.9"
          }
        },
        returns: {
          type: "Promise<any>",
          desc: "Returns the router's navigation promise",
          addedIn: "v2.9"
        }
      }
    }
  }
};
var QRouteTab_default = {
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
