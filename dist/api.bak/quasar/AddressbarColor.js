// src/api/quasar/AddressbarColor.json
var type = "plugin";
var meta = {
  docsUrl: "https://v2.quasar.dev/quasar-plugins/addressbar-color"
};
var injection = "$q.addressbarColor";
var methods = {
  set: {
    desc: "Sets addressbar color (for browsers that support it)",
    params: {
      hexColor: {
        type: "String",
        desc: "Color in hex format",
        required: true,
        examples: [
          "#ff0000"
        ]
      }
    }
  }
};
var AddressbarColor_default = {
  type,
  meta,
  injection,
  methods
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  injection,
  meta,
  methods,
  type
});
