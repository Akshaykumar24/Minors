const express = require("express");
const router = express.Router();
const Music = require("../model/music.model");

router.get("/", async (req, res) => {
  const music = await Music.find().lean().exec();
  res.status(200).json({ music });
});

router.post("/", async (req, res) => {
  try {
    const music = await Music.create(req.body);
    res.status(200).json({ music });
  } catch (err) {
    console.log(errconsole.log(err));
  }
});

module.exports = router;
