// src/api/antdv/a-card/a-card.json
var actions = {
  description: "The action list, shows at the bottom of the Card.",
  optionType: "slots",
  defaultValue: "-"
};
var activeTabKey = {
  description: "Current TabPane's key",
  optionType: "string",
  defaultValue: "-"
};
var headStyle = {
  description: "Inline style to apply to the card head",
  optionType: "object",
  defaultValue: "-"
};
var bodyStyle = {
  description: "Inline style to apply to the card content",
  optionType: "object",
  defaultValue: "-"
};
var bordered = {
  description: "Toggles rendering of the border around the card",
  optionType: "boolean",
  defaultValue: "true"
};
var cover = {
  description: "Card cover",
  optionType: "slot",
  defaultValue: "-"
};
var defaultActiveTabKey = {
  description: "Initial active TabPane's key, if activeTabKey is not set.",
  optionType: "string",
  defaultValue: "-"
};
var extra = {
  description: "Content to render in the top-right corner of the card",
  optionType: "string|slot",
  defaultValue: "-"
};
var hoverable = {
  description: "Lift up when hovering card",
  optionType: "boolean",
  defaultValue: "false"
};
var loading = {
  description: "Shows a loading indicator while the contents of the card are being fetched",
  optionType: "boolean",
  defaultValue: "false"
};
var tabList = {
  description: "List of TabPane's head, Custom tabs can be created with the scopedSlots property",
  optionType: "Array<{key: string, tab: any, scopedSlots: {tab: 'XXX'}}>",
  defaultValue: "-"
};
var size = {
  options: ["default", "small"],
  description: "Size of card",
  optionType: "string",
  defaultValue: "default"
};
var title = {
  description: "Card title",
  optionType: "string|slot",
  defaultValue: "-"
};
var type = {
  description: "Card style type, can be set to inner or not set",
  optionType: "string",
  defaultValue: "-"
};
var a_card_default = {
  actions,
  activeTabKey,
  headStyle,
  bodyStyle,
  bordered,
  cover,
  defaultActiveTabKey,
  extra,
  hoverable,
  loading,
  tabList,
  size,
  title,
  type
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  actions,
  activeTabKey,
  bodyStyle,
  bordered,
  cover,
  defaultActiveTabKey,
  extra,
  headStyle,
  hoverable,
  loading,
  size,
  tabList,
  title,
  type
});
