// src/api/quasar/QRange.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/range"
};
var props = {
  name: {
    type: "String",
    desc: "Used to specify the name of the control; Useful if dealing with forms submitted directly to a URL",
    examples: [
      "car_id"
    ],
    category: "behavior"
  },
  min: {
    type: "Number",
    desc: "Minimum value of the model; Set track's minimum value",
    default: 0,
    examples: [
      ':min="0"'
    ],
    category: "model",
    required: false
  },
  max: {
    type: "Number",
    desc: "Maximum value of the model; Set track's maximum value",
    default: 100,
    category: "model",
    required: false
  },
  "inner-min": {
    type: "Number",
    desc: "Inner minimum value of the model; Use in case you need the model value to be inside of the track's min-max values; Needs to be higher or equal to 'min' prop; Defaults to 'min' prop",
    category: "model",
    addedIn: "v2.4"
  },
  "inner-max": {
    type: "Number",
    desc: "Inner maximum value of the model; Use in case you need the model value to be inside of the track's min-max values; Needs to be lower or equal to 'max' prop; Defaults to 'max' prop",
    category: "model",
    addedIn: "v2.4"
  },
  step: {
    type: "Number",
    desc: "Specify step amount between valid values (> 0.0); When step equals to 0 it defines infinite granularity",
    default: 1,
    category: "model",
    required: false
  },
  snap: {
    type: "Boolean",
    desc: "Snap on valid values, rather than sliding freely; Suggestion: use with 'step' prop",
    category: "behavior"
  },
  reverse: {
    type: "Boolean",
    desc: "Work in reverse (changes direction)",
    category: "behavior"
  },
  vertical: {
    type: "Boolean",
    desc: "Display in vertical direction",
    category: "behavior"
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
  "track-color": {
    type: "String",
    desc: "Color name for the track (can be 'transparent' too) from the Quasar Color Palette",
    examples: [
      "primary",
      "teal-10"
    ],
    category: "style",
    addedIn: "v2.4"
  },
  "track-img": {
    type: "String",
    desc: "Apply a pattern image on the track",
    transformAssetUrls: true,
    examples: [
      "~assets/my-pattern.png"
    ],
    category: "style",
    addedIn: "v2.4"
  },
  "inner-track-color": {
    type: "String",
    desc: "Color name for the inner track (can be 'transparent' too) from the Quasar Color Palette",
    examples: [
      "primary",
      "teal-10"
    ],
    category: "style",
    addedIn: "v2.4"
  },
  "inner-track-img": {
    type: "String",
    desc: "Apply a pattern image on the inner track",
    transformAssetUrls: true,
    examples: [
      "~assets/my-pattern.png"
    ],
    category: "style",
    addedIn: "v2.4"
  },
  "selection-color": {
    type: "String",
    desc: "Color name for the selection bar (can be 'transparent' too) from the Quasar Color Palette",
    examples: [
      "primary",
      "teal-10"
    ],
    category: "style",
    addedIn: "v2.4"
  },
  "selection-img": {
    type: "String",
    desc: "Apply a pattern image on the selection bar",
    transformAssetUrls: true,
    examples: [
      "~assets/my-pattern.png"
    ],
    category: "style",
    addedIn: "v2.4"
  },
  label: {
    type: "Boolean",
    desc: "Popup a label when user clicks/taps on the slider thumb and moves it",
    category: "content"
  },
  "label-color": {
    type: "String",
    desc: "Color name for component from the Quasar Color Palette",
    examples: [
      "primary",
      "teal-10"
    ],
    category: "style"
  },
  "label-text-color": {
    type: "String",
    desc: "Color name for component from the Quasar Color Palette",
    examples: [
      "primary",
      "teal-10"
    ],
    category: "style"
  },
  "switch-label-side": {
    type: "Boolean",
    desc: "Switch the position of the label (top <-> bottom or left <-> right)",
    category: "style",
    addedIn: "v2.4"
  },
  "label-always": {
    type: "Boolean",
    desc: "Always display the label",
    category: "behavior|content"
  },
  markers: {
    type: [
      "Boolean",
      "Number"
    ],
    desc: "Display markers on the track, one for each possible value for the model or using a custom step (when specifying a Number)",
    category: "content",
    examples: [
      "markers",
      ':markers="5"'
    ]
  },
  "marker-labels": {
    type: [
      "Boolean",
      "Array",
      "Object",
      "Function"
    ],
    tsType: "SliderMarkerLabels",
    desc: "Configure the marker labels (or show the default ones if 'true'); Array of definition Objects or Object with key-value where key is the model and the value is the marker label definition",
    definition: {
      value: {
        type: "Number",
        required: true,
        desc: "Value of equivalent model where to position the marker"
      },
      label: {
        type: [
          "Number",
          "String"
        ],
        desc: "Label to use"
      },
      classes: {
        type: [
          "String",
          "Array",
          "Object"
        ],
        tsType: "VueClassProp",
        desc: "CSS classes to be attributed to the marker label",
        examples: [
          "my-class-name"
        ]
      },
      style: {
        type: "Object",
        tsType: "VueStyleObjectProp",
        desc: "Style definitions to be attributed to the marker label",
        examples: [
          "{ height: '24px' }"
        ]
      }
    },
    params: {
      value: {
        type: "Number",
        desc: "The marker value to transform",
        required: true
      }
    },
    returns: {
      type: [
        "String",
        "Object"
      ],
      desc: "Marker definition Object or directly a String for the label of the marker",
      definition: {
        value: {
          type: "Number",
          desc: "Value of equivalent model where to position the marker"
        },
        label: {
          type: [
            "Number",
            "String"
          ],
          desc: "Label to use"
        },
        classes: {
          type: [
            "String",
            "Array",
            "Object"
          ],
          tsType: "VueClassProp",
          desc: "CSS classes to be attributed to the marker label",
          examples: [
            "my-class-name"
          ]
        },
        style: {
          type: "Object",
          tsType: "VueStyleObjectProp",
          desc: "Style definitions to be attributed to the marker label",
          examples: [
            "{ height: '24px' }"
          ]
        }
      }
    },
    category: "content",
    examples: [
      true,
      "[ { value: 0, label: '0%' }, { value: 5, classes: 'my-class', style: { width: '24px' } } ]",
      "{ 0: '0%', 5: { label: '5%', classes: 'my-class', style: { width: '24px' } } }",
      "val => (10 * val) + '%'",
      "val => ({ label: (10 * val) + '%', classes: 'my-class', style: { width: '24px' } })"
    ],
    addedIn: "v2.4"
  },
  "marker-labels-class": {
    type: "String",
    desc: "CSS class(es) to apply to the marker labels container",
    examples: [
      "text-orange"
    ],
    category: "style",
    addedIn: "v2.4"
  },
  "switch-marker-labels-side": {
    type: "Boolean",
    desc: "Switch the position of the marker labels (top <-> bottom or left <-> right)",
    category: "style",
    addedIn: "v2.4"
  },
  "track-size": {
    type: "String",
    desc: "Track size (including CSS unit)",
    default: "4px",
    examples: [
      "35px"
    ],
    category: "style",
    addedIn: "v2.4",
    required: false
  },
  "thumb-size": {
    type: "String",
    desc: "Thumb size (including CSS unit)",
    default: "20px",
    examples: [
      "20px"
    ],
    category: "style",
    addedIn: "v2.4",
    required: false
  },
  "thumb-color": {
    type: "String",
    desc: "Color name for component from the Quasar Color Palette",
    examples: [
      "primary",
      "teal-10"
    ],
    category: "style",
    addedIn: "v2.4"
  },
  "thumb-path": {
    type: "String",
    desc: "Set custom thumb svg path",
    default: "M 4, 10 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0",
    examples: [
      "M5 5 h10 v10 h-10 v-10"
    ],
    category: "style",
    required: false
  },
  dark: {
    type: "Boolean",
    desc: "Notify the component that the background is a dark color",
    category: "style"
  },
  dense: {
    type: "Boolean",
    desc: "Dense mode; occupies less space",
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
  "model-value": {
    desc: "Model of the component of type { min, max } (both values must be between global min/max); Either use this property (along with a listener for 'update:modelValue' event) OR use v-model directive",
    required: true,
    syncable: true,
    category: "model",
    type: [
      "Object",
      "null",
      "undefined"
    ],
    definition: {
      min: {
        type: [
          "Number",
          "null"
        ],
        desc: "Model value for left thumb"
      },
      max: {
        type: [
          "Number",
          "null"
        ],
        desc: "Model value for right thumb"
      }
    },
    examples: [
      'v-model="positionModel"'
    ]
  },
  "drag-range": {
    type: "Boolean",
    desc: "User can drag range instead of just the two thumbs",
    category: "content"
  },
  "drag-only-range": {
    type: "Boolean",
    desc: "User can drag only the range instead and NOT the two thumbs",
    category: "content"
  },
  "left-label-color": {
    type: "String",
    desc: "Color name for left label background from the Quasar Color Palette",
    examples: [
      "primary",
      "teal-10"
    ],
    category: "labels"
  },
  "left-label-text-color": {
    type: "String",
    desc: "Color name for left label text from the Quasar Color Palette",
    examples: [
      "primary",
      "teal-10"
    ],
    category: "labels"
  },
  "right-label-color": {
    type: "String",
    desc: "Color name for right label background from the Quasar Color Palette",
    examples: [
      "primary",
      "teal-10"
    ],
    category: "labels"
  },
  "right-label-text-color": {
    type: "String",
    desc: "Color name for right label text from the Quasar Color Palette",
    examples: [
      "primary",
      "teal-10"
    ],
    category: "labels"
  },
  "left-label-value": {
    type: [
      "String",
      "Number"
    ],
    desc: "Override default label for min value",
    examples: [
      `:left-label-value="model.min + 'px'"`
    ],
    category: "labels"
  },
  "right-label-value": {
    type: [
      "String",
      "Number"
    ],
    desc: "Override default label for max value",
    examples: [
      `:right-label-value="model.max + 'px'"`
    ],
    category: "labels"
  },
  "left-thumb-color": {
    type: "String",
    desc: "Color name (from the Quasar Color Palette) for left thumb",
    examples: [
      "primary",
      "teal-10"
    ],
    category: "labels",
    addedIn: "v2.4"
  },
  "right-thumb-color": {
    type: "String",
    desc: "Color name (from the Quasar Color Palette) for right thumb",
    examples: [
      "primary",
      "teal-10"
    ],
    category: "labels",
    addedIn: "v2.4"
  }
};
var slots = {
  "marker-label": {
    desc: "What should the menu display after filtering options and none are left to be displayed; Suggestion: <div>",
    addedIn: "v2.4",
    scope: {
      marker: {
        type: "Object",
        tsType: "SliderMarkerLabelConfig",
        desc: "Config for current marker label",
        definition: {
          index: {
            type: "Number",
            desc: "Index of the marker label (0-based)"
          },
          value: {
            type: "Number",
            desc: "Equivalent model value for the marker label"
          },
          label: {
            type: [
              "Number",
              "String"
            ],
            desc: "Configured label for the marker"
          },
          classes: {
            type: "String",
            desc: "Required CSS classes to be applied to the marker element"
          },
          style: {
            type: "Object",
            tsType: "VueStyleObjectProp",
            desc: "Style definitions to be attributed to the marker label",
            examples: [
              "{ height: '24px' }"
            ]
          }
        }
      },
      markerList: {
        type: "Array",
        tsType: "SliderMarkerLabelArrayConfig",
        desc: "Array of marker label configs",
        definition: {
          index: {
            type: "Number",
            desc: "Index of the marker label (0-based)"
          },
          value: {
            type: "Number",
            desc: "Equivalent model value for the marker label"
          },
          label: {
            type: [
              "Number",
              "String"
            ],
            desc: "Configured label for the marker"
          },
          classes: {
            type: "String",
            desc: "Required CSS classes to be applied to the marker element"
          },
          style: {
            type: "Object",
            tsType: "VueStyleObjectProp",
            desc: "Style definitions to be attributed to the marker label",
            examples: [
              "{ height: '24px' }"
            ]
          }
        }
      },
      markerMap: {
        type: "Object",
        tsType: "SliderMarkerLabelObjectConfig",
        desc: "Object with key-value where key is the model and the value is the marker label config",
        definition: {
          "...key": {
            type: "Object",
            desc: "Marker label config",
            definition: {
              index: {
                type: "Number",
                desc: "Index of the marker label (0-based)"
              },
              value: {
                type: "Number",
                desc: "Equivalent model value for the marker label"
              },
              label: {
                type: [
                  "Number",
                  "String"
                ],
                desc: "Configured label for the marker"
              },
              classes: {
                type: "String",
                desc: "Required CSS classes to be applied to the marker element"
              },
              style: {
                type: "Object",
                tsType: "VueStyleObjectProp",
                desc: "Style definitions to be attributed to the marker label",
                examples: [
                  "{ height: '24px' }"
                ]
              }
            }
          }
        }
      },
      classes: {
        type: "String",
        desc: "Required CSS classes to be applied to the marker element"
      },
      getStyle: {
        type: "Function",
        desc: "Get CSS style Object to apply to a marker element at respective model value; For perf reasons, use only if requested model value is not already part of markerMap",
        params: {
          value: {
            type: "Number",
            desc: "The marker label equivalent model value",
            required: true
          }
        },
        returns: {
          type: "Object",
          desc: "CSS style Object to apply to a marker element at respective model value"
        }
      }
    }
  },
  "marker-label-group": {
    desc: "What should the menu display after filtering options and none are left to be displayed; Suggestion: <div>",
    addedIn: "v2.4",
    scope: {
      markerList: {
        type: "Array",
        tsType: "SliderMarkerLabelArrayConfig",
        desc: "Array of marker label configs",
        definition: {
          index: {
            type: "Number",
            desc: "Index of the marker label (0-based)"
          },
          value: {
            type: "Number",
            desc: "Equivalent model value for the marker label"
          },
          label: {
            type: [
              "Number",
              "String"
            ],
            desc: "Configured label for the marker"
          },
          classes: {
            type: "String",
            desc: "Required CSS classes to be applied to the marker element"
          },
          style: {
            type: "Object",
            tsType: "VueStyleObjectProp",
            desc: "Style definitions to be attributed to the marker label",
            examples: [
              "{ height: '24px' }"
            ]
          }
        }
      },
      markerMap: {
        type: "Object",
        tsType: "SliderMarkerLabelObjectConfig",
        desc: "Object with key-value where key is the model and the value is the marker label config",
        definition: {
          "...key": {
            type: "Object",
            desc: "Marker label config",
            definition: {
              index: {
                type: "Number",
                desc: "Index of the marker label (0-based)"
              },
              value: {
                type: "Number",
                desc: "Equivalent model value for the marker label"
              },
              label: {
                type: [
                  "Number",
                  "String"
                ],
                desc: "Configured label for the marker"
              },
              classes: {
                type: "String",
                desc: "Required CSS classes to be applied to the marker element"
              },
              style: {
                type: "Object",
                tsType: "VueStyleObjectProp",
                desc: "Style definitions to be attributed to the marker label",
                examples: [
                  "{ height: '24px' }"
                ]
              }
            }
          }
        }
      },
      classes: {
        type: "String",
        desc: "Required CSS classes to be applied to the marker element"
      },
      getStyle: {
        type: "Function",
        desc: "Get CSS style Object to apply to a marker element at respective model value; For perf reasons, use only if requested model value is not already part of markerMap",
        params: {
          value: {
            type: "Number",
            desc: "The marker label equivalent model value",
            required: true
          }
        },
        returns: {
          type: "Object",
          desc: "CSS style Object to apply to a marker element at respective model value"
        }
      }
    }
  }
};
var events = {
  change: {
    desc: "Emitted on lazy model value change (after user slides then releases the thumb)",
    params: {
      value: {
        type: "Any",
        desc: "New model value",
        required: true
      }
    }
  },
  pan: {
    desc: "Triggered when user starts panning on the component",
    params: {
      phase: {
        type: "String",
        desc: "Phase of panning",
        values: [
          "start",
          "end"
        ]
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
var QRange_default = {
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
