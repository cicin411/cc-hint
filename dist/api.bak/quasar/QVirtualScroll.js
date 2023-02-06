// src/api/quasar/QVirtualScroll.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/virtual-scroll"
};
var props = {
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
  type: {
    type: "String",
    desc: "The type of content: list (default) or table",
    default: "list",
    values: [
      "list",
      "table"
    ],
    category: "content",
    required: false
  },
  items: {
    type: "Array",
    desc: "Available list items that will be passed to the scoped slot; For best performance freeze the list of items; Required if 'itemsFn' is not supplied",
    default: "[]",
    examples: [
      `:items="[ 'BMW', 'Samsung Phone' ]"`,
      `:items="[ { label: 'BMW', value: 'car' }, { label: 'Samsung Phone', value: 'phone' } ]"`
    ],
    category: "content",
    required: false
  },
  "items-size": {
    type: "Number",
    desc: "Number of available items in the list; Required and used only if 'itemsFn' is provided",
    default: "void 0",
    examples: [
      ':items-size="100000"',
      ':items-size="500"'
    ],
    category: "content",
    required: false
  },
  "items-fn": {
    type: "Function",
    desc: "Function to return the scope for the items to be displayed; Should return an array for items starting from 'from' index for size length; For best performance, reference it from your scope and do not define it inline",
    params: {
      from: {
        type: "Number",
        desc: "Index of the first item (0 based)"
      },
      size: {
        type: "Number",
        desc: "Number of items to return"
      }
    },
    returns: {
      type: "Array",
      desc: "List of scope for items to be displayed"
    },
    examples: [
      `:items-fn="(from, size) => { const items = []; for (let i = 0; i < size; i++) { items.push('Item ' + i) }; return items }"`
    ],
    category: "content"
  },
  "scroll-target": {
    type: [
      "Element",
      "String"
    ],
    desc: "CSS selector or DOM element to be used as a custom scroll container instead of the auto detected one",
    examples: [
      ':scroll-target="$refs.scrollTarget"',
      'scroll-target=".scroll-target-class"',
      'scroll-target="#scroll-target-id"',
      'scroll-target="body"'
    ],
    category: "behavior"
  }
};
var slots = {
  before: {
    desc: "Template slot for the elements that should be rendered before the list; Suggestion: thead before a table"
  },
  after: {
    desc: "Template slot for the elements that should be rendered after the list; Suggestion: tfoot after a table"
  },
  default: {
    desc: "Template slot for defining the list item; Suggestion: QItem",
    scope: {
      index: {
        type: "Number",
        desc: "Item index in the options list"
      },
      item: {
        type: "Any",
        desc: "Item data -- its value is taken from 'options' prop"
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
            desc: "Vue reference to the QVirtualScroll",
            tsType: "QVirtualScroll"
          }
        }
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
  }
};
var QVirtualScroll_default = {
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
