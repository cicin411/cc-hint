// src/api/quasar/QTree.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/tree"
};
var props = {
  nodes: {
    type: "Array",
    tsType: "QTreeNode",
    desc: "The array of nodes that designates the tree structure",
    required: true,
    examples: [
      "[ {...}, {...} ]"
    ],
    category: "content"
  },
  "node-key": {
    type: "String",
    desc: "The property name of each node object that holds a unique node id",
    required: true,
    examples: [
      "key",
      "id"
    ],
    category: "content"
  },
  "label-key": {
    type: "String",
    desc: "The property name of each node object that holds the label of the node",
    default: "label",
    examples: [
      "name",
      "description"
    ],
    category: "content",
    required: false
  },
  "children-key": {
    type: "String",
    desc: "The property name of each node object that holds the list of children of the node",
    default: "children",
    examples: [
      "roles",
      "relatives"
    ],
    category: "content",
    required: false
  },
  "no-connectors": {
    type: "Boolean",
    desc: "Do not display the connector lines between nodes",
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
  "control-color": {
    type: "String",
    desc: "Color name for controls (like checkboxes) from the Quasar Color Palette",
    examples: [
      "primary",
      "teal-10"
    ],
    category: "style"
  },
  "text-color": {
    type: "String",
    desc: "Overrides text color (if needed); Color name from the Quasar Color Palette",
    examples: [
      "primary",
      "teal-10"
    ],
    category: "style"
  },
  "selected-color": {
    type: "String",
    desc: "Color name for selected nodes (from the Quasar Color Palette)",
    examples: [
      "primary",
      "teal-10"
    ],
    category: "style"
  },
  dense: {
    type: "Boolean",
    desc: "Dense mode; occupies less space",
    category: "style",
    addedIn: "v2.2.4"
  },
  dark: {
    type: "Boolean",
    desc: "Notify the component that the background is a dark color",
    category: "style"
  },
  icon: {
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
  "tick-strategy": {
    type: "String",
    desc: "The type of strategy to use for the selection of the nodes",
    default: "none",
    values: [
      "none",
      "strict",
      "leaf",
      "leaf-filtered"
    ],
    category: "behavior",
    required: false
  },
  ticked: {
    type: "Array",
    desc: "Keys of nodes that are ticked",
    sync: true,
    examples: [
      'v-model:ticked="tickedKeys"'
    ],
    category: "state",
    syncable: true
  },
  expanded: {
    type: "Array",
    desc: "Keys of nodes that are expanded",
    sync: true,
    examples: [
      'v-model:expanded="expandedKeys"'
    ],
    category: "state",
    syncable: true
  },
  selected: {
    type: "Any",
    desc: "Key of node currently selected",
    sync: true,
    examples: [
      'v-model:selected="selectedKey"'
    ],
    category: "state",
    syncable: true
  },
  "no-selection-unset": {
    type: "Boolean",
    desc: "Do not allow un-selection when clicking currently selected node",
    category: "behavior",
    addedIn: "v2.4.10"
  },
  "default-expand-all": {
    type: "Boolean",
    desc: "Allow the tree to have all its branches expanded, when first rendered",
    category: "behavior"
  },
  accordion: {
    type: "Boolean",
    desc: "Allows the tree to be set in accordion mode",
    category: "behavior"
  },
  "no-transition": {
    type: "Boolean",
    desc: "Turn off transition effects when expanding/collapsing nodes; Also enhances perf by a lot as a side-effect; Recommended for big trees",
    category: "behavior",
    addedIn: "v2.9.2"
  },
  filter: {
    type: "String",
    desc: "The text value to be used for filtering nodes",
    examples: [
      ':filter="searchText"'
    ],
    category: "filter"
  },
  "filter-method": {
    type: "Function",
    desc: "The function to use to filter the tree nodes; For best performance, reference it from your scope and do not define it inline",
    default: "(see source code)",
    params: {
      node: {
        type: "Object",
        desc: "Node currently being filtered"
      },
      filter: {
        type: "String",
        desc: "Filter text to match against"
      }
    },
    returns: {
      type: "Boolean",
      desc: "Matches or not"
    },
    category: "filter",
    required: false
  },
  duration: {
    type: "Number",
    desc: "Toggle animation duration (in milliseconds)",
    default: 300,
    category: "style",
    required: false
  },
  "no-nodes-label": {
    type: "String",
    desc: "Override default such label for when no nodes are available",
    examples: [
      "No nodes to show!"
    ],
    category: "content"
  },
  "no-results-label": {
    type: "String",
    desc: "Override default such label for when no nodes are available due to filtering",
    examples: [
      "No results"
    ],
    category: "content"
  }
};
var slots = {
  "default-header": {
    desc: "Slot to use for defining the header of a node",
    scope: {
      expanded: {
        type: "Boolean",
        desc: "Is node expanded? Can directly be assigned new Boolean value which changes expanded state",
        reactive: true
      },
      ticked: {
        type: "Boolean",
        desc: "Is node ticked? Can directly be assigned new Boolean value which changes ticked state",
        reactive: true
      },
      tree: {
        type: "Component",
        tsType: "QTree",
        desc: "QTree instance"
      },
      node: {
        type: "Object",
        desc: "Node object"
      },
      key: {
        type: "Any",
        desc: "Node's key"
      },
      color: {
        type: "String",
        desc: "QTree instance 'color' supplied prop value",
        examples: [
          "primary"
        ]
      },
      dark: {
        type: "Boolean",
        desc: "QTree instance 'dark' supplied prop value"
      }
    }
  },
  "header-[name]": {
    desc: "Header template slot for describing node header; Used by nodes which have their 'header' prop set to '[name]', where '[name]' can be any string",
    scope: {
      expanded: {
        type: "Boolean",
        desc: "Is node expanded? Can directly be assigned new Boolean value which changes expanded state",
        reactive: true
      },
      ticked: {
        type: "Boolean",
        desc: "Is node ticked? Can directly be assigned new Boolean value which changes ticked state",
        reactive: true
      },
      tree: {
        type: "Component",
        tsType: "QTree",
        desc: "QTree instance"
      },
      node: {
        type: "Object",
        desc: "Node object"
      },
      key: {
        type: "Any",
        desc: "Node's key"
      },
      color: {
        type: "String",
        desc: "QTree instance 'color' supplied prop value",
        examples: [
          "primary"
        ]
      },
      dark: {
        type: "Boolean",
        desc: "QTree instance 'dark' supplied prop value"
      }
    }
  },
  "default-body": {
    desc: "Slot to use for defining the body of a node",
    scope: {
      expanded: {
        type: "Boolean",
        desc: "Is node expanded? Can directly be assigned new Boolean value which changes expanded state",
        reactive: true
      },
      ticked: {
        type: "Boolean",
        desc: "Is node ticked? Can directly be assigned new Boolean value which changes ticked state",
        reactive: true
      },
      tree: {
        type: "Component",
        tsType: "QTree",
        desc: "QTree instance"
      },
      node: {
        type: "Object",
        desc: "Node object"
      },
      key: {
        type: "Any",
        desc: "Node's key"
      },
      color: {
        type: "String",
        desc: "QTree instance 'color' supplied prop value",
        examples: [
          "primary"
        ]
      },
      dark: {
        type: "Boolean",
        desc: "QTree instance 'dark' supplied prop value"
      }
    }
  },
  "body-[name]": {
    desc: "Body template slot for describing node body; Used by nodes which have their 'body' prop set to '[name]', where '[name]' can be any string",
    scope: {
      expanded: {
        type: "Boolean",
        desc: "Is node expanded? Can directly be assigned new Boolean value which changes expanded state",
        reactive: true
      },
      ticked: {
        type: "Boolean",
        desc: "Is node ticked? Can directly be assigned new Boolean value which changes ticked state",
        reactive: true
      },
      tree: {
        type: "Component",
        tsType: "QTree",
        desc: "QTree instance"
      },
      node: {
        type: "Object",
        desc: "Node object"
      },
      key: {
        type: "Any",
        desc: "Node's key"
      },
      color: {
        type: "String",
        desc: "QTree instance 'color' supplied prop value",
        examples: [
          "primary"
        ]
      },
      dark: {
        type: "Boolean",
        desc: "QTree instance 'dark' supplied prop value"
      }
    }
  }
};
var events = {
  "update:expanded": {
    desc: "Triggered when nodes are expanded or collapsed; Used by Vue on 'v-model:update' to update its value",
    params: {
      expanded: {
        type: "Array",
        desc: "The expanded node keys",
        examples: [
          "[ 'Node 1', 'Node 2' ]"
        ]
      }
    }
  },
  "lazy-load": {
    desc: "Emitted when the lazy loading of nodes is finished",
    params: {
      details: {
        type: "Object",
        desc: "Lazy loading details",
        definition: {
          node: {
            type: "Object",
            required: true,
            desc: "The node to which the new nodes (the children) will be appended"
          },
          key: {
            type: "String",
            required: true,
            desc: "The key of the node getting the newly loaded child nodes",
            examples: [
              "New Node"
            ]
          },
          done: {
            type: "Function",
            required: true,
            desc: "The callback to be carried out when the loading is successful",
            params: {
              children: {
                type: "Array",
                desc: "Array of nodes",
                default: "[]",
                required: false
              }
            },
            returns: null
          },
          fail: {
            type: "Function",
            required: true,
            desc: "The callback to be carried out should the loading fails",
            params: null,
            returns: null
          }
        }
      }
    }
  },
  "update:ticked": {
    desc: "Emitted when nodes are ticked/unticked via the checkbox; Used by Vue on 'v-model:ticked' to update its value",
    params: {
      target: {
        type: "Array",
        desc: "The ticked node keys",
        examples: [
          "[ 'Node 1', 'Node 2' ]"
        ]
      }
    }
  },
  "update:selected": {
    desc: "Emitted when selected node changes; Used by Vue on 'v-model:selected' to update its value",
    params: {
      target: {
        type: "Any",
        desc: "The selected node key",
        examples: [
          "Node 1"
        ]
      }
    }
  },
  "after-show": {
    desc: "Emitted when component show animation is finished"
  },
  "after-hide": {
    desc: "Emitted when component hide animation is finished"
  }
};
var methods = {
  getNodeByKey: {
    desc: "Get the node with the given key",
    params: {
      key: {
        type: "Any",
        required: true,
        desc: "The key of a node",
        examples: [
          "Node 1"
        ]
      }
    },
    returns: {
      type: "Object",
      desc: "Requested node"
    }
  },
  getTickedNodes: {
    desc: "Get array of nodes that are ticked",
    returns: {
      type: "Array",
      desc: "Ticked node objects"
    }
  },
  getExpandedNodes: {
    desc: "Get array of nodes that are expanded",
    returns: {
      type: "Array",
      desc: "Expanded node objects"
    }
  },
  isExpanded: {
    desc: "Determine if a node is expanded",
    params: {
      key: {
        type: "Any",
        required: true,
        desc: "The key of a node",
        examples: [
          "Node 1"
        ]
      }
    },
    returns: {
      type: "Boolean",
      desc: "Is specified node expanded?"
    }
  },
  expandAll: {
    desc: "Use to expand all branches of the tree"
  },
  collapseAll: {
    desc: "Use to collapse all branches of the tree"
  },
  setExpanded: {
    desc: "Expands the tree at the point of the node with the key given",
    params: {
      key: {
        type: "Any",
        required: true,
        desc: "The key of a node",
        examples: [
          "Node 1"
        ]
      },
      state: {
        type: "Boolean",
        required: true,
        desc: "Set to 'true' to expand the branch of the tree, otherwise 'false' collapses it"
      }
    }
  },
  isTicked: {
    desc: "Method to check if a node's checkbox is selected or not",
    params: {
      key: {
        type: "Any",
        required: true,
        desc: "The key of a node",
        examples: [
          "Node 1"
        ]
      }
    },
    returns: {
      type: "Boolean",
      desc: "Is specified node ticked?"
    }
  },
  setTicked: {
    desc: "Method to set a node's checkbox programmatically",
    params: {
      keys: {
        type: "Array",
        required: true,
        desc: "The keys of nodes to tick/untick",
        examples: [
          "[ 'Node 1', 'Node 2' ]"
        ]
      },
      state: {
        type: "Boolean",
        required: true,
        desc: "Set to 'true' to tick the checkbox of nodes, otherwise 'false' unticks them"
      }
    }
  }
};
var QTree_default = {
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
