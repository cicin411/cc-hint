// src/api/quasar/QChatMessage.json
var type = "component";
var meta = {
  docsUrl: "https://v2.quasar.dev/vue-components/chat"
};
var props = {
  sent: {
    type: "Boolean",
    desc: "Render as a sent message (so from current user)",
    category: "content"
  },
  label: {
    type: "String",
    desc: "Renders a label header/section only",
    examples: [
      "Friday, 18th"
    ],
    category: "content"
  },
  "bg-color": {
    type: "String",
    desc: "Color name (from the Quasar Color Palette) for chat bubble background",
    examples: [
      "primary",
      "teal-10"
    ],
    category: "style"
  },
  "text-color": {
    type: "String",
    desc: "Color name (from the Quasar Color Palette) for chat bubble text",
    examples: [
      "primary",
      "teal-10"
    ],
    category: "style"
  },
  name: {
    type: "String",
    desc: "Author's name",
    examples: [
      "John Doe"
    ],
    category: "content"
  },
  avatar: {
    type: "String",
    desc: "URL to the avatar image of the author",
    transformAssetUrls: true,
    examples: [
      '(public folder) src="boy-avatar.png"',
      '(assets folder) src="~assets/boy-avatar.png"',
      `(relative path format) :src="require('./my_img.jpg')"`,
      '(URL) src="https://placeimg.com/500/300/nature"'
    ],
    category: "content"
  },
  text: {
    type: "Array",
    desc: "Array of strings that are the message body. Strings are not sanitized (see details in docs)",
    examples: [
      `:text="['How are you?']"`,
      `:text="['I\\'m good, thank you!', 'And you?']"`
    ],
    category: "content"
  },
  stamp: {
    type: "String",
    desc: "Creation timestamp",
    examples: [
      "13:55",
      "Yesterday at 13:51"
    ],
    category: "content"
  },
  size: {
    type: "String",
    desc: "1-12 out of 12 (same as col-*)",
    examples: [
      "4",
      "6",
      "12"
    ],
    category: "style"
  },
  "label-html": {
    type: "Boolean",
    desc: "Render the label as HTML; This can lead to XSS attacks so make sure that you sanitize the message first",
    category: "behavior"
  },
  "name-html": {
    type: "Boolean",
    desc: "Render the name as HTML; This can lead to XSS attacks so make sure that you sanitize the message first",
    category: "behavior"
  },
  "text-html": {
    type: "Boolean",
    desc: "Render the text as HTML; This can lead to XSS attacks so make sure that you sanitize the message first",
    category: "behavior"
  },
  "stamp-html": {
    type: "Boolean",
    desc: "Render the stamp as HTML; This can lead to XSS attacks so make sure that you sanitize the message first",
    category: "behavior"
  }
};
var slots = {
  default: {
    desc: "You can use this slot to define a custom message (overrides props)"
  },
  avatar: {
    desc: "Slot for avatar; Suggestion: QAvatar, img"
  },
  name: {
    desc: "Slot for name; Overrides the 'name' prop"
  },
  stamp: {
    desc: "Slot for stamp; Overrides the 'stamp' prop"
  },
  label: {
    desc: "Slot for label; Overrides the 'label' prop"
  }
};
var QChatMessage_default = {
  type,
  meta,
  props,
  slots
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  meta,
  props,
  slots,
  type
});
