// App.js
import React, { useState } from "react";

function App() {
  const [task, setTask] = useState(""); // for input field
  const [todos, setTodos] = useState([]); // list of tasks

  // Add new task
  const addTask = () => {
    if (task.trim() === "") return; // ignore empty input
    setTodos([...todos, task]);
    setTask(""); // clear input
  };

  // Delete task by index
  const deleteTask = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>📝 Simple To-Do List</h1>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a new task..."
        style={{
          padding: "8px",
          width: "200px",
          marginRight: "10px",
          borderRadius: "4px",
          border: "1px solid gray",
        }}
      />

      <button
        onClick={addTask}
        style={{
          padding: "8px 15px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Add Task
      </button>

      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {todos.map((item, index) => (
          <li
            key={index}
            style={{
              backgroundColor: "#f2f2f2",
              margin: "8px auto",
              padding: "10px",
              width: "250px",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {item}
            <button
              onClick={() => deleteTask(index)}
              style={{
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "4px",
                padding: "5px 10px",
                cursor: "pointer",
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;