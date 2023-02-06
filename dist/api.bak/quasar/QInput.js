// src/api/quasar/QInput.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/input"
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
  mask: {
    type: "String",
    desc: "Custom mask or one of the predefined mask names",
    examples: [
      "###-##",
      "date",
      "datetime",
      "time",
      "fulltime",
      "phone",
      "card"
    ],
    category: "behavior"
  },
  "fill-mask": {
    type: [
      "Boolean",
      "String"
    ],
    desc: "Fills string with specified characters (or underscore if value is not string) to fill mask's length",
    examples: [
      "true",
      "'0'",
      "'_'"
    ],
    category: "behavior"
  },
  "reverse-fill-mask": {
    type: "Boolean",
    desc: "Fills string from the right side of the mask",
    category: "behavior"
  },
  "unmasked-value": {
    type: "Boolean",
    desc: "Model will be unmasked (won't contain tokens/separation characters)",
    category: "behavior"
  },
  "model-value": {
    desc: "Model of the component; Either use this property (along with a listener for 'update:modelValue' event) OR use v-model directive",
    required: true,
    syncable: true,
    category: "model",
    type: [
      "String",
      "Number",
      "null",
      "undefined"
    ],
    examples: [
      'v-model="myText"'
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
  "shadow-text": {
    type: "String",
    desc: "Text to be displayed as shadow at the end of the text in the control; Does NOT applies to type=file",
    examples: [
      "rest of the fill value"
    ],
    category: "content"
  },
  type: {
    type: "String",
    desc: "Input type",
    default: "text",
    values: [
      "text",
      "password",
      "textarea",
      "email",
      "search",
      "tel",
      "file",
      "number",
      "url",
      "time",
      "date"
    ],
    category: "general",
    required: false
  },
  debounce: {
    type: [
      "String",
      "Number"
    ],
    desc: "Debounce amount (in milliseconds) when updating model",
    category: "model"
  },
  maxlength: {
    type: [
      "String",
      "Number"
    ],
    desc: "Specify a max length of model",
    category: "model"
  },
  autogrow: {
    type: "Boolean",
    desc: "Make field autogrow along with its content (uses a textarea)",
    category: "content"
  },
  "input-class": {
    type: [
      "String",
      "Array",
      "Object"
    ],
    tsType: "VueClassProp",
    desc: "Class definitions to be attributed to the underlying input tag",
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
    desc: "Style definitions to be attributed to the underlying input tag",
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
  }
};
var events = {
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
        type: [
          "String",
          "Number",
          "null"
        ],
        desc: "New model value",
        required: true
      }
    }
  },
  focus: {
    desc: "Emitted when component gets focused",
    params: {
      evt: {
        type: "Event",
        desc: "JS event object"
      }
    }
  },
  blur: {
    desc: "Emitted when component loses focus",
    params: {
      evt: {
        type: "Event",
        desc: "JS event object"
      }
    }
  }
};
var methods = {
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
    desc: "Focus underlying input tag"
  },
  blur: {
    desc: "Lose focus on underlying input tag"
  },
  select: {
    desc: "Select input text"
  },
  getNativeElement: {
    desc: "DEPRECATED; Access 'nativeEl' directly instead; Get the native input/textarea DOM Element",
    returns: {
      type: "Element",
      tsType: "QInputNativeElement",
      desc: "The underlying native input/textarea DOM Element"
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
    tsType: "QInputNativeElement",
    desc: "The native input/textarea DOM Element",
    addedIn: "v2.10.1"
  }
};
var QInput_default = {
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
