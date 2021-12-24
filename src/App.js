import './App.css';

import { Todo } from './components';

function App() {
  return (
    <div className="app">
      <section className="container">
        <main className="todo-wrapper">
          <Todo />
        </main>
      </section>
    </div>
  );
}

export default App;
