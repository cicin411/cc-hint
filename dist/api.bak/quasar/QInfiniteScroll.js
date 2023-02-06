// src/api/quasar/QInfiniteScroll.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/infinite-scroll"
};
var props = {
  offset: {
    type: "Number",
    desc: "Offset (pixels) to bottom of Infinite Scroll container from which the component should start loading more content in advance",
    default: 500,
    category: "behavior",
    required: false
  },
  debounce: {
    type: [
      "String",
      "Number"
    ],
    desc: "Debounce amount (in milliseconds)",
    default: 100,
    category: "behavior",
    required: false
  },
  "initial-index": {
    type: "Number",
    desc: "Initialize the pagination index (used for the @load event)",
    default: 0,
    category: "behavior",
    required: false
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
  },
  disable: {
    type: "Boolean",
    desc: "Put component in disabled mode",
    category: "state"
  },
  reverse: {
    type: "Boolean",
    desc: "Scroll area should behave like a messenger - starting scrolled to bottom and loading when reaching the top",
    category: "behavior"
  }
};
var slots = {
  default: {
    desc: "Default slot in the devland unslotted content of the component"
  },
  loading: {
    desc: "Slot displaying something while loading content; Example: QSpinner"
  }
};
var events = {
  load: {
    desc: "Emitted when Infinite Scroll needs to load more data",
    params: {
      index: {
        type: "Number",
        desc: "The index parameter can be used to make some sort of pagination on the content you load. It takes numeric values starting with 1 and incrementing with each call"
      },
      done: {
        type: "Function",
        desc: "Function to call when you made all necessary updates. DO NOT forget to call it otherwise your loading message will continue to be displayed",
        params: {
          stop: {
            type: "Boolean",
            desc: "Stops QInfiniteScroll if it's Boolean 'true'; Specify it in case there's nothing more to load"
          }
        },
        returns: null
      }
    }
  }
};
var methods = {
  poll: {
    desc: "Checks scroll position and loads more content if necessary"
  },
  trigger: {
    desc: "Tells Infinite Scroll to load more content, regardless of the scroll position"
  },
  reset: {
    desc: "Resets calling index to 0"
  },
  stop: {
    desc: "Stops working, regardless of scroll position"
  },
  resume: {
    desc: "Starts working. Checks scroll position upon call and if trigger is hit, it loads more content"
  },
  setIndex: {
    desc: "Overwrite the current pagination index",
    params: {
      newIndex: {
        type: "Number",
        desc: "New pagination index",
        required: true
      }
    }
  },
  updateScrollTarget: {
    desc: "Updates the scroll target; Useful when the parent elements change so that the scrolling target also changes"
  }
};
var QInfiniteScroll_default = {
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
