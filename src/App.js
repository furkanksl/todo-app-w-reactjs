import Todo from "./components/Todo";
import { useState } from "react";
import AddTodoModal from "./components/AddTodo";

var todosDummyData = [
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

function App() {
  const [todos, setTodos] = useState(todosDummyData);
  const [todoItems, setTodoItems] = useState(createTodoCard().reverse());
  const [isNewTodoModalOpen, setIsNewTodoModelOpen] = useState(false);

  function createTodoCard() {
    var todoItems = todos.map((todo) =>
      todo.id !== undefined ? (
        <li key={todo.id}>
          <Todo text={todo.text} id={todo.id} deleteTodo={deleteTodo} />
        </li>
      ) : null
    );
    return todoItems;
  }

  function deleteTodo(id) {
    todos.forEach((todo, index) => {
      if (todo.id === id) {
        todos[index] = {};
        setTodos(todos);
        setTodoItems(createTodoCard().reverse());
        // console.log(todos);
        return;
      }
    });
  }

  function addTodo(text) {
    if (text === "") {
      closeNewTodoModal();
      return;
    }

    var todoItem = {
      id: todos.length + 1,
      text: text,
    };

    todos.push(todoItem);
    setTodos(todos);
    setTodoItems(createTodoCard().reverse());
    closeNewTodoModal();
  }

  function openNewTodoModal() {
    setIsNewTodoModelOpen(true);
  }

  function closeNewTodoModal() {
    setIsNewTodoModelOpen(false);
  }

  return (
    <div className="container">
      <div className="header-container">
        <p className="title">My Todo List</p>
        <button className="new-todo-button" onClick={openNewTodoModal}>
          New Todo
        </button>
      </div>
      <ul>{todoItems}</ul>
      {isNewTodoModalOpen && (
        <AddTodoModal onConfirm={addTodo} onCancel={closeNewTodoModal} />
      )}
    </div>
  );
}

export default App;
