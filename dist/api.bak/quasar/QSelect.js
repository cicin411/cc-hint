// src/api/quasar/QSelect.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/select"
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
  "virtual-scroll-horizontal": {
    type: "Boolean",
    desc: "Make virtual list work in horizontal mode",
    category: "behavior"
  },
  "virtual-scroll-slice-size": {
    type: [
      "Number",
      "String"
    ],
    desc: "Minimum number of items to render in the virtual list",
    default: "30",
    examples: [
      'virtual-scroll-slice-size="60"'
    ],
    category: "virtual-scroll",
    required: false
  },
  "virtual-scroll-slice-ratio-before": {
    type: [
      "Number",
      "String"
    ],
    desc: "Ratio of number of items in visible zone to render before it",
    default: 1,
    category: "virtual-scroll",
    required: false
  },
  "virtual-scroll-slice-ratio-after": {
    type: [
      "Number",
      "String"
    ],
    desc: "Ratio of number of items in visible zone to render after it",
    default: 1,
    category: "virtual-scroll",
    required: false
  },
  "virtual-scroll-item-size": {
    type: [
      "Number",
      "String"
    ],
    desc: "Default size in pixels (height if vertical, width if horizontal) of an item; This value is used for rendering the initial list; Try to use a value close to the minimum size of an item",
    default: 24,
    category: "virtual-scroll",
    required: false
  },
  "virtual-scroll-sticky-size-start": {
    type: [
      "Number",
      "String"
    ],
    desc: "Size in pixels (height if vertical, width if horizontal) of the sticky part (if using one) at the start of the list; A correct value will improve scroll precision",
    default: "0",
    category: "virtual-scroll",
    required: false
  },
  "virtual-scroll-sticky-size-end": {
    type: [
      "Number",
      "String"
    ],
    desc: "Size in pixels (height if vertical, width if horizontal) of the sticky part (if using one) at the end of the list; A correct value will improve scroll precision",
    default: "0",
    category: "virtual-scroll",
    required: false
  },
  "table-colspan": {
    type: [
      "Number",
      "String"
    ],
    desc: "The number of columns in the table (you need this if you use table-layout: fixed)",
    category: "virtual-scroll|content"
  },
  "model-value": {
    desc: "Model of the component; Must be Array if using 'multiple' prop; Either use this property (along with a listener for 'update:modelValue' event) OR use v-model directive",
    required: true,
    syncable: true,
    category: "model",
    type: "Any",
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
  multiple: {
    type: "Boolean",
    desc: "Allow multiple selection; Model must be Array",
    category: "model|selection"
  },
  "display-value": {
    type: [
      "Number",
      "String"
    ],
    desc: "Override default selection string, if not using 'selected' slot/scoped slot and if not using 'use-chips' prop",
    examples: [
      "Options: x, y, z"
    ],
    category: "selection"
  },
  "display-value-html": {
    type: "Boolean",
    desc: "Force render the selected option(s) as HTML; This can lead to XSS attacks so make sure that you sanitize the content; Does NOT apply when using 'selected' or 'selected-item' slots!",
    category: "selection"
  },
  options: {
    type: "Array",
    desc: "Available options that the user can select from. For best performance freeze the list of options.",
    default: "[]",
    examples: [
      `:options="[ 'BMW', 'Samsung Phone' ]"`,
      `:options="[ { label: 'BMW', value: 'car' }, { label: 'Samsung Phone', value: 'phone' } ]"`
    ],
    category: "options",
    required: false
  },
  "option-value": {
    type: [
      "Function",
      "String"
    ],
    desc: "Property of option which holds the 'value'; If using a function then for best performance, reference it from your scope and do not define it inline",
    default: "value",
    params: {
      option: {
        type: [
          "String",
          "Object"
        ],
        desc: "The current option being processed",
        examples: [
          "'BMW'",
          "'Samsung Phone'",
          "{ label: 'BMW', value: 'car', cannotSelect: true }"
        ]
      }
    },
    returns: {
      type: "Any",
      desc: "Value of the current option",
      examples: [
        "'car'",
        "34"
      ]
    },
    examples: [
      'option-value="modelNumber"',
      ':option-value="(item) => item === null ? null : item.modelNumber"'
    ],
    category: "options",
    required: false
  },
  "option-label": {
    type: [
      "Function",
      "String"
    ],
    desc: "Property of option which holds the 'label'; If using a function then for best performance, reference it from your scope and do not define it inline",
    default: "label",
    params: {
      option: {
        type: [
          "String",
          "Object"
        ],
        desc: "The current option being processed",
        examples: [
          "'BMW'",
          "'Samsung Phone'",
          "{ label: 'BMW', value: 'car', cannotSelect: true }"
        ]
      }
    },
    returns: {
      type: "String",
      desc: "Label of the current option",
      examples: [
        "'BMW'",
        "'Samsung Phone'"
      ]
    },
    examples: [
      'option-label="itemName"',
      `:option-label="(item) => item === null ? 'Null value' : item.itemName"`
    ],
    category: "options",
    required: false
  },
  "option-disable": {
    type: [
      "Function",
      "String"
    ],
    desc: "Property of option which tells it's disabled; The value of the property must be a Boolean; If using a function then for best performance, reference it from your scope and do not define it inline",
    default: "disable",
    params: {
      option: {
        type: [
          "String",
          "Object"
        ],
        desc: "The current option being processed",
        examples: [
          "'BMW'",
          "'Samsung Phone'",
          "{ label: 'BMW', value: 'car', cannotSelect: true }"
        ]
      }
    },
    returns: {
      type: "Boolean",
      desc: "If true, the current option will be disabled"
    },
    examples: [
      'option-disable="cannotSelect"',
      ':option-disable="(item) => item === null ? true : item.cannotSelect"'
    ],
    category: "options",
    required: false
  },
  "hide-selected": {
    type: "Boolean",
    desc: "Hides selection; Use the underlying input tag to hold the label (instead of showing it to the right of the input) of the selected option; Only works for non 'multiple' Selects",
    category: "selection"
  },
  "hide-dropdown-icon": {
    type: "Boolean",
    desc: "Hides dropdown icon",
    category: "content|behavior"
  },
  "dropdown-icon": {
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
  "max-values": {
    type: [
      "Number",
      "String"
    ],
    desc: "Allow a maximum number of selections that the user can do",
    category: "selection"
  },
  "options-dense": {
    type: "Boolean",
    desc: "Dense mode for options list; occupies less space",
    category: "options"
  },
  "options-dark": {
    type: "Boolean",
    desc: "Options menu will be colored with a dark color",
    category: "options"
  },
  "options-selected-class": {
    type: "String",
    desc: "CSS class name for options that are active/selected; Set it to an empty string to stop applying the default (which is text-* where * is the 'color' prop value)",
    examples: [
      "text-orange"
    ],
    category: "options"
  },
  "options-html": {
    type: "Boolean",
    desc: "Force render the options as HTML; This can lead to XSS attacks so make sure that you sanitize the content; Does NOT apply when using 'option' slot!",
    category: "options"
  },
  "options-cover": {
    type: "Boolean",
    desc: "Expanded menu will cover the component (will not work along with 'use-input' prop for obvious reasons)",
    category: "options"
  },
  "menu-shrink": {
    type: "Boolean",
    desc: "Allow the options list to be narrower than the field (only in menu mode)",
    category: "options"
  },
  "menu-anchor": {
    type: "String",
    desc: "Two values setting the starting position or anchor point of the options list relative to the field (only in menu mode)",
    values: [
      "top left",
      "top middle",
      "top right",
      "top start",
      "top end",
      "center left",
      "center middle",
      "center right",
      "center start",
      "center end",
      "bottom left",
      "bottom middle",
      "bottom right",
      "bottom start",
      "bottom end"
    ],
    category: "position"
  },
  "menu-self": {
    type: "String",
    desc: "Two values setting the options list's own position relative to its target (only in menu mode)",
    values: [
      "top left",
      "top middle",
      "top right",
      "top start",
      "top end",
      "center left",
      "center middle",
      "center right",
      "center start",
      "center end",
      "bottom left",
      "bottom middle",
      "bottom right",
      "bottom start",
      "bottom end"
    ],
    category: "position"
  },
  "menu-offset": {
    type: "Array",
    desc: "An array of two numbers to offset the options list horizontally and vertically in pixels (only in menu mode)",
    examples: [
      "[8, 8]",
      "[5, 10]"
    ],
    category: "position"
  },
  "popup-content-class": {
    type: "String",
    desc: "Class definitions to be attributed to the popup content",
    examples: [
      "my-special-class"
    ],
    category: "style"
  },
  "popup-content-style": {
    type: [
      "String",
      "Array",
      "Object"
    ],
    tsType: "VueStyleProp",
    desc: "Style definitions to be attributed to the popup content",
    examples: [
      "background-color: #ff0000",
      `:popup-content-style="{ backgroundColor: '#ff0000' }"`
    ],
    category: "style"
  },
  "use-input": {
    type: "Boolean",
    desc: "Use an input tag where users can type",
    category: "content"
  },
  "use-chips": {
    type: "Boolean",
    desc: "Use QChip to show what is currently selected",
    category: "selection"
  },
  "fill-input": {
    type: "Boolean",
    desc: "Fills the input with current value; Useful along with 'hide-selected'; Does NOT works along with 'multiple' selection",
    category: "behavior"
  },
  "new-value-mode": {
    type: "String",
    desc: "Enables creation of new values and defines behavior when a new value is added: 'add' means it adds the value (even if possible duplicate), 'add-unique' adds only unique values, and 'toggle' adds or removes the value (based on if it exists or not already); When using this prop then listening for @new-value becomes optional (only to override the behavior defined by 'new-value-mode')",
    values: [
      "add",
      "add-unique",
      "toggle"
    ],
    category: "behavior"
  },
  "map-options": {
    type: "Boolean",
    desc: "Try to map labels of model from 'options' Array; has a small performance penalty; If you are using emit-value you will probably need to use map-options to display the label text in the select field rather than the value;  Refer to the 'Affecting model' section above",
    category: "options"
  },
  "emit-value": {
    type: "Boolean",
    desc: "Update model with the value of the selected option instead of the whole option",
    category: "model"
  },
  "input-debounce": {
    type: [
      "Number",
      "String"
    ],
    desc: "Debounce the input model update with an amount of milliseconds",
    default: 500,
    category: "content",
    required: false
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
  autocomplete: {
    type: "String",
    desc: "Autocomplete attribute for field",
    examples: [
      'autocomplete="country"'
    ],
    category: "behavior"
  },
  "transition-show": {
    type: "String",
    desc: "Transition when showing the menu/dialog; One of Quasar's embedded transitions",
    examples: [
      "fade",
      "slide-down"
    ],
    category: "behavior",
    default: "fade",
    required: false
  },
  "transition-hide": {
    type: "String",
    desc: "Transition when hiding the menu/dialog; One of Quasar's embedded transitions",
    examples: [
      "fade",
      "slide-down"
    ],
    category: "behavior",
    default: "fade",
    required: false
  },
  "transition-duration": {
    type: [
      "String",
      "Number"
    ],
    desc: "Transition duration when hiding the menu/dialog (in milliseconds, without unit)",
    default: 300,
    category: "behavior",
    required: false
  },
  behavior: {
    type: "String",
    desc: "Overrides the default dynamic mode of showing as menu on desktop and dialog on mobiles",
    values: [
      "default",
      "menu",
      "dialog"
    ],
    default: "default",
    category: "behavior",
    required: false
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
    desc: "Override default spinner when component is in loading mode; Suggestion: spinners"
  },
  selected: {
    desc: "Override default selection slot; Suggestion: QChip"
  },
  "before-options": {
    desc: "Template slot for the elements that should be rendered before the list of options"
  },
  "after-options": {
    desc: "Template slot for the elements that should be rendered after the list of options"
  },
  "no-option": {
    desc: "What should the menu display after filtering options and none are left to be displayed; Suggestion: <div>",
    scope: {
      inputValue: {
        type: "String",
        desc: "Input textfield value, if any (not QSelect model)",
        examples: [
          "typed something"
        ]
      }
    }
  },
  "selected-item": {
    desc: "Override default selection slot; Suggestion: QChip",
    scope: {
      index: {
        type: "Number",
        desc: "Selection index"
      },
      opt: {
        type: "Any",
        desc: "Selected option -- its value is taken from model"
      },
      selected: {
        type: "Boolean",
        desc: "Always true -- passed down as prop to QItem (when using QItem)"
      },
      removeAtIndex: {
        type: "Function",
        desc: "Remove selected option located at specific index",
        params: {
          index: {
            type: "Number",
            required: true,
            desc: "Index at which to remove selection"
          }
        },
        returns: null
      },
      toggleOption: {
        type: "Function",
        desc: "Add/remove option from model",
        params: {
          opt: {
            type: "Any",
            required: true,
            desc: "Option to add to model"
          }
        },
        returns: null
      },
      tabindex: {
        type: "Number",
        desc: "Tabindex HTML attribute value associated with respective option",
        values: [
          0,
          -1
        ]
      }
    }
  },
  option: {
    desc: "Customize how options are rendered; Suggestion: QItem",
    scope: {
      index: {
        type: "Number",
        desc: "Option index"
      },
      opt: {
        type: "Any",
        desc: "Option -- its value is taken from 'options' prop"
      },
      selected: {
        type: "Boolean",
        desc: "Is option selected?"
      },
      focused: {
        type: "Boolean",
        desc: "Is option focused?"
      },
      toggleOption: {
        type: "Function",
        desc: "Add/remove option from model",
        params: {
          opt: {
            type: "Any",
            required: true,
            desc: "Option to add to model"
          }
        },
        returns: null
      },
      setOptionIndex: {
        type: "Function",
        desc: "Sets option from menu as 'focused'",
        params: {
          index: {
            type: "Number",
            required: true,
            desc: "Index of option from menu"
          }
        },
        returns: null
      },
      itemProps: {
        type: "Object",
        desc: "Computed properties passed down to QItem"
      }
    }
  }
};
var events = {
  "virtual-scroll": {
    desc: "Emitted when the virtual scroll occurs",
    params: {
      details: {
        type: "Object",
        desc: "Object of properties on the new scroll position",
        definition: {
          index: {
            type: "Number",
            required: true,
            desc: "Index of the list item that was scrolled into view (0 based)"
          },
          from: {
            type: "Number",
            required: true,
            desc: "The index of the first list item that is rendered (0 based)"
          },
          to: {
            type: "Number",
            required: true,
            desc: "The index of the last list item that is rendered (0 based)"
          },
          direction: {
            type: "String",
            required: true,
            desc: "Direction of change",
            values: [
              "increase",
              "decrease"
            ]
          },
          ref: {
            type: "Component",
            required: true,
            desc: "Vue reference to the QSelect",
            tsType: "QSelect"
          }
        }
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
  },
  "input-value": {
    desc: "Emitted when the value in the text input changes",
    params: {
      value: {
        type: "String",
        desc: "New text value"
      }
    }
  },
  remove: {
    desc: "Emitted when an option is removed from selection",
    params: {
      details: {
        type: "Object",
        desc: "Removal details",
        definition: {
          index: {
            type: "Number",
            required: true,
            desc: "Model index at which removal took place"
          },
          value: {
            type: "Any",
            required: true,
            desc: "The actual value that was removed"
          }
        }
      }
    }
  },
  add: {
    desc: "Emitted when an option is added to the selection",
    params: {
      details: {
        type: "Object",
        desc: "Addition details",
        definition: {
          index: {
            type: "Number",
            required: true,
            desc: "Model index at which addition took place"
          },
          value: {
            type: "Any",
            required: true,
            desc: "The actual value that was added"
          }
        }
      }
    }
  },
  "new-value": {
    desc: "Enables creation of new values; Emitted when a new value has been created; You can override 'new-value-mode' property with it",
    params: {
      inputValue: {
        type: "String",
        desc: "What the user typed",
        examples: [
          "phone"
        ]
      },
      doneFn: {
        type: "Function",
        desc: "Adds (optional) value to the model; Do not forget to call it after you validate the newly created value; Call it with no parameters if nothing should be added",
        params: {
          item: {
            type: "Any",
            required: false,
            desc: "Item to add"
          },
          mode: {
            type: "String",
            required: false,
            desc: "Override 'new-value-mode' (prop) behavior should you wish to",
            values: [
              "add",
              "add-unique",
              "toggle"
            ],
            default: "add"
          }
        },
        returns: null
      }
    }
  },
  filter: {
    desc: "Emitted when user wants to filter a value",
    params: {
      inputValue: {
        type: "String",
        desc: "What the user typed",
        examples: [
          "phone"
        ]
      },
      doneFn: {
        type: "Function",
        desc: "Supply a function which makes the necessary updates",
        params: {
          callbackFn: {
            type: "Function",
            required: true,
            desc: "Callback to call to make the actual updates",
            params: null,
            returns: null
          },
          afterFn: {
            type: "Function",
            required: false,
            desc: "Callback to call at the end after the update has been fully processed by QSelect",
            params: {
              ref: {
                type: "Component",
                tsType: "QSelect",
                required: true,
                desc: "Vue reference to the QSelect which triggered the filtering"
              }
            },
            returns: null
          }
        },
        returns: null
      },
      abortFn: {
        type: "Function",
        desc: "Call this function if something went wrong",
        params: null,
        returns: null
      }
    }
  },
  "filter-abort": {
    desc: "Emitted when a filtering was aborted; Probably a new one was requested?"
  },
  "popup-show": {
    desc: "Emitted when the select options menu or dialog is shown.",
    params: {
      evt: {
        type: "Event",
        desc: "JS event object"
      }
    }
  },
  "popup-hide": {
    desc: "Emitted when the select options menu or dialog is hidden.",
    params: {
      evt: {
        type: "Event",
        desc: "JS event object"
      }
    }
  }
};
var methods = {
  scrollTo: {
    desc: "Scroll the virtual scroll list to the item with the specified index (0 based)",
    params: {
      index: {
        type: [
          "String",
          "Number"
        ],
        desc: "The index of the list item (0 based)",
        required: true
      },
      edge: {
        type: "String",
        desc: "The edge to align to if the item is not visible already (by default it aligns to end if scrolling towards the end and to start otherwise); If the '-force' version is used then it always aligns",
        values: [
          "start",
          "center",
          "end",
          "start-force",
          "center-force",
          "end-force"
        ]
      }
    }
  },
  reset: {
    desc: "Resets the virtual scroll computations; Needed for custom edge-cases"
  },
  refresh: {
    desc: "Refreshes the virtual scroll list; Use it after appending items",
    params: {
      index: {
        type: [
          "String",
          "Number"
        ],
        desc: "The index of the list item to scroll to after refresh (0 based); If it's not specified the scroll position is not changed; Use a negative value to keep scroll position"
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
  showPopup: {
    desc: "Focus and open popup"
  },
  hidePopup: {
    desc: "Hide popup"
  },
  removeAtIndex: {
    desc: "Remove selected option located at specific index",
    params: {
      index: {
        type: "Number",
        required: true,
        desc: "Index at which to remove selection"
      }
    }
  },
  add: {
    desc: "Adds option to model",
    params: {
      opt: {
        type: "Any",
        required: true,
        desc: "Option to add to model"
      },
      unique: {
        type: "Boolean",
        desc: "Option must be unique"
      }
    }
  },
  toggleOption: {
    desc: "Add/remove option from model",
    params: {
      opt: {
        type: "Any",
        required: true,
        desc: "Option to add to model"
      },
      keepOpen: {
        type: "Boolean",
        desc: "Don't close the menu and do not clear the filter"
      }
    }
  },
  getOptionIndex: {
    desc: "Gets current focused option index from menu; It's -1 if no option is focused",
    returns: {
      type: "Number",
      desc: "Index of option from menu; It's -1 if no option is focused"
    },
    addedIn: "v2.5.4"
  },
  setOptionIndex: {
    desc: "Sets option from menu as 'focused'; -1 to focus none",
    params: {
      index: {
        type: "Number",
        required: true,
        desc: "Index of option from menu; -1 to focus none"
      }
    }
  },
  moveOptionSelection: {
    desc: "Move selected option from menu by index offset",
    params: {
      offset: {
        type: "Number",
        desc: "Number of options to move up or down",
        default: 1,
        required: false
      },
      skipInputValue: {
        type: "Boolean",
        desc: "Don't set input-value on navigation"
      }
    }
  },
  filter: {
    desc: "Filter options",
    params: {
      value: {
        type: "String",
        required: true,
        desc: "String to filter with",
        examples: [
          "car"
        ]
      }
    }
  },
  updateMenuPosition: {
    desc: "Recomputes menu position"
  },
  updateInputValue: {
    desc: "If 'use-input' is specified, this updates the value that it holds",
    params: {
      value: {
        type: "String",
        required: true,
        desc: "String to set the input value to",
        examples: [
          "hotel"
        ]
      },
      noFilter: {
        type: "Boolean",
        desc: "Set to true if you don't want the filter (if any) to be also triggered"
      }
    }
  },
  isOptionSelected: {
    desc: "Tells if an option is selected",
    params: {
      opt: {
        type: "Any",
        required: true,
        desc: "Option entry"
      }
    },
    returns: {
      type: "Boolean",
      desc: "Option is selected or not"
    }
  },
  getEmittingOptionValue: {
    desc: "Get the model value that would be emitted by QSelect when selecting a said option; Also takes into consideration if 'emit-value' is set",
    params: {
      opt: {
        type: "Any",
        required: true,
        desc: "Option entry"
      }
    },
    returns: {
      type: "Any",
      desc: "Emitting model value of said option"
    }
  },
  getOptionValue: {
    desc: "Get the model value of an option; Takes into consideration 'option-value' (if used), but does not looks for 'emit-value', like getEmittingOptionValue() does",
    params: {
      opt: {
        type: "Any",
        required: true,
        desc: "Option entry"
      }
    },
    returns: {
      type: "Any",
      desc: "Model value of said option"
    }
  },
  getOptionLabel: {
    desc: "Get the label of an option; Takes into consideration the 'option-label' prop (if used)",
    params: {
      opt: {
        type: "Any",
        required: true,
        desc: "Option entry"
      }
    },
    returns: {
      type: "Any",
      desc: "Label of said option"
    }
  },
  isOptionDisabled: {
    desc: "Tells if an option is disabled; Takes into consideration 'option-disable' prop (if used)",
    params: {
      opt: {
        type: "Any",
        required: true,
        desc: "Option entry"
      }
    },
    returns: {
      type: "Boolean",
      desc: "Option is disabled or not"
    }
  }
};
var computedProps = {
  hasError: {
    type: "Boolean",
    desc: "Whether the component is in error state"
  }
};
var QSelect_default = {
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
