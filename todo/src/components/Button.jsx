import React from "react";

export const Button = ({ editId }) => {
  console.log("asam", editId);

  return (
    <button type="submit" className="mt-3">
      {editId ? "Update" : "Submit"}
    </button>
  );
};
