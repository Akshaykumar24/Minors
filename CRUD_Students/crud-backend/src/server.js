const express = require("express");
const cors = require("cors");
const connect = require("./config/db");
const studentController = require("./controller/Student.controller");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/students", studentController);

const start = () => {
  app.listen(2424, async () => {
    await connect();
    console.log("Listening on port 2424");
  });
};

module.exports = start;
