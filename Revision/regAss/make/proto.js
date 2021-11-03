function iPhone(n) {
  this.name = n;
} // constructor

// a method for recognizing faces
iPhone.prototype.faceID = () => {
  console.log("Unlock using face");
};

// a method for taking 4k video
iPhone.prototype.video = () => {
  console.log("4K vids available");
};

function one(n) {
  this.name = "one+" + n;
}

let newPhone = new iPhone("iPhone-11"); // an iPhone 11

let phone12 = new iPhone("iPhone-12");

let one7 = new one(7);
one7.prototype = iPhone;

phone12.__proto__.siri = () => {
  console.log("Hey siri");
};

console.log(newPhone, one7);
