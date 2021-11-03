//const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Movie = require("../model/movie.model");

router.get("/", async (req, res) => {
  const movie = await Movie.find().lean().exec();
  res.status(200).json({ movie });
});

router.post("/", async (req, res) => {
  try {
    const movie = await Movie.create(req.body);
    res.status(200).json({ movie });
  } catch (err) {
    console.log(errconsole.log(err));
  }
});

module.exports = router;
