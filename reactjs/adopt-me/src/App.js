import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
// import Pet from "./Pet.js";
import SearchParams from "./searchParams.js";

const App = () => {
  return (
    <div>
      <h1>Adopt Me</h1>
      <SearchParams />
    </div>
  )
};



ReactDOM.render(<StrictMode><App /></StrictMode>, document.getElementById("root"));
