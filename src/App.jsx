import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

function App() {
  const [todos, setTodos] = useState([
    { text: "shopping", completed: false },
    { text: "cleaning", completed: false },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [itemBeingEdited, setItemBeingEdited] = useState(null);
  const [editValue, setEditValue] = useState("");

  const handleAdd = () => {
    if (inputValue !== "") {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };
  const handleDelete = (indexToDelete) => {
    const newTodos = todos.filter((todo, index) => index !== indexToDelete);
    setTodos(newTodos);
  };

  const handleEdit = (todoText, index) => {
    setItemBeingEdited(index);
    setEditValue(todoText);
  };

  const handleEditSave = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].text = editValue;
    setTodos(updatedTodos);
    setItemBeingEdited(null);
    setEditValue("");
  };
  const handleToggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <Header />
      <div className="todo-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new todo"
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <ToDoList
        todos={todos}
        itemBeingEdited={itemBeingEdited}
        editValue={editValue}
        setEditValue={setEditValue}
        handleEditSave={handleEditSave}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleToggleComplete={handleToggleComplete}
      />
    </div>
  );
}
export default App;
