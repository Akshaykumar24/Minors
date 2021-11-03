const express = require("express");
const connected = require("./utils/db");

const PORT = 2424;
const app = express();
app.use(express.json());

const movieRoute = require("./controller/movie.controller");
app.use("/movies", movieRoute);

const seriesRoute = require("./controller/series.controller");
app.use("/series", seriesRoute);

const musicRoute = require("./controller/music.controller");
app.use("/music", musicRoute);

const { register } = require("./controller/auth.controller");
app.post("/register", register);

const start = () => {
  app.listen(PORT, async () => {
    await connected();
    console.log("listening on port ", PORT);
  });
};

module.exports = start;
