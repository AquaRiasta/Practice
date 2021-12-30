// const
const input = document.getElementById("input");
const history = document.getElementById("history");
const options = new Map();
options.set("Delete", "clear");
options.set("Backspace", "delete");
options.set("/", "divide");
options.set("*", "multiply");
options.set("+", "plus");
options.set("-", "minus");
options.set("Delete", "clear");
options.set("=", "equal");
options.set("Enter", "equal");
options.set("%", "percent");
options.set(".","dot");
const values = {
  input: "",
};

// function to get key by value in map
function getOptionsKey(searchValue) {
  for (let [key, value] of options.entries()) {
    if (value === searchValue) return key;
  }
  return searchValue;
}

function getOptionsID(searchValue) {
  return options.has(searchValue) ? options.get(searchValue) : searchValue;
}

// Visual input
function visualInput() {
  document.querySelectorAll(".grid > div").forEach(function (element) {
    element.addEventListener("mousedown", (event) =>
      process(getOptionsKey(event.target.id))
    );

    // function for removing effect - from keyboardInput
    console.log(element);
    element.addEventListener("transitionend", (event) => {
      event.target.classList.remove("active");
    });
  });
}

// Keyboard input
function keyboardInput() {
  function visual(key) {
    try {
      const element = document.getElementById(getOptionsID(key));
      // console.log(element, key, getOptionsID(key));
      element.classList.add("active");
      // function for removing effect - in visualInput
      process(key);
    } catch (e) {
      // console.error(e);
    }
  }

  document.addEventListener("keydown", (event) => {
    visual(event.key);
  });
}

function calc(str) {
  return eval(str);
}

function process(key) {
  console.log(/\./.test(key));
  if (/\d/.test(key)) {
    values.input += key;
    input.textContent = values.input;
    console.log(values.input, input.textContent);
  } else if (/[\+\-\*\/]/.test(key)) {
    console.log(values.input.match(/[\+\-\*\/]{0,1}\d+/g));
    if (values.input == "" && /[\-]/.test(key)) {
      values.input += key;
      input.textContent = values.input;
      console.log(values.input, input.textContent);
    } else if (values.input.match(/[\+\-\*\/]{0,1}\d+/g).length >= 2) {
      let res = calc(values.input);
      history.textContent = values.input;
      values.input = res + key;
      input.textContent = values.input;
    } else {
      values.input += key;
      input.textContent = values.input;
      console.log(values.input, input.textContent);
    }
  } else if (/Delete/.test(key)) {
    history.textContent = "";
    values.input = "";
    input.textContent = "";
  } else if (/Backspace/.test(key)) {
    values.input = values.input.slice(0, values.input.length - 1);
    input.textContent = values.input;
  } else if (/[\=(Enter)]/.test(key)) {
    let res = calc(values.input);
    history.textContent = values.input;
    values.input = res;
    input.textContent = values.input;
  } else if (/\%/.test(key)) {
    let res = calc(values.input + "*100");
    history.textContent = values.input;
    values.input = res.toString().match(/[\+\-\*\/]{0,1}\d+/g)[0] + "%";
    input.textContent = values.input;
  } else if (/\./.test(key)) {
    if (/\.\d*$/.test(values.input)) return;
    values.input += key;
    input.textContent = values.input;
  }
}

visualInput();
keyboardInput();
