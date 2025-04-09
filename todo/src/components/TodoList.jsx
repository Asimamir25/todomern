import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const TodoList = ({ todos, onDelete, onEdit }) => {
  return (
    <div>
      {todos?.length === 0 ? (
        <div className="alert alert-info mt-4" role="alert">
          No Tasks Available Todo
        </div>
      ) : (
        todos?.map((item, index) => (
          <div key={index} className="card mt-4">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between">
                <h5>{item.title}</h5>
                <div className="d-flex gap-3">
                  <AiFillDelete onClick={() => onDelete(item._id)} />
                  <AiFillEdit onClick={() => onEdit(item._id, item.title)} />
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TodoList;
