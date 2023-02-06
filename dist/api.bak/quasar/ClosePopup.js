// src/api/quasar/ClosePopup.json
var type = "directive";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-directives/close-popup"
};
var value = {
  type: [
    "Boolean",
    "Number",
    "String"
  ],
  desc: "If value is 0 or 'false' then directive is disabled; if value is < 0 then it closes all popups in the chain; if value is 1 or 'true' or undefined then it closes only the parent popup; if value is > 1 it closes the specified number of parent popups in the chain (note that chained QMenus are considered 1 popup only & QPopupProxy separates chained menus)",
  examples: [
    "v-close-popup",
    'v-close-popup="booleanState"',
    'v-close-popup="-1"',
    'v-close-popup="2"',
    'v-close-popup="0"'
  ]
};
var ClosePopup_default = {
  type,
  meta,
  value
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  meta,
  type,
  value
});
