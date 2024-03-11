import "./App.css";
import { useState } from "react";
import Todo from "./components/todo-list/todo";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState("");

  function deleteTask(index) {
    setTaskList(taskList.filter((_, idx) => idx !== index));
  }

  function editTask(index, newTask) {
    setTaskList(
      taskList.map((task, idx) =>
        idx === index ? { ...task, counter: task.counter + 1 } : task
      )
    );
  }

  function addTaskToList(taskName, quantity) {
    for (let i = 0; i < quantity; i++) {
      setTaskList((prevList) => [...prevList, { text: taskName, counter: 0 }]);
    }
  }

  function handleAddTask() {
    const [taskName, quantity] = task.split(/\s+(\d+)$/); // Parse task and quantity
    if (taskName.trim() !== "") {
      addTaskToList(taskName.trim(), quantity ? parseInt(quantity, 10) : 1);
    }
    setTask(""); // Clear input field
  }

  return (
    <div className="App">
      <h1>Daily Goals!</h1>
      <input value={task} onChange={(e) => setTask(e.target.value)} />
      <br></br>
      <button onClick={handleAddTask}>Add Task</button>
      {taskList.map((item, index) => (
        <Todo
          key={index}
          task={item.text}
          index={index}
          deleteTask={deleteTask}
          editTask={(newTask) => editTask(index, newTask)}
          counter={item.counter}
        />
      ))}
    </div>
  );
}

export default App;
