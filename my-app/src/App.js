import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>📝 To-Do List</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Nhập công việc..."
        style={{ width: "70%", padding: "5px" }}
      />
      <button onClick={handleAddTask} style={{ marginLeft: "10px" }}>
        Thêm
      </button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index} style={{ margin: "8px 0" }}>
            {task}
            <button
              onClick={() => handleDeleteTask(index)}
              style={{ marginLeft: "10px", color: "red" }}
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;