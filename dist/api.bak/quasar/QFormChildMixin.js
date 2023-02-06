// src/api/quasar/QFormChildMixin.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/form"
};
var methods = {
  validate: {
    desc: "Needs to be overwritten when getting extended/mixed in",
    returns: {
      type: [
        "Boolean",
        "Promise<boolean>"
      ],
      desc: "Promise is always fulfilled and receives the outcome (true -> validation was a success, false -> invalid models detected)",
      examples: [
        "validate().then(outcome => { ... })"
      ]
    }
  },
  resetValidation: {
    desc: "Needs to be overwritten when getting extended/mixed in"
  }
};
var QFormChildMixin_default = {
  type,
  meta,
  methods
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  meta,
  methods,
  type
});
