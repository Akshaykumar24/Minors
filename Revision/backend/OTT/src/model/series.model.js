const mongoose = require("mongoose");

const seriesSchema = mongoose.Schema(
  {
    name: { type: String, required: "true" },
    cast: [{ type: String, required: "false" }],
    director: { type: String, required: "true" },
    release: { type: String, required: "false" },
    genre: [{ type: String, required: "false" }],
    seasons: { type: String, required: "false" },
    episodes: [{ type: String, required: "false" }],
    premium: { type: Boolean, required: "false", default: false },
  },
  { versionKey: false, timestamps: true }
);

const Series = mongoose.model("series", seriesSchema);

module.exports = Series;
