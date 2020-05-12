// Container and displays
const container = document.querySelector("body");
let posXDisplay = document.getElementById("posX");
let posYDisplay = document.getElementById("posY");

// On mousemove
container.addEventListener("mousemove", (e)=> {
  // Do math
  xPercent = parseInt(e.pageX / window.innerWidth * 100);
  yPercent = parseInt(e.pageY / window.innerHeight * 100);
  
  // Display numbers
  posXDisplay.innerText = xPercent;
  posYDisplay.innerText = yPercent;
});

alert('hello');