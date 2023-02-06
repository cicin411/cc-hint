// src/api/antdv/a-timeline/a-timeline.json
var pending = {
  description: "Set the last ghost node's existence or its content",
  optionType: "boolean|string|slot",
  defaultValue: "false"
};
var pendingDot = {
  description: "Set the dot of the last ghost node when pending is true",
  optionType: "string|slot",
  defaultValue: '<Icon type="loading" />'
};
var reverse = {
  description: "reverse nodes or not",
  optionType: "boolean",
  defaultValue: "false"
};
var mode = {
  options: ["left", "alternate", "right"],
  description: "By sending alternate the timeline will distribute the nodes to the left and right.",
  optionType: "left | alternate | right",
  defaultValue: "left"
};
var a_timeline_default = {
  pending,
  pendingDot,
  reverse,
  mode
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  mode,
  pending,
  pendingDot,
  reverse
});
