// src/api/quasar/QImg.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/img"
};
var props = {
  ratio: {
    type: [
      "String",
      "Number"
    ],
    desc: "Force the component to maintain an aspect ratio",
    examples: [
      ':ratio="4/3"',
      ':ratio="16/9"',
      'ratio="1"',
      '(Number format) :ratio="16/9"',
      '(String format) ratio="1"'
    ],
    category: "style"
  },
  src: {
    type: "String",
    desc: "Path to image",
    transformAssetUrls: true,
    examples: [
      '(public folder) src="img/something.png"',
      '(assets folder) src="~assets/my-img.gif"',
      `(relative path format) :src="require('./my_img.jpg')"`,
      '(URL) src="https://placeimg.com/500/300/nature"'
    ],
    category: "model"
  },
  srcset: {
    type: "String",
    desc: "Same syntax as <img> srcset attribute",
    link: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images#Resolution_switching_Different_sizes",
    examples: [
      "elva-fairy-320w.jpg 320w, elva-fairy-480w.jpg 480w"
    ],
    category: "model"
  },
  sizes: {
    type: "String",
    desc: "Same syntax as <img> sizes attribute",
    link: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images#Resolution_switching_Different_sizes",
    examples: [
      "(max-width: 320px) 280px, (max-width: 480px) 440px, 800px"
    ],
    category: "model"
  },
  "placeholder-src": {
    type: "String",
    desc: "While waiting for your image to load, you can use a placeholder image",
    transformAssetUrls: true,
    examples: [
      '(public folder) src="img/some-placeholder.png"',
      '(assets folder) src="~assets/my-placeholder.gif"',
      `(relative path format) :src="require('./placeholder.jpg')"`,
      '(URL) src="https://placeimg.com/500/300/nature"'
    ],
    category: "model"
  },
  "initial-ratio": {
    type: [
      "String",
      "Number"
    ],
    desc: "Use it when not specifying 'ratio' but still wanting an initial aspect ratio",
    default: "16/9",
    examples: [
      '(Number format) :initial-ratio="16/9"',
      '(String format) initial-ratio="1"'
    ],
    category: "style",
    required: false
  },
  width: {
    type: "String",
    desc: "Forces image width; Must also include the unit (px or %)",
    examples: [
      "280px",
      "70%"
    ],
    category: "style"
  },
  height: {
    type: "String",
    desc: "Forces image height; Must also include the unit (px or %)",
    examples: [
      "280px",
      "70%"
    ],
    category: "style"
  },
  loading: {
    type: "String",
    desc: "Lazy or immediate load; Same syntax as <img> loading attribute",
    default: "lazy",
    values: [
      "lazy",
      "eager"
    ],
    category: "behavior",
    required: false
  },
  crossorigin: {
    type: "String",
    desc: "Same syntax as <img> crossorigin attribute",
    values: [
      "anonymous",
      "use-credentials"
    ],
    category: "behavior"
  },
  decoding: {
    type: "String",
    desc: "Same syntax as <img> decoding attribute",
    values: [
      "sync",
      "async",
      "auto"
    ],
    category: "behavior"
  },
  referrerpolicy: {
    type: "String",
    desc: "Same syntax as <img> referrerpolicy attribute",
    values: [
      "no-referrer",
      "no-referrer-when-downgrade",
      "origin",
      "origin-when-cross-origin",
      "same-origin",
      "strict-origin",
      "strict-origin-when-cross-origin",
      "unsafe-url"
    ],
    category: "behavior"
  },
  fetchpriority: {
    type: "String",
    desc: "Provides a hint of the relative priority to use when fetching the image",
    default: "auto",
    values: [
      "high",
      "low",
      "auto"
    ],
    category: "behavior",
    addedIn: "v2.6.6",
    required: false
  },
  fit: {
    type: "String",
    desc: "How the image will fit into the container; Equivalent of the object-fit prop; Can be coordinated with 'position' prop",
    default: "cover",
    values: [
      "cover",
      "fill",
      "contain",
      "none",
      "scale-down"
    ],
    category: "style",
    required: false
  },
  position: {
    type: "String",
    desc: "The alignment of the image into the container; Equivalent of the object-position CSS prop",
    default: "50% 50%",
    examples: [
      "0 0",
      "20px 50px"
    ],
    category: "style",
    required: false
  },
  alt: {
    type: "String",
    desc: "Specifies an alternate text for the image, if the image cannot be displayed",
    examples: [
      "Two cats"
    ],
    category: "content"
  },
  draggable: {
    type: "Boolean",
    desc: "Adds the native 'draggable' attribute",
    category: "behavior"
  },
  "img-class": {
    type: "String",
    desc: "CSS classes to be attributed to the native img element",
    examples: [
      "my-special-class"
    ],
    category: "style"
  },
  "img-style": {
    type: "Object",
    tsType: "VueStyleObjectProp",
    desc: "Apply CSS to the native img element",
    examples: [
      `:img-style="{ transform: 'rotate(45deg)' }" `
    ],
    category: "style"
  },
  "spinner-color": {
    type: "String",
    desc: "Color name for default Spinner (unless using a 'loading' slot)",
    examples: [
      "primary",
      "teal-10"
    ],
    category: "style"
  },
  "spinner-size": {
    type: "String",
    desc: "Size in CSS units, including unit name, for default Spinner (unless using a 'loading' slot)",
    examples: [
      "16px",
      "2rem"
    ],
    category: "style"
  },
  "no-spinner": {
    type: "Boolean",
    desc: "Do not display the default spinner while waiting for the image to be loaded; It is overriden by the 'loading' slot when one is present",
    category: "behavior"
  },
  "no-native-menu": {
    type: "Boolean",
    desc: "Disables the native context menu for the image",
    category: "behavior"
  },
  "no-transition": {
    type: "Boolean",
    desc: "Disable default transition when switching between old and new image",
    category: "behavior"
  }
};
var slots = {
  default: {
    desc: "Default slot can be used for captions. See examples"
  },
  loading: {
    desc: "While image is loading, this slot is being displayed on top of the component; Suggestions: a spinner or text"
  },
  error: {
    desc: "Optional slot to be used when image could not be loaded; make sure you assign a min-height and min-width to the component through CSS"
  }
};
var events = {
  load: {
    desc: "Emitted when image has been loaded by the browser",
    params: {
      src: {
        type: "String",
        desc: "URL of image that has been loaded; useful when using 'srcset' and/or 'sizes'",
        examples: [
          "https://some-site.net/some-img.gif"
        ]
      }
    }
  },
  error: {
    desc: "Emitted when browser could not load the image",
    params: {
      src: {
        type: "Error",
        desc: "JS Error object"
      }
    }
  }
};
var QImg_default = {
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
