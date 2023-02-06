// src/api/antdv/a-carousel/a-carousel.json
var afterChange = {
  description: "Callback function called after the current index changes",
  optionType: "function(current)",
  defaultValue: "-"
};
var autoplay = {
  description: "Whether to scroll automatically",
  optionType: "boolean",
  defaultValue: "false"
};
var beforeChange = {
  description: "Callback function called before the current index changes",
  optionType: "function(from, to)",
  defaultValue: "-"
};
var dots = {
  description: "Whether to show the dots at the bottom of the gallery",
  optionType: "boolean",
  defaultValue: "true"
};
var easing = {
  description: "Transition interpolation function name",
  optionType: "string",
  defaultValue: "linear"
};
var effect = {
  options: ["scrollx", "fade"],
  description: "Transition effect",
  optionType: "scrollx | fade",
  defaultValue: "scrollx"
};
var vertical = {
  description: "Whether to use a vertical display",
  optionType: "boolean",
  defaultValue: "false"
};
var a_carousel_default = {
  afterChange,
  autoplay,
  beforeChange,
  dots,
  easing,
  effect,
  vertical
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  afterChange,
  autoplay,
  beforeChange,
  dots,
  easing,
  effect,
  vertical
});
