// src/api/quasar/QParallax.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/parallax"
};
var props = {
  src: {
    type: "String",
    desc: "Path to image (unless a 'media' slot is used)",
    transformAssetUrls: true,
    examples: [
      '(public folder) src="img/something.png"',
      '(assets folder) src="~assets/my-img.png"',
      `(relative path format) :src="require('./my_img.jpg')"`,
      '(URL) src="https://some-site.net/some-img.jpg"'
    ],
    category: "model"
  },
  height: {
    type: "Number",
    desc: "Height of component (in pixels)",
    default: 500,
    category: "style",
    required: false
  },
  speed: {
    type: "Number",
    desc: "Speed of parallax effect (0.0 < x < 1.0)",
    category: "behavior"
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
  default: {
    desc: "Default slot can be used for content that gets displayed on top of the component"
  },
  media: {
    desc: "Slot for describing <img> or <video> tags"
  },
  content: {
    desc: "Scoped slot for describing content that gets displayed on top of the component; If specified, it overrides the default slot",
    scope: {
      percentScrolled: {
        type: "Number",
        desc: "Percentage (0.0 < x < 1.0) of scroll in regards to QParallax"
      }
    }
  }
};
var events = {
  scroll: {
    desc: "Emitted when scrolling occurs",
    params: {
      percentage: {
        type: "Number",
        desc: "Number between 0.0 and 1.0 defining the scrolled percentage of the component"
      }
    }
  }
};
var QParallax_default = {
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
