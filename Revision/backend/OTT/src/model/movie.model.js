const mongoose = require("mongoose");

const movieSchema = mongoose.Schema(
  {
    name: { type: String, required: "true" },
    cast: [{ type: String, required: "false" }],
    director: { type: String, required: "true" },
    release: { type: String, required: "false" },
    genre: [{ type: String, required: "false" }],
    premium: { type: Boolean, required: "false", default: false },
  },
  { versionKey: false, timestamps: true }
);

const Movie = mongoose.model("movie", movieSchema);

module.exports = Movie;
