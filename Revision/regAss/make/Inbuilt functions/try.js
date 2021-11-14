(function xyx() {
  try {
    throw new Error("Please Provide Variable x");
  } catch (err) {
    var x = 1,
      y = 2;
    console.log(err);
  }
  console.log(x);
  console.log(y);
})();
