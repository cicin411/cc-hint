// src/api/quasar/QLayout.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/layout/layout"
};
var props = {
  view: {
    type: "String",
    desc: "Defines how your layout components (header/footer/drawer) should be placed on screen; See docs examples",
    default: "hhh lpr fff",
    examples: [
      "hHh lpR fFf"
    ],
    category: "content",
    required: false
  },
  container: {
    type: "Boolean",
    desc: "Containerize the layout which means it changes the default behavior of expanding to the whole window; Useful (but not limited to) for when using on a QDialog",
    category: "content"
  }
};
var slots = {
  default: {
    desc: "Suggestion: QHeader, QFooter, QDrawer, QPageContainer"
  }
};
var events = {
  resize: {
    desc: "Emitted when layout size (height, width) changes",
    params: {
      size: {
        type: "Object",
        desc: "New size",
        definition: {
          height: {
            type: "Number",
            required: true,
            desc: "Layout height"
          },
          width: {
            type: "Number",
            required: true,
            desc: "Layout height"
          }
        }
      }
    }
  },
  scroll: {
    desc: "Emitted when user scrolls within layout",
    params: {
      details: {
        type: "Object",
        desc: "Scroll details",
        definition: {
          position: {
            type: "Number",
            required: true,
            desc: "Scroll offset from top (vertical)"
          },
          direction: {
            type: "String",
            required: true,
            desc: "Direction of scroll",
            values: [
              "up",
              "down"
            ]
          },
          directionChanged: {
            type: "Boolean",
            required: true,
            desc: "Has scroll direction changed since event was last emitted?"
          },
          delta: {
            type: "Number",
            required: true,
            desc: "Vertical delta distance since event was last emitted"
          },
          inflectionPoint: {
            type: "Number",
            required: true,
            desc: "Scroll offset from top (vertical)"
          }
        }
      }
    }
  },
  "scroll-height": {
    desc: "Emitted when the scroll size of layout changes",
    params: {
      height: {
        type: "Number",
        desc: "New scroll height of layout"
      }
    }
  }
};
var QLayout_default = {
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
