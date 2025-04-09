import React from "react";
import { Button } from "./Button";

const TodoForm = ({ title, setTitle, onSubmit, editId }) => {
  const handleInputChange = (e) => setTitle(e.target.value);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onSubmit(title);
  };

  return (
    <div className="card text-start">
      <div className="card-body">
        <form onSubmit={handleFormSubmit} className="form-group">
          <div className="d-flex flex-column">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={handleInputChange}
            />
          </div>
          <Button editId={editId} />
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
