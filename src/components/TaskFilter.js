import React, { useState } from "react";

const TaskFilter = ({ onFilterChange }) => {
  const [filterText, setFilterText] = useState("");

  const handleFilterChange = (e) => {
    const text = e.target.value;
    setFilterText(text);
    onFilterChange(text); // Passo il testo del filtro al genitore
  };

  return (
    <div className="mb-3">
      <input
        type="text"
        placeholder="Search.."
        value={filterText}
        onChange={handleFilterChange}
        className="form-control my-2 rounded-pill shadow"
      />
    </div>
  );
};

export default TaskFilter;
