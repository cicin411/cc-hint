// src/api/antdv/a-comment/a-comment.json
var actions = {
  description: "List of action items rendered below the comment content",
  optionType: "Array|slot"
};
var author = {
  description: "The element to display as the comment author",
  optionType: "String|slot"
};
var avatar = {
  description: "The element to display as the comment avatar - generally an antd Avatar or src",
  optionType: "String|slot"
};
var content = {
  description: "The main content of the comment",
  optionType: "String|slot"
};
var datetime = {
  description: "A datetime element containing the time to be displayed",
  optionType: "String|slot"
};
var a_comment_default = {
  actions,
  author,
  avatar,
  content,
  datetime
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  actions,
  author,
  avatar,
  content,
  datetime
});
