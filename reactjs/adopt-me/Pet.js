import React from "react";

const Pet = (props) =>
  React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.color),
  ]);

export default Pet;
