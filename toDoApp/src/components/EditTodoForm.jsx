import { useState } from "react";

function EditTodoForm({editTodo,task}) {
  const [value, setValue] = useState(task.task);
  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value,task.id)
    
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Update Task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
       Update Task
      </button>
    </form>
  );
}
export default EditTodoForm