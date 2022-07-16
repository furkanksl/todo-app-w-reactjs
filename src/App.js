import Todo from "./components/Todo";

var todos = [
  {
    id: 1,
    text: "Clean room",
  },
  {
    id: 2,
    text: "Make your bed",
  },
  {
    id: 3,
    text: "Go to gym",
  },
  {
    id: 4,
    text: "Wash the dishes",
  },
];

const todoItems = todos.map((todo) => (
  <li key={todo.id}>
    <Todo text={todo.text} id={todo.id} />
  </li>
));

function App() {
  return (
    <div className="container">
      <div className="header-container">
        <p className="title">My Todo List</p>
        <button className="new-todo-button">New Todo</button>
      </div>
      <ul>{todoItems}</ul>
    </div>
  );
}

export default App;
