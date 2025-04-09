import axios from "axios";

const API_URL = "https://interview-y6h9.onrender.com/api";

export const getTodos = async () => {
  try {
    const response = await axios.get(`${API_URL}/Task`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw error;
  }
};

export const addTodo = async (title) => {
  try {
    await axios.post(`${API_URL}/addTask`, { title });
  } catch (error) {
    console.error("Error adding todo:", error);
    throw error;
  }
};

export const updateTodo = async (id, title) => {
  try {
    await axios.put(`${API_URL}/edit/${id}`, { title });
  } catch (error) {
    console.error("Error updating todo:", error);
    throw error;
  }
};

export const deleteTodo = async (id) => {
  try {
    await axios.delete(`${API_URL}/delete/${id}`);
  } catch (error) {
    console.error("Error deleting todo:", error);
    throw error;
  }
};
