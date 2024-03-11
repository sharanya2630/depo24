import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

const Todo = ({ task, index, deleteTask, editTask, counter }) => {
  const handleEdit = () => {
    const newTask = prompt("Enter the new task:", task);
    if (newTask !== null) {
      editTask(index, newTask);
    }
  };

  return (
    <div className="task-card">
      <p>{task}</p>
      <button onClick={handleEdit}>
        <FaEdit />
      </button>
      <button onClick={() => deleteTask(index)}>
        <FaTrash />
      </button>
      <span>Counter: {counter}</span>
    </div>
  );
};

export default Todo;
