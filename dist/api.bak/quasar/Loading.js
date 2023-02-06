// src/api/quasar/Loading.json
var type = "plugin";
var meta = {
  docsUrl: "https://v2.quasar.dev/quasar-plugins/loading"
};
var injection = "$q.loading";
var quasarConfOptions = {
  propName: "loading",
  definition: {
    delay: {
      type: "Number",
      desc: "Wait a number of millisecond before showing; Not worth showing for 100ms for example then hiding it, so wait until you're sure it's a process that will take some considerable amount of time",
      examples: [
        400
      ]
    },
    message: {
      type: "String",
      desc: "Message to display",
      examples: [
        "Processing your request"
      ]
    },
    group: {
      type: "String",
      desc: "Default Loading group name",
      default: "__default_quasar_group__",
      examples: [
        "default-group-name"
      ],
      addedIn: "v2.8",
      required: false
    },
    html: {
      type: "Boolean",
      desc: "Force render the message as HTML; This can lead to XSS attacks so make sure that you sanitize the content",
      category: "behavior"
    },
    boxClass: {
      type: "String",
      desc: "Content wrapped element custom classes",
      examples: [
        "bg-amber text-black",
        "q-pa-xl"
      ]
    },
    spinnerSize: {
      type: "Number",
      desc: "Spinner size (in pixels)"
    },
    spinnerColor: {
      type: "String",
      desc: "Color name for spinner from the Quasar Color Palette",
      examples: [
        "primary",
        "teal-10"
      ],
      category: "style"
    },
    messageColor: {
      type: "String",
      desc: "Color name for text from the Quasar Color Palette",
      examples: [
        "primary",
        "teal-10"
      ],
      category: "style"
    },
    backgroundColor: {
      type: "String",
      desc: "Color name for background from the Quasar Color Palette",
      examples: [
        "primary",
        "teal-10"
      ],
      category: "style"
    },
    spinner: {
      type: "String",
      desc: "One of the QSpinners",
      examples: [
        "QSpinnerAudio"
      ]
    },
    customClass: {
      type: "String",
      desc: "Add a CSS class to the container element to easily customize the component",
      examples: [
        "my-class"
      ]
    }
  }
};
var props = {
  isActive: {
    type: "Boolean",
    desc: "Is Loading active?",
    reactive: true
  }
};
var methods = {
  show: {
    desc: "Activate and show",
    params: {
      opts: {
        type: "Object",
        tsType: "QLoadingShowOptions",
        autoDefineTsType: true,
        desc: "All props are optional",
        definition: {
          delay: {
            type: "Number",
            desc: "Wait a number of millisecond before showing; Not worth showing for 100ms for example then hiding it, so wait until you're sure it's a process that will take some considerable amount of time"
          },
          message: {
            type: "String",
            desc: "Message to display",
            examples: [
              "Processing your request"
            ]
          },
          group: {
            type: "String",
            desc: "Loading group name",
            examples: [
              "some-api-call"
            ],
            addedIn: "v2.8"
          },
          html: {
            type: "Boolean",
            desc: "Render the message as HTML; This can lead to XSS attacks so make sure that you sanitize the message first",
            category: "behavior"
          },
          boxClass: {
            type: "String",
            desc: "Content wrapped element custom classes",
            examples: [
              "bg-amber text-black",
              "q-pa-xl"
            ]
          },
          spinnerSize: {
            type: "Number",
            desc: "Spinner size (in pixels)"
          },
          spinnerColor: {
            type: "String",
            desc: "Color name for spinner from the Quasar Color Palette",
            examples: [
              "primary",
              "teal-10"
            ],
            category: "style"
          },
          messageColor: {
            type: "String",
            desc: "Color name for text from the Quasar Color Palette",
            examples: [
              "primary",
              "teal-10"
            ],
            category: "style"
          },
          backgroundColor: {
            type: "String",
            desc: "Color name for background from the Quasar Color Palette",
            examples: [
              "primary",
              "teal-10"
            ],
            category: "style"
          },
          spinner: {
            type: "Component",
            desc: "One of the QSpinners"
          },
          customClass: {
            type: "String",
            desc: "Add a CSS class to easily customize the component",
            examples: [
              "my-class"
            ]
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
      desc: "Calling this function with no parameters hides the group; When called with one Object parameter then it updates the Loading group (specified properties are shallow merged with the group ones; note that group cannot be changed while updating and it is ignored)",
      params: {
        props: {
          type: "Object",
          tsType: "QLoadingUpdateOptions",
          required: false,
          desc: "Loading properties that will be shallow merged to the group ones; (See 'opts' param of 'show()' for object properties, except 'group')"
        }
      },
      returns: null,
      addedIn: "v2.8"
    }
  },
  hide: {
    desc: "Hide it",
    params: {
      group: {
        type: "String",
        desc: "Optional Loading group name to hide instead of hiding all groups",
        required: false,
        examples: [
          "some-api-call"
        ],
        addedIn: "v2.8"
      }
    }
  },
  setDefaults: {
    desc: "Merge options into the default ones",
    params: {
      opts: {
        type: "Object",
        desc: "Pick the subprop you want to define",
        required: true,
        definition: {
          delay: {
            type: "Number",
            desc: "Wait a number of millisecond before showing; Not worth showing for 100ms for example then hiding it, so wait until you're sure it's a process that will take some considerable amount of time"
          },
          message: {
            type: "String",
            desc: "Message to display",
            examples: [
              "Processing your request"
            ]
          },
          group: {
            type: "String",
            desc: "Default Loading group name",
            default: "__default_quasar_group__",
            examples: [
              "default-group-name"
            ],
            addedIn: "v2.8",
            required: false
          },
          spinnerSize: {
            type: "Number",
            desc: "Spinner size (in pixels)"
          },
          spinnerColor: {
            type: "String",
            desc: "Color name for spinner from the Quasar Color Palette",
            examples: [
              "primary",
              "teal-10"
            ],
            category: "style"
          },
          messageColor: {
            type: "String",
            desc: "Color name for text from the Quasar Color Palette",
            examples: [
              "primary",
              "teal-10"
            ],
            category: "style"
          },
          backgroundColor: {
            type: "String",
            desc: "Color name for background from the Quasar Color Palette",
            examples: [
              "primary",
              "teal-10"
            ],
            category: "style"
          },
          spinner: {
            type: "Component",
            desc: "One of the QSpinners"
          },
          customClass: {
            type: "String",
            desc: "Add a CSS class to easily customize the component",
            examples: [
              "my-class"
            ]
          }
        }
      }
    }
  }
};
var Loading_default = {
  type,
  meta,
  injection,
  quasarConfOptions,
  props,
  methods
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  injection,
  meta,
  methods,
  props,
  quasarConfOptions,
  type
});
