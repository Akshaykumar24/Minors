const mongoose = require("mongoose");

const connect = () =>
  mongoose.connect(
    "mongodb+srv://akshaykumar:akshay123+@haus.mmor8.mongodb.net/Students"
  );

module.exports = connect;
