const express = require("express");
const router = express.Router();
const Series = require("../model/series.model");

router.get("/", async (req, res) => {
  const series = await Series.find().lean().exec();
  res.status(200).json({ series });
});

router.post("/", async (req, res) => {
  try {
    const series = await Series.create(req.body);
    res.status(200).json({ series });
  } catch (err) {
    console.log(errconsole.log(err));
  }
});

module.exports = router;
