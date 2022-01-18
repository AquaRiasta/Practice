import React from "react";

// const Pet = (props) =>
//   React.createElement("div", {}, [
//     React.createElement("h2", {}, props.name),
//     React.createElement("h3", {}, props.animal),
//     React.createElement("h3", {}, props.color),
//   ]);

const Pet = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h2>{props.animal}</h2>
      <h2>{props.color}</h2>
    </div>
  )
}

export default Pet;
