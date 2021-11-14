class Array1 {
  constructor(arr) {
    this.arr = arr;
  }
  map2(callback) {
    let data = [];
    for (let i = 0; i < this.arr.length; i++) {
      data.push(callback(this.arr[i], i));
    }
    return data;
  }
  filter2(callback) {
    let data = [];
    for (let i = 0; i < this.arr.length; i++) {
      if (callback(this.arr[i], i)) {
        data.push(this.arr[i]);
      }
    }
    return data;
  }
  reduce2(callback) {
    let data = this.arr;
    let reducedVal = data[0];
  }
}

let arr = new Array1([1, 2, 3, 4]);
const mappedData = arr.map2((item) => item + 10);
const filteredData = arr.filter2((item) => item > 2);
console.log(mappedData);
console.log(filteredData);
