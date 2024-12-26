import { useState } from "react";

import "./App.css";

function App() {
  const [todos, setTodos] = useState(["shopping", "cleaning"]);
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    // console.log("Current input:", inputValue);
    if (inputValue !== "") {
      setTodos([...todos, inputValue]);

      setInputValue("");
    }
  };
  return (
    <div className="container">
      <h1>To-do -List</h1>
      <div className="todo-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new todo"
        />

        <button onClick={handleAdd}>Add</button>
      </div>

      <div className="todo-list">
        {console.log("Rendering todos:", todos)}
        {todos.map((todo, index) => (
          <div key={index} className="todo-item">
            {todo}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
