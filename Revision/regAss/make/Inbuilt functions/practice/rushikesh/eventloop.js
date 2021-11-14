let addButton = document.getElementById("add");
let h1Element = document.getElementsByTagName("h1")[0];
addButton.addEventListener("click", () => {
  console.log(h1Element);
  //   h1Element.style.display = "none";
  //   h1Element.style.display = "block";
  //   h1Element.style.background = "green";
  //   h1Element.style.background = "red";
  animate();
});

function animate() {
  h1Element.style.transition = "2s";
  requestAnimationFrame(() => {
    // requestAnimationFrame(() => {
    h1Element.style.transform = "translateX(200px)";
    // });
  });
  requestAnimationFrame(() => {
    h1Element.style.transform = "translateX(200px)";
  });
}
function animateWithSet() {
  setTimeout(() => {
    h1Element.style.transform = "translateX(20px)";
    animateWithSet();
  }, 100);
}
// animateWithSet();
function loop() {
  setTimeout(() => {
    console.log("timeout running");
    loop();
  });
}
async function promiseLoop() {
  await Promise.resolve();
  promiseLoop();
}
