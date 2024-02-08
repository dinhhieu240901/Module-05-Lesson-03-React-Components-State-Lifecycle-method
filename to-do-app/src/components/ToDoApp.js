import React, { useState } from "react";

function ToDoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTasks, setNewTasks] = useState("");
  const handleChangeInput = (e) => {
    setNewTasks(e.target.value);
  };
  const handleAddItem = () => {
    if (tasks.trim != "") {
      setTasks((prevTasks) => [...prevTasks, newTasks]);
      setNewTasks("");
    }
  };
  return (
    <div>
      <h1>To Do App</h1>
      <div>
        <textarea
          placeholder="Enter Tasks"
          value={newTasks}
          onChange={handleChangeInput}
        ></textarea>
        <button onClick={handleAddItem}>Add Item</button>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ToDoApp;
