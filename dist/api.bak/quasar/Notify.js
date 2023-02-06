// src/api/quasar/Notify.json
var type = "plugin";
var meta = {
  docsUrl: "https://v2.quasar.dev/quasar-plugins/notify"
};
var injection = "$q.notify";
var quasarConfOptions = {
  propName: "notify",
  definition: {
    type: {
      type: "String",
      desc: "Optional type (that has been previously registered) or one of the out of the box ones ('positive', 'negative', 'warning', 'info', 'ongoing')",
      examples: [
        "negative",
        "custom-type"
      ]
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
    textColor: {
      type: "String",
      desc: "Color name for component from the Quasar Color Palette",
      examples: [
        "primary",
        "teal-10"
      ],
      category: "style"
    },
    message: {
      type: "String",
      desc: "The content of your message",
      examples: [
        "John Doe pinged you"
      ]
    },
    caption: {
      type: "String",
      desc: "The content of your optional caption",
      examples: [
        "5 minutes ago"
      ]
    },
    html: {
      type: "Boolean",
      desc: "Render the message as HTML; This can lead to XSS attacks, so make sure that you sanitize the message first"
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
    iconColor: {
      type: "String",
      desc: "Color name for component from the Quasar Color Palette",
      examples: [
        "primary",
        "teal-10"
      ],
      category: "style",
      addedIn: "v2.5.5"
    },
    iconSize: {
      type: "String",
      desc: "Size in CSS units, including unit name",
      examples: [
        "16px",
        "2rem"
      ],
      category: "style",
      addedIn: "v2.5.5"
    },
    avatar: {
      type: "String",
      desc: "URL to an avatar/image; Suggestion: use public folder",
      examples: [
        "(public folder) img/something.png",
        "(relative path format) require('./my_img.jpg')",
        "(URL) https://some-site.net/some-img.gif"
      ]
    },
    spinner: {
      type: "Boolean",
      desc: "Useful for notifications that are updated; Displays a Quasar spinner instead of an avatar or icon; If value is Boolean 'true' then the default QSpinner is shown",
      examples: [
        true,
        "QSpinnerBars"
      ]
    },
    spinnerColor: {
      type: "String",
      desc: "Color name for component from the Quasar Color Palette",
      examples: [
        "primary",
        "teal-10"
      ],
      category: "style",
      addedIn: "v2.5.5"
    },
    spinnerSize: {
      type: "String",
      desc: "Size in CSS units, including unit name",
      examples: [
        "16px",
        "2rem"
      ],
      category: "style",
      addedIn: "v2.5.5"
    },
    position: {
      type: "String",
      desc: "Window side/corner to stick to",
      default: "bottom",
      values: [
        "top-left",
        "top-right",
        "bottom-left",
        "bottom-right",
        "top",
        "bottom",
        "left",
        "right",
        "center"
      ],
      required: false
    },
    group: {
      type: [
        "Boolean",
        "String",
        "Number"
      ],
      desc: "Override the auto generated group with custom one; Grouped notifications cannot be updated; String or number value inform this is part of a specific group, regardless of its options; When a new notification is triggered with same group name, it replaces the old one and shows a badge with how many times the notification was triggered",
      default: "(message + caption + multiline + actions labels + position)",
      examples: [
        "my-group"
      ],
      required: false
    },
    badgeColor: {
      type: "String",
      desc: "Color name for the badge from the Quasar Color Palette",
      examples: [
        "primary",
        "teal-10"
      ],
      category: "style"
    },
    badgeTextColor: {
      type: "String",
      desc: "Color name for the badge text from the Quasar Color Palette",
      examples: [
        "primary",
        "teal-10"
      ],
      category: "style"
    },
    badgePosition: {
      type: "String",
      desc: "Notification corner to stick badge to; If notification is on the left side then default is top-right otherwise it is top-left",
      default: "(top-left/top-right)",
      values: [
        "top-left",
        "top-right",
        "bottom-left",
        "bottom-right"
      ],
      required: false
    },
    badgeStyle: {
      type: [
        "String",
        "Array",
        "Object"
      ],
      tsType: "VueStyleProp",
      desc: "Style definitions to be attributed to the badge",
      examples: [
        "background-color: #ff0000",
        "{ backgroundColor: '#ff0000' }"
      ]
    },
    badgeClass: {
      type: [
        "String",
        "Array",
        "Object"
      ],
      tsType: "VueClassProp",
      desc: "Class definitions to be attributed to the badge",
      examples: [
        "my-special-class",
        "{ 'my-special-class': <condition> }"
      ]
    },
    progress: {
      type: "Boolean",
      desc: "Show progress bar to detail when notification will disappear automatically (unless timeout is 0)"
    },
    progressClass: {
      type: [
        "String",
        "Array",
        "Object"
      ],
      tsType: "VueClassProp",
      desc: "Class definitions to be attributed to the progress bar",
      examples: [
        "my-special-class",
        "{ 'my-special-class': <condition> }"
      ]
    },
    classes: {
      type: "String",
      desc: "Add CSS class(es) to the notification for easier customization",
      examples: [
        "my-notif-class"
      ]
    },
    attrs: {
      type: "Object",
      desc: "Key-value for attributes to be set on the notification",
      examples: [
        "{ role: 'alertdialog' }"
      ]
    },
    timeout: {
      type: "Number",
      desc: "Amount of time to display (in milliseconds)",
      default: 5e3,
      required: false
    },
    closeBtn: {
      type: [
        "Boolean",
        "String"
      ],
      desc: "Convenient way to add a dismiss button with a specific label, without using the 'actions' prop; If set to true, it uses a label according to the current Quasar language",
      examples: [
        "Close me"
      ]
    },
    multiLine: {
      type: "Boolean",
      desc: "Put notification into multi-line mode; If this prop isn't used and more than one 'action' is specified then notification goes into multi-line mode by default"
    }
  }
};
var methods = {
  create: {
    tsInjectionPoint: true,
    desc: "Creates a notification; Same as calling $q.notify(...)",
    params: {
      opts: {
        type: [
          "Object",
          "String"
        ],
        tsType: "QNotifyCreateOptions",
        autoDefineTsType: true,
        required: true,
        desc: "Notification options",
        definition: {
          type: {
            type: "String",
            desc: "Optional type (that has been previously registered) or one of the out of the box ones ('positive', 'negative', 'warning', 'info', 'ongoing')",
            examples: [
              "negative",
              "custom-type"
            ]
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
          textColor: {
            type: "String",
            desc: "Color name for component from the Quasar Color Palette",
            examples: [
              "primary",
              "teal-10"
            ],
            category: "style"
          },
          message: {
            type: "String",
            desc: "The content of your message",
            examples: [
              "John Doe pinged you"
            ]
          },
          caption: {
            type: "String",
            desc: "The content of your optional caption",
            examples: [
              "5 minutes ago"
            ]
          },
          html: {
            type: "Boolean",
            desc: "Render the message as HTML; This can lead to XSS attacks, so make sure that you sanitize the message first"
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
          iconColor: {
            type: "String",
            desc: "Color name for component from the Quasar Color Palette",
            examples: [
              "primary",
              "teal-10"
            ],
            category: "style",
            addedIn: "v2.5.5"
          },
          iconSize: {
            type: "String",
            desc: "Size in CSS units, including unit name",
            examples: [
              "16px",
              "2rem"
            ],
            category: "style",
            addedIn: "v2.5.5"
          },
          avatar: {
            type: "String",
            desc: "URL to an avatar/image; Suggestion: use public folder",
            examples: [
              "(public folder) img/something.png",
              "(relative path format) require('./my_img.jpg')",
              "(URL) https://some-site.net/some-img.gif"
            ]
          },
          spinner: {
            type: [
              "Boolean",
              "Component"
            ],
            desc: "Useful for notifications that are updated; Displays a Quasar spinner instead of an avatar or icon; If value is Boolean 'true' then the default QSpinner is shown",
            examples: [
              true,
              "QSpinnerBars"
            ]
          },
          spinnerColor: {
            type: "String",
            desc: "Color name for component from the Quasar Color Palette",
            examples: [
              "primary",
              "teal-10"
            ],
            category: "style",
            addedIn: "v2.5.5"
          },
          spinnerSize: {
            type: "String",
            desc: "Size in CSS units, including unit name",
            examples: [
              "16px",
              "2rem"
            ],
            category: "style",
            addedIn: "v2.5.5"
          },
          position: {
            type: "String",
            desc: "Window side/corner to stick to",
            default: "bottom",
            values: [
              "top-left",
              "top-right",
              "bottom-left",
              "bottom-right",
              "top",
              "bottom",
              "left",
              "right",
              "center"
            ],
            required: false
          },
          group: {
            type: [
              "Boolean",
              "String",
              "Number"
            ],
            desc: "Override the auto generated group with custom one; Grouped notifications cannot be updated; String or number value inform this is part of a specific group, regardless of its options; When a new notification is triggered with same group name, it replaces the old one and shows a badge with how many times the notification was triggered",
            default: "(message + caption + multiline + actions labels + position)",
            examples: [
              "my-group"
            ],
            required: false
          },
          badgeColor: {
            type: "String",
            desc: "Color name for the badge from the Quasar Color Palette",
            examples: [
              "primary",
              "teal-10"
            ],
            category: "style"
          },
          badgeTextColor: {
            type: "String",
            desc: "Color name for the badge text from the Quasar Color Palette",
            examples: [
              "primary",
              "teal-10"
            ],
            category: "style"
          },
          badgePosition: {
            type: "String",
            desc: "Notification corner to stick badge to; If notification is on the left side then default is top-right otherwise it is top-left",
            default: "(top-left/top-right)",
            values: [
              "top-left",
              "top-right",
              "bottom-left",
              "bottom-right"
            ],
            required: false
          },
          badgeStyle: {
            type: [
              "String",
              "Array",
              "Object"
            ],
            tsType: "VueStyleProp",
            desc: "Style definitions to be attributed to the badge",
            examples: [
              "background-color: #ff0000",
              "{ backgroundColor: '#ff0000' }"
            ]
          },
          badgeClass: {
            type: [
              "String",
              "Array",
              "Object"
            ],
            tsType: "VueClassProp",
            desc: "Class definitions to be attributed to the badge",
            examples: [
              "my-special-class",
              "{ 'my-special-class': <condition> }"
            ]
          },
          progress: {
            type: "Boolean",
            desc: "Show progress bar to detail when notification will disappear automatically (unless timeout is 0)"
          },
          progressClass: {
            type: [
              "String",
              "Array",
              "Object"
            ],
            tsType: "VueClassProp",
            desc: "Class definitions to be attributed to the progress bar",
            examples: [
              "my-special-class",
              "{ 'my-special-class': <condition> }"
            ]
          },
          classes: {
            type: "String",
            desc: "Add CSS class(es) to the notification for easier customization",
            examples: [
              "my-notif-class"
            ]
          },
          attrs: {
            type: "Object",
            desc: "Key-value for attributes to be set on the notification",
            examples: [
              "{ role: 'alertdialog' }"
            ]
          },
          timeout: {
            type: "Number",
            desc: "Amount of time to display (in milliseconds)",
            default: 5e3,
            examples: [
              2500
            ],
            required: false
          },
          actions: {
            type: "Array",
            tsType: "QNotifyAction",
            desc: "Notification actions (buttons); Unless 'noDismiss' is true, clicking/tapping on the button will close the notification; Also check 'closeBtn' convenience prop",
            definition: {
              handler: {
                type: "Function",
                desc: "Function to be executed when the button is clicked/tapped",
                params: null,
                returns: null,
                examples: [
                  "() => { console.log('button clicked') }"
                ]
              },
              noDismiss: {
                type: "Boolean",
                desc: "Do not dismiss the notification when the button is clicked/tapped"
              },
              "...": {
                type: "Any",
                desc: "Any other QBtn prop expect 'onClick' (use 'handler' instead)",
                examples: [
                  "label: 'Learn more'",
                  "color: 'primary'"
                ]
              }
            },
            examples: [
              "[ { label: 'Show', handler: () => {}, 'aria-label': 'Button label' }, { icon: 'map', handler: () => {}, color: 'yellow' }, { label: 'Learn more', noDismiss: true, handler: () => {} } ]"
            ]
          },
          onDismiss: {
            type: "Function",
            desc: "Function to call when notification gets dismissed",
            params: null,
            returns: null,
            examples: [
              "() => { console.log('Dismissed') }"
            ]
          },
          closeBtn: {
            type: [
              "Boolean",
              "String"
            ],
            desc: "Convenient way to add a dismiss button with a specific label, without using the 'actions' prop; If set to true, it uses a label according to the current Quasar language",
            examples: [
              "Close me"
            ]
          },
          multiLine: {
            type: "Boolean",
            desc: "Put notification into multi-line mode; If this prop isn't used and more than one 'action' is specified then notification goes into multi-line mode by default"
          },
          ignoreDefaults: {
            type: "Boolean",
            desc: "Ignore the default configuration (set by setDefaults()) for this instance only"
          }
        }
      }
    },
    returns: {
      type: "Function",
      desc: "Calling this function with no parameters hides the notification; When called with one Object parameter (the original notification must NOT be grouped), it updates the notification (specified properties are shallow merged with previous ones; note that group and position cannot be changed while updating and so they are ignored)",
      params: {
        props: {
          type: "Object",
          tsType: "QNotifyUpdateOptions",
          required: false,
          desc: "Notification properties that will be shallow merged to previous ones in order to update the non-grouped notification; (See 'opts' param of 'create()' for object properties, except 'group' and 'position')"
        }
      },
      returns: null
    }
  },
  setDefaults: {
    desc: "Merge options into the default ones",
    params: {
      opts: {
        type: "Object",
        tsType: "QNotifyOptions",
        required: true,
        desc: "Notification options (See 'opts' param of 'create()' for object properties)"
      }
    }
  },
  registerType: {
    desc: "Register a new type of notification (or override an existing one)",
    params: {
      typeName: {
        type: "String",
        required: true,
        desc: "Name of the type (to be used as 'type' prop later on)",
        examples: [
          "my-type"
        ]
      },
      typeOpts: {
        type: "Object",
        tsType: "QNotifyOptions",
        required: true,
        desc: "Notification options (See 'opts' param of 'create()' for object properties)"
      }
    }
  }
};
var Notify_default = {
  type,
  meta,
  injection,
  quasarConfOptions,
  methods
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  injection,
  meta,
  methods,
  quasarConfOptions,
  type
});
