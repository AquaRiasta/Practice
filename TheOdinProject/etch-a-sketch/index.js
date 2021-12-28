// constant
const modeName = ["Single color", "Randomized colors", "Eraser"];

// parameters
let size = 32;
let mode = 0;
let selectedColor = "#fff";

// hover function for div
const colorPicker = document.querySelector(".options__buttons--color");
function onHover(event) {
  switch (mode) {
    case 0:
      event.target.style.backgroundColor = `${colorPicker.value}`;
      break;
    case 1:
      event.target.style.backgroundColor = `rgb(${Math.floor(
        Math.random() * 255
      )}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
        Math.random() * 255
      )})`;
      break;
    case 2:
      event.target.style.backgroundColor = ``;
      break;
  }
}

// create grid
function gridCreate() {
  //generate grid
  let grid = document.querySelector("grid");
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  // generate boxes
  for (let i = 0; i < size * size; ++i) {
    let box = document.createElement("div");
    box.classList.add("pixel");
    box.addEventListener("mouseenter", onHover);
    grid.appendChild(box);
  }

  return grid;
}

// buttons function
(function buttons() {
  // get buttons from DOM
  const single = document.querySelector(".options__buttons--single");
  const random = document.querySelector(".options__buttons--random");
  const erase = document.querySelector(".options__buttons--erase");
  const clear = document.querySelector(".options__buttons--clear");

  // function for changing mode
  function changeMode(n) {
    return function () {
      mode = n;
    };
  }

  // create EventListener
  single.addEventListener("click", changeMode(0));
  random.addEventListener("click", changeMode(1));
  erase.addEventListener("click", changeMode(2));
  clear.addEventListener("click", () => {
    document
      .querySelectorAll(".pixel")
      .forEach((element) => (element.style.backgroundColor = ``));
  });
})();

document.body.appendChild(gridCreate());
