// src/api/quasar/QBreadcrumbsEl.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/breadcrumbs"
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
  label: {
    type: "String",
    desc: "The label text for the breadcrumb",
    examples: [
      "Home",
      "Index"
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
  tag: {
    type: "String",
    desc: "HTML tag to use",
    examples: [
      "div",
      "span",
      "div",
      "span"
    ],
    category: "content",
    default: "span",
    required: false
  }
};
var slots = {
  default: {
    desc: "This is where custom content goes, unless 'icon' and 'label' props are not enough"
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
var QBreadcrumbsEl_default = {
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
