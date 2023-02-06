// src/api/quasar/QFile.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/file"
};
var props = {
  name: {
    type: "String",
    desc: "Used to specify the name of the control; Useful if dealing with forms; If not specified, it takes the value of 'for' prop, if it exists",
    examples: [
      "car_id",
      "car_id"
    ],
    category: "behavior"
  },
  multiple: {
    type: "Boolean",
    desc: "Allow multiple file uploads",
    category: "behavior"
  },
  accept: {
    type: "String",
    desc: "Comma separated list of unique file type specifiers. Maps to 'accept' attribute of native input type=file element",
    examples: [
      ".jpg, .pdf, image/*",
      "image/jpeg, .pdf"
    ],
    category: "behavior"
  },
  capture: {
    type: "String",
    desc: "Optionally, specify that a new file should be captured, and which device should be used to capture that new media of a type defined by the 'accept' prop. Maps to 'capture' attribute of native input type=file element",
    values: [
      "user",
      "environment"
    ],
    category: "behavior"
  },
  "max-file-size": {
    type: [
      "Number",
      "String"
    ],
    desc: "Maximum size of individual file in bytes",
    examples: [
      1024,
      1048576
    ],
    category: "behavior"
  },
  "max-total-size": {
    type: [
      "Number",
      "String"
    ],
    desc: "Maximum size of all files combined in bytes",
    category: "behavior"
  },
  "max-files": {
    type: [
      "Number",
      "String"
    ],
    desc: "Maximum number of files to contain",
    category: "behavior"
  },
  filter: {
    type: "Function",
    desc: "Custom filter for added files; Only files that pass this filter will be added to the queue and uploaded; For best performance, reference it from your scope and do not define it inline",
    params: {
      files: {
        type: [
          "FileList",
          "Array"
        ],
        desc: "Candidate files to be added to queue"
      }
    },
    returns: {
      type: "Array",
      desc: "Filtered files to be added to queue"
    },
    examples: [
      ':filter="files => files.filter(file => file.size === 1024)"'
    ],
    category: "behavior"
  },
  "model-value": {
    desc: "Model of the component; Must be FileList or Array if using 'multiple' prop; Either use this property (along with a listener for 'update:modelValue' event) OR use v-model directive",
    required: true,
    syncable: true,
    category: "model",
    type: [
      "File",
      "FileList",
      "Array",
      "null",
      "undefined"
    ],
    examples: [
      'v-model="myModel"'
    ]
  },
  error: {
    type: "Boolean",
    desc: "Does field have validation errors?",
    category: "behavior"
  },
  "error-message": {
    type: "String",
    desc: "Validation error message (gets displayed only if 'error' is set to 'true')",
    examples: [
      "Username must have at least 5 characters"
    ],
    category: "content"
  },
  "no-error-icon": {
    type: "Boolean",
    desc: "Hide error icon when there is an error",
    category: "content"
  },
  rules: {
    type: "Array",
    tsType: "ValidationRule",
    desc: "Array of Functions/Strings; If String, then it must be a name of one of the embedded validation rules",
    examples: [
      `:rules="[ val => val.length <= 3 || 'Please use maximum 3 characters' ]"`,
      `:rules="[ 'fulltime' ]"`,
      `:rules="[ (val, rules) => rules.email(val) || 'Please enter a valid email address' ]"`
    ],
    category: "behavior"
  },
  "reactive-rules": {
    type: "Boolean",
    desc: "By default a change in the rules does not trigger a new validation until the model changes; If set to true then a change in the rules will trigger a validation; Has a performance penalty, so use it only when you really need it",
    category: "behavior"
  },
  "lazy-rules": {
    type: [
      "Boolean",
      "String"
    ],
    desc: "If set to boolean true then it checks validation status against the 'rules' only after field loses focus for first time; If set to 'ondemand' then it will trigger only when component's validate() method is manually called or when the wrapper QForm submits itself",
    values: [
      "(Boolean) true",
      "(Boolean) false",
      "ondemand"
    ],
    category: "behavior"
  },
  label: {
    type: "String",
    desc: "A text label that will \u201Cfloat\u201D up above the input field, once the field gets focus",
    examples: [
      "Username"
    ],
    category: "content"
  },
  "stack-label": {
    type: "Boolean",
    desc: "Label will be always shown above the field regardless of field content (if any)",
    category: "content"
  },
  hint: {
    type: "String",
    desc: "Helper (hint) text which gets placed below your wrapped form component",
    examples: [
      "Fill in between 3 and 12 characters"
    ],
    category: "content"
  },
  "hide-hint": {
    type: "Boolean",
    desc: "Hide the helper (hint) text when field doesn't have focus",
    category: "content"
  },
  prefix: {
    type: "String",
    desc: "Prefix",
    examples: [
      "$"
    ],
    category: "content"
  },
  suffix: {
    type: "String",
    desc: "Suffix",
    examples: [
      "@gmail.com"
    ],
    category: "content"
  },
  "label-color": {
    type: "String",
    desc: "Color name for the label from the Quasar Color Palette; Overrides the 'color' prop; The difference from 'color' prop is that the label will always have this color, even when field is not focused",
    examples: [
      "primary",
      "teal-10"
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
  "bg-color": {
    type: "String",
    desc: "Color name for component from the Quasar Color Palette",
    examples: [
      "primary",
      "teal-10"
    ],
    category: "style"
  },
  dark: {
    type: "Boolean",
    desc: "Notify the component that the background is a dark color",
    category: "style"
  },
  loading: {
    type: "Boolean",
    desc: "Signals the user a process is in progress by displaying a spinner; Spinner can be customized by using the 'loading' slot.",
    category: "behavior|content"
  },
  clearable: {
    type: "Boolean",
    desc: "Appends clearable icon when a value (not undefined or null) is set; When clicked, model becomes null",
    category: "behavior|content"
  },
  "clear-icon": {
    type: "String",
    desc: "Custom icon to use for the clear button when using along with 'clearable' prop",
    examples: [
      "close"
    ],
    category: "content"
  },
  filled: {
    type: "Boolean",
    desc: "Use 'filled' design for the field",
    category: "style"
  },
  outlined: {
    type: "Boolean",
    desc: "Use 'outlined' design for the field",
    category: "style"
  },
  borderless: {
    type: "Boolean",
    desc: "Use 'borderless' design for the field",
    category: "style"
  },
  standout: {
    type: [
      "Boolean",
      "String"
    ],
    desc: "Use 'standout' design for the field; Specifies classes to be applied when focused (overriding default ones)",
    examples: [
      "standout",
      'standout="bg-primary text-white"'
    ],
    category: "style"
  },
  "label-slot": {
    type: "Boolean",
    desc: "Enables label slot; You need to set it to force use of the 'label' slot if the 'label' prop is not set",
    category: "content"
  },
  "bottom-slots": {
    type: "Boolean",
    desc: "Enables bottom slots ('error', 'hint', 'counter')",
    category: "content"
  },
  "hide-bottom-space": {
    type: "Boolean",
    desc: "Do not reserve space for hint/error/counter anymore when these are not used; As a result, it also disables the animation for those; It also allows the hint/error area to stretch vertically based on its content",
    category: "style"
  },
  counter: {
    type: "Boolean",
    desc: "Show an automatic counter on bottom right",
    category: "content"
  },
  rounded: {
    type: "Boolean",
    desc: "Applies a small standard border-radius for a squared shape of the component",
    category: "style"
  },
  square: {
    type: "Boolean",
    desc: "Remove border-radius so borders are squared; Overrides 'rounded' prop",
    category: "style"
  },
  dense: {
    type: "Boolean",
    desc: "Dense mode; occupies less space",
    category: "style"
  },
  "item-aligned": {
    type: "Boolean",
    desc: "Match inner content alignment to that of QItem",
    category: "style"
  },
  disable: {
    type: "Boolean",
    desc: "Put component in disabled mode",
    category: "state"
  },
  readonly: {
    type: "Boolean",
    desc: "Put component in readonly mode",
    category: "state"
  },
  autofocus: {
    type: "Boolean",
    desc: "Focus field on initial component render",
    category: "behavior"
  },
  for: {
    type: "String",
    desc: "Used to specify the 'id' of the control and also the 'for' attribute of the label that wraps it; If no 'name' prop is specified, then it is used for this attribute as well",
    examples: [
      "myFieldsId"
    ],
    category: "behavior"
  },
  append: {
    type: "Boolean",
    desc: "Append file(s) to current model rather than replacing them; Has effect only when using 'multiple' mode",
    category: "behavior"
  },
  "display-value": {
    type: [
      "Number",
      "String"
    ],
    desc: "Override default selection string, if not using 'file' or 'selected' scoped slots and if not using 'use-chips' prop",
    examples: [
      "Options: x, y, z"
    ],
    category: "selection"
  },
  "use-chips": {
    type: "Boolean",
    desc: "Use QChip to show picked files",
    category: "selection"
  },
  "counter-label": {
    type: "Function",
    desc: "Label for the counter; The 'counter' prop is necessary to enable this one",
    params: {
      props: {
        type: "Object",
        desc: "Object containing counter label information",
        definition: {
          totalSize: {
            type: "String",
            required: true,
            desc: "The total size of files in human readable format",
            examples: [
              "1.42MB"
            ]
          },
          filesNumber: {
            type: "Number",
            required: true,
            desc: "Number of picked files"
          },
          maxFiles: {
            type: [
              "Number",
              "String"
            ],
            required: true,
            desc: "Maximum number of files (same as 'max-files' prop, if specified); When 'max-files' is not specified, this has 'void 0' as value"
          }
        }
      }
    },
    returns: {
      type: "String",
      desc: "String to display for the counter label"
    },
    examples: [
      ':counter-label="counterLabelFn"'
    ],
    category: "behavior"
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
  "input-class": {
    type: [
      "String",
      "Array",
      "Object"
    ],
    tsType: "VueClassProp",
    desc: "Class definitions to be attributed to the underlying selection container",
    examples: [
      "my-special-class",
      `:input-class="{ 'my-special-class': <condition> }"`
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
    desc: "Style definitions to be attributed to the underlying selection container",
    examples: [
      "background-color: #ff0000",
      `:input-style="{ backgroundColor: '#ff0000' }"`
    ],
    category: "style"
  }
};
var slots = {
  default: {
    desc: "Field main content"
  },
  prepend: {
    desc: "Prepend inner field; Suggestions: QIcon, QBtn"
  },
  append: {
    desc: "Append to inner field; Suggestions: QIcon, QBtn"
  },
  before: {
    desc: "Prepend outer field; Suggestions: QIcon, QBtn"
  },
  after: {
    desc: "Append outer field; Suggestions: QIcon, QBtn"
  },
  label: {
    desc: "Slot for label; Used only if 'label-slot' prop is set or the 'label' prop is set; When it is used the text in the 'label' prop is ignored"
  },
  error: {
    desc: "Slot for errors; Enabled only if 'bottom-slots' prop is used; Suggestion: <div>"
  },
  hint: {
    desc: "Slot for hint text; Enabled only if 'bottom-slots' prop is used; Suggestion: <div>"
  },
  counter: {
    desc: "Slot for counter text; Enabled only if 'bottom-slots' prop is used; Suggestion: <div>"
  },
  loading: {
    desc: "Override default spinner when component is in loading mode; Use in conjunction with 'loading' prop"
  },
  file: {
    desc: "Override default node to render a file from the user picked list",
    scope: {
      index: {
        type: "Number",
        desc: "Selection index"
      },
      file: {
        type: "File",
        desc: "File object"
      },
      ref: {
        type: "Component",
        tsType: "QFile",
        desc: "Reference to the QFile component"
      }
    }
  },
  selected: {
    desc: "Override default selection slot; Suggestion: QChip",
    scope: {
      files: {
        type: [
          "FileList",
          "Array"
        ],
        desc: "Array of File objects"
      },
      ref: {
        type: "Component",
        tsType: "QFile",
        desc: "Reference to the QFile component"
      }
    }
  }
};
var events = {
  rejected: {
    desc: "Emitted after files are picked and some do not pass the validation props (accept, max-file-size, max-total-size, filter, etc)",
    params: {
      rejectedEntries: {
        type: "Array",
        tsType: "QRejectedEntry",
        desc: "Array of { failedPropValidation: string, file: File } Objects for files that do not pass the validation"
      }
    }
  },
  clear: {
    desc: "When using the 'clearable' property, this event is emitted when the clear icon is clicked",
    params: {
      value: {
        type: "Any",
        desc: "The previous value before clearing it"
      }
    }
  },
  "update:model-value": {
    desc: "Emitted when the component needs to change the model; Is also used by v-model",
    params: {
      value: {
        type: "Any",
        desc: "New model value",
        required: true
      }
    }
  }
};
var methods = {
  pickFiles: {
    desc: "Trigger file pick; Must be called as a direct consequence of user interaction (eg. in a click handler), due to browsers security policy",
    params: {
      evt: {
        type: "Event",
        desc: "JS event object"
      }
    }
  },
  addFiles: {
    desc: "Add files programmatically",
    params: {
      files: {
        type: [
          "FileList",
          "Array"
        ],
        desc: "Array of files (instances of File)",
        required: true
      }
    }
  },
  resetValidation: {
    desc: "Reset validation status"
  },
  validate: {
    desc: "Trigger a validation",
    params: {
      value: {
        type: "Any",
        desc: "Optional value to validate against"
      }
    },
    returns: {
      type: [
        "Boolean",
        "Promise<boolean>"
      ],
      desc: "True/false if no async rules, otherwise a Promise with the outcome (true -> validation was a success, false -> invalid models detected)",
      examples: [
        "true",
        "validate().then(outcome => { ... })"
      ]
    }
  },
  focus: {
    desc: "Focus component"
  },
  blur: {
    desc: "Blur component (lose focus)"
  },
  removeAtIndex: {
    desc: "Remove file located at specific index in the model",
    params: {
      index: {
        type: "Number",
        desc: "Index at which to remove selection",
        required: true
      }
    }
  },
  removeFile: {
    desc: "Remove specified file from the model",
    params: {
      file: {
        type: "File",
        desc: "File to remove (instance of File)",
        required: true
      }
    }
  },
  getNativeElement: {
    desc: "DEPRECATED; Access 'nativeEl' directly; Gets the native input DOM Element",
    returns: {
      type: "Element",
      tsType: "QFileNativeElement",
      desc: "The underlying native input DOM Element"
    }
  }
};
var computedProps = {
  hasError: {
    type: "Boolean",
    desc: "Whether the component is in error state"
  },
  nativeEl: {
    type: "Element",
    tsType: "QFileNativeElement",
    desc: "The native input DOM Element",
    addedIn: "v2.10.1"
  }
};
var QFile_default = {
  type,
  meta,
  props,
  slots,
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
  slots,
  type
});
