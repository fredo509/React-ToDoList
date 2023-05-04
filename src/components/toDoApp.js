import React, { useState } from 'react';

function TodoApp() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue('');
    }
  }

  function handleTodoRemove(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  function handleTodoComplete(index) {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  }

  const completedTodos = todos.filter((todo) => todo.completed);
  const uncompletedTodos = todos.filter((todo) => !todo.completed);

  return (
    <div className="card">
      <h1>Todo App</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Add </button>
      </form>
      <h4>Uncompleted Task:</h4>
      <ul>
        {uncompletedTodos.map((todo, index) => (
        // eslint-disable-next-line
          <li key={index}>
            {todo.text}
            {' '}
            <button type="button" onClick={() => handleTodoComplete(index)}>Complete</button>
            <button type="button" onClick={() => handleTodoRemove(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <h4>Completed Task:</h4>
      <ul>
        {completedTodos.map((todo, index) => (
        // eslint-disable-next-line
          <li key={index}>
            {todo.text}
            {' '}
            <button type="button" onClick={() => handleTodoComplete(index)}>Undo</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
