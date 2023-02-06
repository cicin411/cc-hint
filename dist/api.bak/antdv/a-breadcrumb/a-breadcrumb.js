// src/api/antdv/a-breadcrumb/a-breadcrumb.json
var itemRender = {
  description: 'Custom item renderer, slot="itemRender" and slot-scope="{route, params, routes, paths}"',
  optionType: "({route, params, routes, paths}) => vNode",
  defaultValue: ""
};
var params = {
  description: "Routing parameters",
  optionType: "object",
  defaultValue: ""
};
var routes = {
  description: "The routing stack information of router",
  optionType: "object[]",
  defaultValue: ""
};
var separator = {
  description: "Custom separator",
  optionType: "string|slot",
  defaultValue: ""
};
var a_breadcrumb_default = {
  itemRender,
  params,
  routes,
  separator
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  itemRender,
  params,
  routes,
  separator
});
