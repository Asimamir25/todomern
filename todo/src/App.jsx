import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "./components/Button";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
} from "./utils/TodoServices";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([]);
  const [editId, setEditId] = useState(null);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const todos = await getTodos();
        setTodo(todos);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };
    fetchTodos();
  }, []);

  const handleSubmit = async (title) => {
    try {
      if (editId) {
        await updateTodo(editId, title);
      } else {
        await addTodo(title);
      }

      const todos = await getTodos();
      setTodo(todos);
      setTitle("");
      setEditId(null);
    } catch (error) {
      console.error("Error submitting todo:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTodo(id);
      const todos = await getTodos();
      setTodo(todos);
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const handleEdit = (id, currentTitle) => {
    setTitle(currentTitle);
    setEditId(id);
  };

  return (
    <div className="container mt-4">
      <h1>Todo Task</h1>
      <TodoForm
        title={title}
        setTitle={setTitle}
        onSubmit={handleSubmit}
        editId={editId}
      />
      <TodoList todos={todo} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
}

export default App;
