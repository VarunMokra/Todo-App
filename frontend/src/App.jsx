import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { API_ENDPOINTS } from "./config/api";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState("");

  const getTodos = () => {
    axios
      .get(API_ENDPOINTS.getTodos)
      .then((res) => setTodos(res.data))
      .catch((err) => console.error(err));
  };
  const addTodo = () => {
    if (newTask.trim() === "") return;
    const newTodo = { text: newTask, completed: false };
    axios
      .post(API_ENDPOINTS.createTodo, newTodo)
      .then((res) => setTodos((prev) => [...prev, res.data]))
      .catch((err) => console.error(err));
    setNewTask("");
  };

  const changeTodoStatus = (id) => {
    axios
      .put(API_ENDPOINTS.updateTodo(id))
      .then((res) => {
        const changedTodo = res.data;
        setTodos((prev) =>
          prev.map((todo) => {
            if (todo.id === id) return changedTodo;
            else return todo;
          })
        );
      })
      .catch((err) => console.error(err));
  };

  const deleteTodo = (id) => {
    axios
      .delete(API_ENDPOINTS.deleteTodo(id))
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    getTodos();
  }, [setTodos]);

  return (
    <div
      className="flex flex-col items-center justify-center bg-gray-100 min-h-screen
 w-80%"
    >
      <h1 className="text-4xl font-bold mb-3">Todo App</h1>
      <div className="flex flex-col items-center justify-start bg-white shadow-md rounded-lg p-6 w-full max-w-xl">
        <div className="m-6">
          <label className="block ml-1 mb-2 text-sm font-medium text-gray-900">
            Enter the Todo
          </label>
          <div className="flex items-center justify-center space-x-2">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Enter a task"
              className="bg-[#d1d5db] border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 w-64 p-2"
            />
            <button
              type="button"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded-md text-sm px-4 py-2"
              onClick={() => addTodo()}
            >
              Add Todo
            </button>
          </div>
        </div>
        <div className="">
          {todos.length > 0 ? (
            <ul className="list-disc list-inside">
              {todos.map((todo) => (
                <li
                  key={todo.id}
                  className={`text-gray-800 mb-2 ${
                    todo.completed ? "line-through" : ""
                  }`}
                >
                  <input
                    className="mx-2"
                    checked={todo.completed}
                    onChange={() => changeTodoStatus(todo.id)}
                    type="checkbox"
                  />
                  {todo.text}
                  <button
                    type="button"
                    className="ml-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded-md text-sm px-4 py-2"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No todos added yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
