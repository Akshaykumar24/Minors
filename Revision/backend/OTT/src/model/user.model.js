const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: "true" },
    email: { type: String, required: "true" },
    password: { type: String, required: "true" },
    planExpiry: { type: Number, required: "false", default: 0 },
    premium: { type: Boolean, required: "false", default: false },
  },
  { versionKey: false, timestamps: true }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
