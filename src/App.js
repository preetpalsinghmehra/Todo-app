import "./App.css";
import { useState } from "react";
import TodoItem from "./components/TodoItem";

function App() {
  const [inputItem, setinputItem] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems((prevItems) => {
      return [...prevItems, inputItem];
    });
    setinputItem("");
  };

  const deleteItem = (id) => {
    setItems(prevItems => prevItems.filter((it, idx) => id !== idx));
  };

  return (
    <div>
      <div className="container">
        <h4>Todo List</h4>

        <input
          type="text"
          value={inputItem}
          onChange={(e) => setinputItem(e.target.value)}
        />
        <button onClick={addItem}>Add</button>
        <ul>
          {items.map((item, id) => (
            <TodoItem key={id} text={item} id={id} onChecked={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
