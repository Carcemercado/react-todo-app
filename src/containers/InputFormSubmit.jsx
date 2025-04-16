import React from "react";
import { useState, useEffect } from "react";


function InputFormSubmit() {

  const [inputValue, setInputValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedValue(inputValue);
    setInputValue("");
  };

  useEffect(() => {
    if (submittedValue) {
      const newTodo = {
        key: Date.now(),
        text: submittedValue,
        completed: false
      };
      setTodos(prevTodos => [...prevTodos, newTodo]);
    }
  }, [submittedValue]);

  const todoItems = todos.map(todo => (
    <div key={todo.key}>
      <input type="checkbox" checked={todo.completed} onChange={() => {}} />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
    </div>
  ));

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>
      <p>{submittedValue}</p>
      <ul>
        <li>{todoItems}</li>
      </ul>
    </div>
  );
}

export default InputFormSubmit;

