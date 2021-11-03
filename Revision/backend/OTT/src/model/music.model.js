const mongoose = require("mongoose");

const musicSchema = mongoose.Schema(
  {
    name: { type: String, required: "true" },
    singer: [{ type: String, required: "false" }],
    director: { type: String, required: "true" },
    release: { type: String, required: "false" },
    genre: [{ type: String, required: "false" }],
    lyricist: { type: String, required: "false" },
    premium: { type: Boolean, required: "false", default: false },
  },
  { versionKey: false, timestamps: true }
);

const Music = mongoose.model("music", musicSchema);

module.exports = Music;
