// src/api/quasar/QForm.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/form"
};
var props = {
  autofocus: {
    type: "Boolean",
    desc: "Focus first focusable element on initial component render",
    category: "behavior"
  },
  "no-error-focus": {
    type: "Boolean",
    desc: "Do not try to focus on first component that has a validation error when submitting form",
    category: "behavior"
  },
  "no-reset-focus": {
    type: "Boolean",
    desc: "Do not try to focus on first component when resetting form",
    category: "behavior"
  },
  greedy: {
    type: "Boolean",
    desc: "Validate all fields in form (by default it stops after finding the first invalid field with synchronous validation)",
    category: "behavior"
  }
};
var slots = {
  default: {
    desc: "Default slot in the devland unslotted content of the component"
  }
};
var events = {
  submit: {
    desc: "Emitted when all validations have passed when tethered to a submit button",
    params: {
      evt: {
        type: [
          "Event",
          "SubmitEvent"
        ],
        desc: "Form submission event object"
      }
    }
  },
  reset: {
    desc: "Emitted when all validations have been reset when tethered to a reset button; It is recommended to manually reset the wrapped components models in this handler"
  },
  "validation-success": {
    desc: "Emitted after a validation was triggered and all inner Quasar components models are valid"
  },
  "validation-error": {
    desc: "Emitted after a validation was triggered and at least one of the inner Quasar components models are NOT valid",
    params: {
      ref: {
        type: "Component",
        desc: "Vue reference to the first component that triggered the validation error"
      }
    }
  }
};
var methods = {
  focus: {
    desc: "Focus on first focusable element/component in the form"
  },
  validate: {
    desc: "Triggers a validation on all applicable inner Quasar components",
    params: {
      shouldFocus: {
        type: "Boolean",
        desc: "Tell if it should focus or not on component with error on submitting form; Overrides 'no-focus-error' prop if specified"
      }
    },
    returns: {
      type: "Promise<boolean>",
      desc: "Promise is always fulfilled and receives the outcome (true -> validation was a success, false -> invalid models detected)",
      examples: [
        "validate().then(outcome => { ... })"
      ]
    }
  },
  resetValidation: {
    desc: "Resets the validation on all applicable inner Quasar components"
  },
  submit: {
    desc: "Manually trigger form validation and submit",
    params: {
      evt: {
        type: "Event",
        desc: "JS event object"
      }
    }
  },
  reset: {
    desc: "Manually trigger form reset",
    params: {
      evt: {
        type: "Event",
        desc: "JS event object"
      }
    }
  },
  getValidationComponents: {
    desc: "Get array of children vue components that support validation",
    returns: {
      type: "Array",
      desc: "Vue components that support Quasar validation API"
    }
  }
};
var QForm_default = {
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