import React from "react";

const ToDoList = ({
  todos,
  itemBeingEdited,
  editValue,
  setEditValue,
  handleEditSave,
  handleDelete,
  handleEdit,
  handleToggleComplete,
}) => {
  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <div
          key={index}
          className={`todo-item ${todo.completed ? "completed" : ""}`}
        >
          {itemBeingEdited === index ? (
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
            <>
              <span>{todo.text}</span>
              <button
                onClick={() => handleDelete(index)}
                className="delete-btn"
              >
                Delete
              </button>
              <button
                onClick={() => handleEdit(todo.text, index)}
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
  );
};

export default ToDoList;
