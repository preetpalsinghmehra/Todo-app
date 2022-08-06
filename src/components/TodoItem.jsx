import React from "react";
import "../components/TodoItem.css";

function TodoItem({ text, id, onChecked }) {
  return (
    <div onClick={() => onChecked(id)}>
      <li>{text}</li>
    </div>
  );
}

export default TodoItem;
