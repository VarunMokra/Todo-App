const BASE_URL = import.meta.env.VITE_TODOS_BACKEND_URL;

export const API_ENDPOINTS = {
  createTodo: `${BASE_URL}/create_todo`,
  getTodos: `${BASE_URL}/todos`,
  updateTodo: (id) => `${BASE_URL}/update_todo/${id}`,
  deleteTodo: (id) => `${BASE_URL}/delete_todo/${id}`,
};
