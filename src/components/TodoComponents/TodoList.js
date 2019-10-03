// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

const Item = props => {
  return (
    <div
      onClick={props.onClick}
      className={`item${props.item.checked ? "checked" : ""}`}>
      <p>{props.item.name}</p>
    </div>
  );
};

export default Item;