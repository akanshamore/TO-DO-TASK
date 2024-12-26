import { useState } from "react";

import "./App.css";

function App() {
  const [todos, setTodos] = useState(["shopping", "cleaning"]);
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    // console.log("add");
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
      </div>
      <div>
        <button onClick={handleAdd}>Add</button>
      </div>

      <div>
        {todos.map((todo) => (
          <div>{todo}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
