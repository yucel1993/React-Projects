import { useEffect, useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";



function App() {
  const [todos,setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container">
      <Header setTodos={setTodos} todos={todos} />
      <ToDoList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
