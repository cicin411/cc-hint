// src/api/antdv/a-collapse/a-collapse.json
var accordion = {
  description: "If true, Collapse renders as Accordion",
  optionType: "boolean",
  defaultValue: "false"
};
var activeKey = {
  description: "Key of the active panel",
  optionType: "string[]|string",
  defaultValue: "No default value. In accordion mode, it's the key of the first panel."
};
var bordered = {
  description: "Toggles rendering of the border around the collapse block",
  optionType: "boolean",
  defaultValue: "true"
};
var defaultActiveKey = {
  description: "Key of the initial active panel",
  optionType: "string",
  defaultValue: "-"
};
var destroyInactivePanel = {
  description: "Destroy Inactive Panel",
  optionType: "boolean",
  defaultValue: "false"
};
var expandIcon = {
  description: "allow to customize collapse icon",
  optionType: 'Function(props):VNode | slot="expandIcon" slot-scope="props"|v-slot:expandIcon="props"',
  defaultValue: "-"
};
var a_collapse_default = {
  accordion,
  activeKey,
  bordered,
  defaultActiveKey,
  destroyInactivePanel,
  expandIcon
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  accordion,
  activeKey,
  bordered,
  defaultActiveKey,
  destroyInactivePanel,
  expandIcon
});
