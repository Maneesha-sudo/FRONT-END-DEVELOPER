import axios from "./axiosInstance";

// CREATE TODO
export const createTodo = async (todo) => {
  const response = await axios.post("/todos.json", todo);
  return response.data;
};

// READ TODOS
export const getTodos = async () => {
  const response = await axios.get("/todos.json");

  if (!response.data) return [];

  return Object.keys(response.data).map((id) => ({
    id,
    ...response.data[id],
  }));
};

// UPDATE TODO
export const updateTodo = async (id, updatedTodo) => {
  await axios.put(`/todos/${id}.json`, updatedTodo);
};

// DELETE TODO
export const deleteTodo = async (id) => {
  await axios.delete(`/todos/${id}.json`);
};

// TOGGLE STATUS
export const toggleTodoStatus = async (id, completed) => {
  await axios.patch(`/todos/${id}.json`, { completed });
};
