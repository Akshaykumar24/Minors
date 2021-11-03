var x = 10;
var y = 2;

function call() {
  let x = 1;
  console.log(x);
}
call();

console.log(x, y, this);

var obj = {
  name: "akshay",
  called: function () {
    console.log(this.name, this);
  },
  calledName: this.called,
};

console.log(obj.calledName);
