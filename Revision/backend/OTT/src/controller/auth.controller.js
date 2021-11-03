const express = require("express");
const router = express.Router();
const User = require("../model/user.model");

const register = async (req, res) => {
  const { email, password } = req.body;
  console.log(email);
  const user = await User.findOne({ email: email });
  if (user) {
    return res
      .status(400)
      .json({ Status: "failed", res: "User already Exists with this mail" });
  }
  const newUser = await User.create(req.body);
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) {
    return res
      .status(400)
      .json({ Status: "failed", res: "User Doesn't Exists with this mail" });
  }
};

module.exports = { register };
