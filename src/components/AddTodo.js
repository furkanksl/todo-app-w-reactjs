import { useState } from "react";

function AddTodo(props) {
  var [text, setText] = useState("");

  function cancelHandler() {
    props.onCancel();
  }

  function confirmHandler() {
    props.onConfirm(text);
    resetForm();
  }

  function resetForm() {
    setText("");
  }

  const handleChange = (event) => {
    setText(event.target.value);

    // console.log('value is:', event.target.value);
  };

  return (
    <div>
      <div className="new-todo-modal">
        <p>Add new todo</p>
        <input
          type="text"
          id="text"
          name="text"
          placeholder="Do workout.."
          value={text}
          onChange={handleChange}
        />
        <div className="buttons-container">
          <button className="cancel-button" onClick={cancelHandler}>
            Cancel
          </button>
          <button className="add-button" onClick={confirmHandler}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
