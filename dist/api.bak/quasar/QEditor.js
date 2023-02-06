// src/api/quasar/QEditor.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/editor"
};
var props = {
  fullscreen: {
    type: "Boolean",
    sync: true,
    desc: "Fullscreen mode",
    examples: [
      'v-model:fullscreen="isFullscreen"'
    ],
    category: "behavior",
    syncable: true
  },
  "no-route-fullscreen-exit": {
    type: "Boolean",
    desc: "Changing route app won't exit fullscreen",
    category: "behavior"
  },
  "model-value": {
    desc: "Model of the component; Either use this property (along with a listener for 'update:modelValue' event) OR use v-model directive",
    required: true,
    syncable: true,
    category: "model",
    type: "String",
    examples: [
      'v-model="content"'
    ]
  },
  readonly: {
    type: "Boolean",
    desc: "Put component in readonly mode",
    category: "state"
  },
  square: {
    type: "Boolean",
    desc: "Removes border-radius so borders are squared",
    category: "style"
  },
  flat: {
    type: "Boolean",
    desc: "Applies a 'flat' design (no borders)",
    category: "style"
  },
  dense: {
    type: "Boolean",
    desc: "Dense mode; toolbar buttons are shown on one-line only",
    category: "style"
  },
  dark: {
    type: "Boolean",
    desc: "Notify the component that the background is a dark color",
    category: "style"
  },
  disable: {
    type: "Boolean",
    desc: "Put component in disabled mode",
    category: "state"
  },
  "min-height": {
    type: "String",
    desc: "CSS unit for the minimum height of the editable area",
    default: "10rem",
    examples: [
      "15rem",
      "50vh"
    ],
    category: "style",
    required: false
  },
  "max-height": {
    type: "String",
    desc: "CSS unit for maximum height of the input area",
    examples: [
      "1000px",
      "90vh"
    ],
    category: "style"
  },
  height: {
    type: "String",
    desc: "CSS value to set the height of the editable area",
    examples: [
      "100px",
      "50vh"
    ],
    category: "style"
  },
  definitions: {
    type: "Object",
    desc: "Definition of commands and their buttons to be included in the 'toolbar' prop",
    examples: [
      `:definitions="{ save: { tip: 'Save your work', icon: 'save', label: 'Save', handler: saveWork }, upload: { tip: 'Upload to cloud', icon: 'cloud_upload', label: 'Upload', handler: uploadIt } }"`
    ],
    definition: {
      "...commandName": {
        type: "Object",
        tsType: "QEditorCommand",
        autoDefineTsType: true,
        desc: "Command definition",
        definition: {
          label: {
            type: "String",
            desc: "Label of the button",
            examples: [
              "Addresses"
            ]
          },
          tip: {
            type: "String",
            desc: "Text to be displayed as a tooltip on hover",
            examples: [
              "Add a contact from the Address Book"
            ]
          },
          htmlTip: {
            type: "String",
            desc: "HTML formatted text to be displayed within a tooltip on hover",
            examples: [
              'Add a <span class="red">user</span> from the address book'
            ]
          },
          icon: {
            type: "String",
            desc: "Icon of the button",
            examples: [
              "fas fa-address-book"
            ]
          },
          key: {
            type: "Number",
            desc: "Keycode of a key to be used together with the <ctrl> key for use as a shortcut to trigger this element",
            examples: [
              "12",
              "36"
            ]
          },
          handler: {
            type: "Function",
            desc: 'Either this or "cmd" is required. Function for when button gets clicked/tapped.',
            params: null,
            returns: null,
            examples: [
              "() => this.uploadFile()"
            ]
          },
          cmd: {
            type: "String",
            desc: 'Either this or "handler" is required. This must be a valid execCommand method according to the designMode API.',
            examples: [
              "insertHTML",
              "justifyFull"
            ]
          },
          param: {
            type: "String",
            desc: 'Only set a param if using a "cmd". This is commonly text or HTML to inject, but is highly dependent upon the specific cmd being called.',
            examples: [
              '<img src="://uploads/001.jpg" alt="nice pic" />'
            ]
          },
          disable: {
            type: [
              "Boolean",
              "Function"
            ],
            desc: "Is button disabled?",
            returns: {
              type: "Boolean",
              desc: "If true, the button will be disabled"
            },
            examples: [
              "!user.active",
              "() => !checkIfUserIsActive()"
            ]
          },
          type: {
            type: "String",
            desc: 'Pass the value "no-state" if the button should not have an "active" state',
            values: [
              null,
              "no-state"
            ],
            examples: [
              "no-state"
            ]
          },
          fixedLabel: {
            type: "Boolean",
            desc: "Lock the button label, so it doesn't change based on the child option selected."
          },
          fixedIcon: {
            type: "Boolean",
            desc: "Lock the button icon, so it doesn't change based on the child option selected."
          },
          highlight: {
            type: "Boolean",
            desc: "Highlight the toolbar button, when a child option has been selected."
          }
        }
      }
    },
    category: "toolbar"
  },
  fonts: {
    type: "Object",
    desc: "Object with definitions of fonts",
    examples: [
      `:fonts="{ arial: 'Arial', arial_black: 'Arial Black', comic_sans: 'Comic Sans MS' }"`
    ],
    category: "toolbar"
  },
  toolbar: {
    type: "Array",
    desc: "An array of arrays of Objects/Strings that you use to define the construction of the elements and commands available in the toolbar",
    default: [
      [
        "left",
        "center",
        "right",
        "justify"
      ],
      [
        "bold",
        "italic",
        "underline",
        "strike"
      ],
      [
        "undo",
        "redo"
      ]
    ],
    examples: [
      [
        "left",
        "center",
        "right",
        "justify"
      ]
    ],
    category: "toolbar",
    required: false
  },
  "toolbar-color": {
    type: "String",
    desc: "Font color (from the Quasar Palette) of buttons and text in the toolbar",
    examples: [
      "primary",
      "teal-10"
    ],
    category: "toolbar"
  },
  "toolbar-text-color": {
    type: "String",
    desc: "Text color (from the Quasar Palette) of toolbar commands",
    examples: [
      "primary",
      "teal-10"
    ],
    category: "toolbar"
  },
  "toolbar-toggle-color": {
    type: "String",
    desc: "Choose the active color (from the Quasar Palette) of toolbar commands button",
    default: "primary",
    examples: [
      "secondary",
      "blue-3"
    ],
    category: "toolbar",
    required: false
  },
  "toolbar-bg": {
    type: "String",
    desc: "Toolbar background color (from Quasar Palette)",
    default: "grey-3",
    examples: [
      "secondary",
      "blue-3"
    ],
    category: "toolbar",
    required: false
  },
  "toolbar-outline": {
    type: "Boolean",
    desc: 'Toolbar buttons are rendered "outlined"',
    category: "toolbar|style"
  },
  "toolbar-push": {
    type: "Boolean",
    desc: 'Toolbar buttons are rendered as a "push-button" type',
    category: "toolbar|style"
  },
  "toolbar-rounded": {
    type: "Boolean",
    desc: 'Toolbar buttons are rendered "rounded"',
    category: "toolbar|style"
  },
  "paragraph-tag": {
    type: "String",
    desc: "Paragraph tag to be used",
    values: [
      "div",
      "p"
    ],
    category: "behavior"
  },
  "content-style": {
    type: "Object",
    tsType: "VueStyleObjectProp",
    desc: "Object with CSS properties and values for styling the container of QEditor",
    examples: [
      `:content-style="{ backgroundColor: '#C0C0C0' }"`
    ],
    category: "style"
  },
  "content-class": {
    type: [
      "String",
      "Array",
      "Object"
    ],
    tsType: "VueClassProp",
    desc: "CSS classes for the input area",
    examples: [
      "my-special-class",
      `:content-class="{ 'my-special-class': <condition> }"`
    ],
    category: "style"
  },
  placeholder: {
    type: "String",
    desc: "Text to display as placeholder",
    examples: [
      "Type your story here ..."
    ],
    category: "content"
  }
};
var events = {
  "update:model-value": {
    desc: "Emitted when the component needs to change the model; Is also used by v-model",
    params: {
      value: {
        type: "String",
        desc: "The pure HTML of the content",
        required: true
      }
    }
  }
};
var methods = {
  toggleFullscreen: {
    desc: "Toggle the view to be fullscreen or not fullscreen"
  },
  setFullscreen: {
    desc: "Enter the fullscreen view"
  },
  exitFullscreen: {
    desc: "Leave the fullscreen view"
  },
  runCmd: {
    desc: "Run contentEditable command at caret position and range",
    params: {
      cmd: {
        type: "String",
        desc: "Must be a valid execCommand method according to the designMode API",
        examples: [
          "copy",
          "cut",
          "paste"
        ],
        required: true
      },
      param: {
        type: "String",
        desc: "The argument to pass to the command",
        examples: [
          "<small>Small Text</small>"
        ]
      },
      update: {
        type: "Boolean",
        desc: "Refresh the toolbar",
        default: true,
        required: false
      }
    }
  },
  refreshToolbar: {
    desc: "Hide the link editor if visible and force the instance to re-render"
  },
  focus: {
    desc: "Focus on the contentEditable at saved cursor position"
  },
  getContentEl: {
    desc: "Retrieve the content of the Editor",
    returns: {
      type: "Element",
      desc: "Provides the pure HTML within the editable area"
    }
  }
};
var computedProps = {
  caret: {
    type: "Object",
    tsType: "QEditorCaret",
    desc: "The current caret state"
  }
};
var QEditor_default = {
  type,
  meta,
  props,
  events,
  methods,
  computedProps
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  computedProps,
  events,
  meta,
  methods,
  props,
  type
});
