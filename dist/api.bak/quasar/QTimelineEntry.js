// src/api/quasar/QTimelineEntry.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/timeline"
};
var props = {
  heading: {
    type: "Boolean",
    desc: "Defines a heading timeline item",
    category: "content"
  },
  tag: {
    type: "String",
    desc: "Tag to use, if of type 'heading' only",
    examples: [
      "div",
      "span",
      "h1"
    ],
    category: "content",
    default: "h3",
    required: false
  },
  side: {
    type: "String",
    desc: "Side to place the timeline entry; Works only if QTimeline layout is loose.",
    default: "right",
    values: [
      "left",
      "right"
    ],
    category: "behavior",
    required: false
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
  avatar: {
    type: "String",
    desc: "URL to the avatar image; Icon takes precedence if used, so it replaces avatar",
    transformAssetUrls: true,
    examples: [
      '(public folder) src="img/my-bg.png"',
      '(assets folder) src="~assets/my-img.png"',
      `(relative path format) :src="require('./my_img.jpg')"`,
      '(URL) src="https://placeimg.com/500/300/nature"'
    ],
    category: "content"
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
  title: {
    type: "String",
    desc: "Title of timeline entry; Is overridden if using 'title' slot",
    examples: [
      "December party"
    ],
    category: "content"
  },
  subtitle: {
    type: "String",
    desc: "Subtitle of timeline entry; Is overridden if using 'subtitle' slot",
    examples: [
      "All invited"
    ],
    category: "content"
  },
  body: {
    type: "String",
    desc: "Body content of timeline entry; Use this prop or the default slot",
    examples: [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    ],
    category: "content"
  }
};
var slots = {
  default: {
    desc: "Timeline entry content (body)"
  },
  title: {
    desc: "Optional slot for title; When used, it overrides 'title' prop"
  },
  subtitle: {
    desc: "Optional slot for subtitle; When used, it overrides 'subtitle' prop"
  }
};
var QTimelineEntry_default = {
  type,
  meta,
  props,
  slots
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  meta,
  props,
  slots,
  type
});
