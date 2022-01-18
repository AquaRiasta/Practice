import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet.js";

const App = () =>
  React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me"),
    React.createElement(Pet, { name: "Kevin", animal: "Dog", color: "Brown" }),
    React.createElement(Pet, { name: "Angel", animal: "Bird", color: "Blue" }),
    React.createElement(Pet, { name: "Sam", animal: "Dog", color: "White" }),
  ]);
ReactDOM.render(React.createElement(App), document.getElementById("root"));
