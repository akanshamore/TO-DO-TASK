import { useState } from "react";

import "./App.css";

function App() {
  const [todos, setTodos] = useState(["shopping", "cleaning"]);
  const [inputValue, setInputValue] = useState("");
  const [itemBeingEdited, setItemBeingEdited] = useState(null);
  const [editValue, setEditValue] = useState("");

  const handleAdd = () => {
    // console.log("Current input:", inputValue);
    if (inputValue !== "") {
      setTodos([...todos, inputValue]);

      setInputValue("");
    }
  };
  const handleDelete = (indexToDelete) => {
    const newTodos = todos.filter((todo, index) => index !== indexToDelete);
    setTodos(newTodos);
  };

  const handleEdit = (todo, index) => {
    // console.log(`Edit clicked for item at index ${index}: ${todo}`);
    setItemBeingEdited(index);
    setEditValue(todo);
  };
  const handleEditSave = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = editValue;
    setTodos(updatedTodos);
    setItemBeingEdited(null);
    setEditValue("");
  };
  const handleToggleComplete = () => {};
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
        {todos.map((todo, index) => (
          <div key={index} className="todo-item">
            {itemBeingEdited === index ? (
              // If this item is being edited, show an input and Save button
              <>
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
                <button
                  onClick={() => handleEditSave(index)}
                  className="save-btn"
                >
                  Save
                </button>
              </>
            ) : (
              // If this item is not being edited, show the todo text and buttons
              <>
                <span>{todo}</span>
                <button
                  onClick={() => handleDelete(index)}
                  className="delete-btn"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleEdit(todo, index)}
                  className="edit-btn"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleToggleComplete(index)}
                  className="complete-btn"
                >
                  {todo.completed ? "Undo" : "Complete"}
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;
