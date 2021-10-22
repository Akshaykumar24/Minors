console.log("Connected");

var data = [];
let query = document.getElementById("query").value;

var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");

let page = 1;
async function get(q, page) {
  let g = await fetch(
    `https://api.imgur.com/3/gallery/search/top/all/${page}?q=${q}`,
    {
      method: "GET",
      headers: {
        Authorization: "Client-ID 546c25a59c58ad7",
        //   "Content-Type": "application/json",
        //   Accept: "application/json",
      },
      mode: "cors",
    }
  );
  data = await g.json();
  return data;
}

async function home(page = 1) {
  let g = await fetch(
    `https://api.imgur.com/3/gallery/hot/${page}?showViral=true`,
    {
      method: "GET",
      headers: {
        Authorization: "Client-ID 546c25a59c58ad7",
        //   "Content-Type": "application/json",
        //   Accept: "application/json",
      },
      mode: "cors",
    }
  );
  data = await g.json();
  setData(data.data);
  //return data;
}

const a = setTimeout(() => home(), 1000);

function searchThis() {
  one.innerHTML = "";
  two.innerHTML = "";
  three.innerHTML = "";
  four.innerHTML = "";
  five.innerHTML = "";

  search(query);
}

async function search(q, page = 1) {
  let query = q || document.getElementById("query").value;
  console.log(query, page);
  let got = await get(query, page);
  let main = got.data;
  console.log(main);

  setData(main);
}

let divArray = [one, two, three, four, five];

async function setData(main) {
  console.log(main, "in setting datas");

  let x = 0;
  await main.map((a, i) => {
    if (a.images && a.images[0].type == "video/mp4") {
      console.log("Mp4", i);
    } else {
      //   var one = document.getElementById("one");
      //   var two = document.getElementById("two");
      //   var three = document.getElementById("three");
      //   var four = document.getElementById("four");
      //   var five = document.getElementById("five");
      x++;
      let div = document.createElement("div");
      div.setAttribute("class", "indi");
      let image = document.createElement("img");
      let desc = document.createElement("h4");
      let bot = document.createElement("div");
      image.src = `${a.images ? a.images[0].link : a.link}&mute=1`;
      image.setAttribute("class", "ima");

      // console.log(one, two, three, four, five);

      desc.textContent = a.title;
      desc.setAttribute("class", "desc");
      bot.setAttribute("class", "bottom");
      let vote = document.createElement("div");
      let comment = document.createElement("div");
      let views = document.createElement("div");

      vote.innerHTML = `${a.ups - a.downs}`;
      comment.innerHTML = `${a.comment_count}`;
      views.innerHTML = `${(a.views / 1000).toFixed(1)}k`;
      bot.append(vote, comment, views);
      div.append(image, desc, bot);

      if (x % 5 == 0) {
        one.append(div);
      }
      if (x % 5 == 1) {
        two.append(div);
      }
      if (x % 5 == 2) {
        three.append(div);
      }
      if (x % 5 == 3) {
        four.append(div);
      }
      if (x % 5 == 4) {
        five.append(div);
      }

      //   let min = divArray.reduce((a, c) => {
      //     console.log(a, c);
      //     if (a.clientHeight >= c.clientHeight) {
      //       return c;
      //     } else {
      //       return a;
      //     }
      //   });
      //   console.log(min);
    }
  });
}

// window.addEventListener("scroll", () => {
//   //   console.log(
//   //     window.scrollY + window.innerHeight,
//   //     document.documentElement.scrollHeight
//   //   );
//   let query = document.getElementById("query").value;
//   if (
//     window.scrollY + window.innerHeight >=
//     document.documentElement.scrollHeight
//   ) {
//     console.log(
//       "Call func",
//       window.scrollY + window.innerHeight >=
//         document.documentElement.scrollHeight - 200
//     );
//     page++;
//     search(query, page);
//   }
// });

//debounce sesrch

//https://api.imgur.com/3/tags
async function getTags() {
  let g = await fetch(`https://api.imgur.com/3/tags`, {
    method: "GET",
    headers: {
      Authorization: "Client-ID 546c25a59c58ad7",
    },
    mode: "cors",
  });
  data = await g.json();
  return data;
}

function db(fn, delay) {
  let timer;
  return function () {
    clearInterval(timer);
    setTimeout(() => {
      fn();
    }, delay);
  };
}
