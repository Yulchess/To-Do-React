import React, { useState } from "react";
import "./ToDo.css";

export const ToDo = () => {
  const [todo, setTodo] = useState({
    value: "",
    isCompleted: false,
    id: Date.now(),
  });
  const [todos, setTodos] = useState([]);

  const addBtn = () => {
    setTodos([...todos, todo]);
    setTodo({ value: "", isCompleted: false, id: Date.now() });
  };

  const removeBtn = () => {
    setTodos([]);
  };

  const completeTasks = (id) => {
    setTodos(
      todos.map((v) =>
        id === v.id ? { ...v, isCompleted: !v.isCompleted } : v
      )
    );
  };

  const deleteCompletedTasks = () => {
    setTodos(todos.filter((e) => !e.isCompleted));
  };

  return (
    <div className="main-conteiner">
      <div className="container-titles">
        <h2 className="title">My to-do list</h2>
        <h3 className="subtitle">Double-click an item to mark it complete.</h3>
        <input
          value={todo.value}
          onChange={(e) => setTodo({ ...todo, value: e.target.value })}
        />
        <button onClick={addBtn} className="btn-add">
          Add
        </button>
      </div>

      <div className="container-task">
        <ul className="add-task">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="taskname"
              onClick={() => completeTasks(todo.id)}
              style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
            >
              {todo.value}
            </li>
          ))}
        </ul>
      </div>

      <div className="container-btns">
        <button onClick={deleteCompletedTasks} className="btn-clear-completed">
          Clear Completed
        </button>
        <button onClick={removeBtn} className="btn-empty-list">
          Empty List
        </button>
        <button className="btn-save-list">Save List</button>
      </div>
    </div>
  );
};
