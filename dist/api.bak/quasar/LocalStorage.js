// src/api/quasar/LocalStorage.json
var type = "plugin";
var meta = {
  docsUrl: "https://v2.quasar.dev/quasar-plugins/web-storage"
};
var injection = "$q.localStorage";
var methods = {
  has: {
    desc: "Check if storage item exists",
    params: {
      key: {
        type: "String",
        desc: "Entry key",
        required: true,
        examples: [
          "userId"
        ]
      }
    },
    returns: {
      type: "Boolean",
      desc: "Does the item exists or not?"
    }
  },
  getLength: {
    desc: "Get storage number of entries",
    returns: {
      type: "Number",
      desc: "Number of entries"
    }
  },
  getItem: {
    tsType: "WebStorageGetItemMethodType",
    desc: "Get a storage item value",
    params: {
      key: {
        type: "String",
        desc: "Entry key",
        required: true,
        examples: [
          "userId"
        ]
      }
    },
    returns: {
      type: [
        "Date",
        "RegExp",
        "Number",
        "Boolean",
        "Function",
        "Object",
        "Array",
        "String",
        "null"
      ],
      desc: "Storage item value",
      examples: [
        "john12",
        702
      ]
    }
  },
  getIndex: {
    tsType: "WebStorageGetIndexMethodType",
    desc: "Get the storage item value at specific index",
    params: {
      index: {
        type: "Number",
        desc: "Entry index",
        required: true
      }
    },
    returns: {
      type: [
        "Number",
        "null"
      ],
      desc: "Storage item index"
    }
  },
  getKey: {
    tsType: "WebStorageGetKeyMethodType",
    desc: "Get the storage key at specific index",
    params: {
      index: {
        type: "Number",
        desc: "Entry index",
        required: true
      }
    },
    returns: {
      type: [
        "String",
        "null"
      ],
      desc: "Storage key",
      examples: [
        "userId"
      ]
    }
  },
  getAll: {
    desc: "Retrieve all items in storage",
    returns: {
      type: "Object",
      desc: "Object syntax: item name as Object key and its value",
      examples: [
        "{ userId: 'jon12', timesLoggedIn: 14 }"
      ]
    }
  },
  getAllKeys: {
    tsType: "WebStorageGetAllKeysMethodType",
    desc: "Retrieve all keys in storage",
    returns: {
      type: "Array",
      desc: "Storage keys (Array of Strings)",
      examples: [
        "['userId', 'password']"
      ]
    }
  },
  set: {
    desc: "Set item in storage",
    params: {
      key: {
        type: "String",
        desc: "Entry key",
        required: true,
        examples: [
          "userId"
        ]
      },
      value: {
        type: [
          "Date",
          "RegExp",
          "Number",
          "Boolean",
          "Function",
          "Object",
          "Array",
          "String",
          "null"
        ],
        desc: "Entry value",
        required: true,
        params: {
          "...params": {
            type: "Any"
          }
        },
        returns: {
          type: "Any"
        },
        examples: [
          "john12"
        ]
      }
    }
  },
  remove: {
    desc: "Remove a storage item",
    params: {
      key: {
        type: "String",
        desc: "Storage key",
        required: true,
        examples: [
          "userId"
        ]
      }
    }
  },
  clear: {
    desc: "Remove everything from the storage"
  },
  isEmpty: {
    desc: "Determine if storage has any items",
    returns: {
      type: "Boolean",
      desc: "Tells if storage is empty or not"
    }
  }
};
var LocalStorage_default = {
  type,
  meta,
  injection,
  methods
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  injection,
  meta,
  methods,
  type
});
