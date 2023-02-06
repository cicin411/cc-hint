// src/api/quasar/QCarouselSlide.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/carousel"
};
var props = {
  name: {
    type: "Any",
    desc: "Slide name",
    required: true,
    examples: [
      "accounts",
      "firstPanel",
      ':name="1"',
      "accounts",
      "firstSlide",
      ':name="1"'
    ],
    category: "model"
  },
  disable: {
    type: "Boolean",
    desc: "Put component in disabled mode",
    category: "state"
  },
  "img-src": {
    type: "String",
    desc: "URL pointing to a slide background image (use public folder)",
    transformAssetUrls: true,
    examples: [
      '(public folder) src="img/my-bg.png"',
      '(assets folder) src="~assets/my-img.png"',
      `(relative path format) :src="require('./my_img.jpg')"`,
      '(URL) src="https://placeimg.com/500/300/nature"'
    ],
    category: "model"
  }
};
var slots = {
  default: {
    desc: "Default slot in the devland unslotted content of the component"
  }
};
var QCarouselSlide_default = {
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
