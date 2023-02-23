import { useState } from "react";
import "./TodoList.css";

function VaporwaveTodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleNewTask = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = (event) => {
    event.preventDefault(); // Prevent form submission and page refresh
    if (newTask !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="vaporwave-todo-list-container">
      <h1 className="vaporwave-todo-list-heading">Vaporwave Todo List</h1>
      <form className="vaporwave-todo-list-form">
        <input
          type="text"
          className="vaporwave-todo-list-input"
          value={newTask}
          onChange={handleNewTask}
          placeholder="Add a task..."
        />
        <button className="vaporwave-todo-list-button" onClick={handleAddTask}>
          Add
        </button>
      </form>
      <ul className="vaporwave-todo-list">
        {tasks.map((task, index) => (
          <li className="vaporwave-todo-list-item" key={index}>
            <span className="vaporwave-todo-list-text">{task}</span>
            <button
              className="vaporwave-todo-list-delete"
              onClick={() => handleDeleteTask(index)}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VaporwaveTodoList;
