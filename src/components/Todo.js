import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './Todo.css';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    const todo = { id: uuidv4(), title, completed: false };

    setTodos([todo, ...todos]);
    setTitle('');

    e.preventDefault();
  };

  const handleDelete = (todoId) => {
    const newTodos = todos.filter((item) => item.id !== todoId);
    setTodos(newTodos);
  };

  const todoItems = todos.map((item) => {
    return (
      <div className="notification is-warning" key={item.id}>
        {item.title}
        <button className="delete" onClick={() => handleDelete(item.id)}></button>
      </div>
    );
  });

  return (
    <section className="todo">
      <div className="box">
        <form onSubmit={handleSubmit}>
          <div className="field is-grouped">
            <p className="control is-expanded">
              <input
                className="input"
                type="text"
                placeholder="Todo Title"
                value={title}
                onChange={handleTitleChange}
              />
            </p>
            <p className="control">
              <button className="button is-primary" type="submit">
                Add
              </button>
            </p>
          </div>
        </form>
      </div>

      {todoItems.length ? <div className="box">{todoItems}</div> : <span>Please add some todo!</span>}
    </section>
  );
}

export default Todo;
