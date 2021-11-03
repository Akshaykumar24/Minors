const mongoose = require("mongoose");

const connect = () => {
  try {
    mongoose
      .connect(
        "mongodb+srv://akshaykumar:akshay123+@haus.mmor8.mongodb.net/ott"
      )
      .then(console.log("DB Connected"));
  } catch (err) {
    console.log(err);
  }
};

module.exports = connect;
