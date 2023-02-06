// src/api/quasar/AppVisibility.json
var type = "plugin";
var meta = {
  docsUrl: "https://v2.quasar.dev/quasar-plugins/app-visibility"
};
var injection = "$q.appVisible";
var props = {
  appVisible: {
    tsInjectionPoint: true,
    type: "Boolean",
    desc: "Does the app have user focus? Or the app runs in the background / another tab has the user's attention",
    reactive: true
  }
};
var AppVisibility_default = {
  type,
  meta,
  injection,
  props
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  injection,
  meta,
  props,
  type
});
