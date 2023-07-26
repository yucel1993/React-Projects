import { useEffect, useState } from "react";
import { InputGroup, Form, Button } from "react-bootstrap";

function Header({ todos, setTodos }) {
  const [task, setTask] = useState("");
  const addToDo = () => {
      const newTodo = {
          id: new Date().getTime(),
          text: task,
          completed: false,
        };
    
        setTodos([...todos, newTodo]);
        console.log(task)
    setTask("");
  };
  useEffect(() => {
   
  }, [todos]);
  return (
    <div className="text-center">
      <h1>Things to do</h1>
      <InputGroup className="mb-3 w-50 mx-auto">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <Button id="basic-addon2" onClick={addToDo}>
          Add
        </Button>
      </InputGroup>
    </div>
  );
}

export default Header;
