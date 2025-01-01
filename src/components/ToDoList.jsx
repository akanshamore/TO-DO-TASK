import React from "react";
import ToDoItem from "./ToDoItem";

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
        <ToDoItem
          key={index}
          todo={todo}
          index={index}
          itemBeingEdited={itemBeingEdited}
          editValue={editValue}
          setEditValue={setEditValue}
          handleEditSave={handleEditSave}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleToggleComplete={handleToggleComplete}
        />
      ))}
    </div>
  );
};

export default ToDoList;
