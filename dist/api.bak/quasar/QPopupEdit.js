// src/api/quasar/QPopupEdit.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/popup-edit"
};
var props = {
  "model-value": {
    desc: "Model of the component; Either use this property (along with a listener for 'update:model-value' event) OR use v-model directive",
    required: true,
    syncable: true,
    category: "model",
    type: "Any",
    examples: [
      'v-model="myValue"'
    ]
  },
  title: {
    type: "String",
    desc: "Optional title (unless 'title' slot is used)",
    examples: [
      "Calories"
    ],
    category: "content"
  },
  buttons: {
    type: "Boolean",
    desc: "Show Set and Cancel buttons",
    category: "content"
  },
  "label-set": {
    type: "String",
    desc: "Override Set button label",
    examples: [
      "OK"
    ],
    category: "content"
  },
  "label-cancel": {
    type: "String",
    desc: "Override Cancel button label",
    examples: [
      "Cancel"
    ],
    category: "content"
  },
  "auto-save": {
    type: "Boolean",
    desc: "Automatically save the model (if changed) when user clicks/taps outside of the popup; It does not apply to ESC key",
    category: "behavior"
  },
  color: {
    type: "String",
    desc: "Color name for component from the Quasar Color Palette",
    examples: [
      "primary",
      "teal-10"
    ],
    category: "style",
    default: "primary",
    required: false
  },
  validate: {
    type: "Function",
    desc: "Validates model then triggers 'save' and closes Popup; Returns a Boolean ('true' means valid, 'false' means abort); Syntax: validate(value); For best performance, reference it from your scope and do not define it inline",
    params: {
      value: {
        type: "Any",
        desc: "Model to validate",
        examples: [
          "My car"
        ]
      }
    },
    returns: {
      type: "Boolean",
      desc: "Is the model valid or not?"
    },
    examples: [
      ':validate="myValidation"'
    ],
    category: "model"
  },
  disable: {
    type: "Boolean",
    desc: "Put component in disabled mode",
    category: "state"
  },
  fit: {
    type: "Boolean",
    desc: "Allows the menu to match at least the full width of its target",
    category: "position"
  },
  cover: {
    type: "Boolean",
    default: true,
    desc: "Allows the menu to cover its target. When used, the 'self' and 'fit' props are no longer effective",
    category: "position",
    required: false
  },
  anchor: {
    type: "String",
    desc: "Two values setting the starting position or anchor point of the menu relative to its target",
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
  self: {
    type: "String",
    desc: "Two values setting the menu's own position relative to its target",
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
  offset: {
    type: "Array",
    desc: "An array of two numbers to offset the menu horizontally and vertically in pixels",
    examples: [
      "[8, 8]",
      "[5, 10]"
    ],
    category: "style"
  },
  "touch-position": {
    type: "Boolean",
    desc: "Allows for the target position to be set by the mouse position, when the target of the menu is either clicked or touched",
    category: "behavior"
  },
  persistent: {
    type: "Boolean",
    desc: "Avoid menu closing by hitting ESC key or by clicking/tapping outside of the Popup",
    category: "behavior"
  },
  "separate-close-popup": {
    type: "Boolean",
    desc: "Separate from parent menu, marking it as a separate closing point for v-close-popup (without this, chained menus close all together)",
    category: "behavior"
  },
  square: {
    type: "Boolean",
    desc: "Forces menu to have squared borders",
    category: "style"
  },
  "max-height": {
    type: "String",
    desc: "The maximum height of the menu; Size in CSS units, including unit name",
    examples: [
      "16px",
      "2rem"
    ],
    category: "style"
  },
  "max-width": {
    type: "String",
    desc: "The maximum width of the menu; Size in CSS units, including unit name",
    examples: [
      "16px",
      "2rem"
    ],
    category: "style"
  }
};
var slots = {
  default: {
    desc: "Used for injecting the form component; Do NOT destructure it",
    scope: {
      initialValue: {
        type: "Any",
        desc: "Initial value",
        examples: [
          0.241,
          "Text"
        ]
      },
      value: {
        type: "Any",
        desc: "Current value",
        examples: [
          0.241,
          "Text"
        ]
      },
      validate: {
        type: "Function",
        desc: "Function that checks if the value is valid",
        params: {
          value: {
            type: "Any",
            required: true,
            desc: "Value to be checked",
            examples: [
              0,
              "Changed text"
            ]
          }
        },
        returns: {
          type: "Boolean",
          desc: "Checked value is valid or not"
        }
      },
      set: {
        type: "Function",
        desc: "Function that sets the value and closes the popup",
        params: null,
        returns: null
      },
      cancel: {
        type: "Function",
        desc: "Function that cancels the editing and reverts the value to the initialValue",
        params: null,
        returns: null
      },
      updatePosition: {
        type: "Function",
        desc: "There are some custom scenarios for which Quasar cannot automatically reposition the component without significant performance drawbacks so the optimal solution is for you to call this method when you need it",
        params: null,
        returns: null
      }
    }
  }
};
var events = {
  "update:model-value": {
    desc: "Emitted when Popup gets cancelled in order to reset model to its initial value; Is also used by v-model",
    params: {
      value: {
        type: "Any",
        desc: "New model value",
        required: true
      }
    }
  },
  "before-show": {
    desc: "Emitted right before Popup gets shown"
  },
  show: {
    desc: "Emitted right after Popup gets shown"
  },
  "before-hide": {
    desc: "Emitted right before Popup gets dismissed"
  },
  hide: {
    desc: "Emitted right after Popup gets dismissed"
  },
  save: {
    desc: "Emitted when value has been successfully validated and it should be saved",
    params: {
      value: {
        type: "Any",
        desc: "Validated value to be saved"
      },
      initialValue: {
        type: "Any",
        desc: "Initial value, before changes"
      }
    }
  },
  cancel: {
    desc: "Emitted when user cancelled the change (hit ESC key or clicking outside of Popup or hit 'Cancel' button)",
    params: {
      value: {
        type: "Any",
        desc: "Edited value"
      },
      initialValue: {
        type: "Any",
        desc: "Initial value, before changes"
      }
    }
  }
};
var methods = {
  set: {
    desc: "Trigger a model update; Validates model (and emits 'save' event if it's the case) then closes Popup"
  },
  cancel: {
    desc: "Triggers a model reset to its initial value ('cancel' event is emitted) then closes Popup"
  },
  show: {
    desc: "Triggers component to show",
    params: {
      evt: {
        type: "Event",
        desc: "JS event object",
        required: false
      }
    }
  },
  hide: {
    desc: "Triggers component to hide",
    params: {
      evt: {
        type: "Event",
        desc: "JS event object",
        required: false
      }
    }
  },
  updatePosition: {
    desc: "There are some custom scenarios for which Quasar cannot automatically reposition the component without significant performance drawbacks so the optimal solution is for you to call this method when you need it"
  }
};
var QPopupEdit_default = {
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
