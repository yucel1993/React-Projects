import { useState } from "react";

function TodoForm({addTodo}) {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value)
    setValue("");
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Enter the task to do"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Add Your Task
      </button>
    </form>
  );
}

export default TodoForm;
