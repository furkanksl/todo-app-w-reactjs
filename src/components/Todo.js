import Backdrop from "./Backdrop";
import Modal from "./Modal";

import { useState } from "react";

function Todo(props) {
  const [isModalOpen, setIsModelOpen] = useState(false);

  function deleteTodo() {
    console.log(props.id);
    setIsModelOpen(true);
  }

  function closeDeleteModel() {
    setIsModelOpen(false);
  }

  return (
    <div className="card">
      <h2> {props.text} </h2>
      <div className="button-container">
        <button onClick={deleteTodo}> Delete </button>
      </div>
      {isModalOpen && (
        <Modal onCancel={closeDeleteModel} onConfirm={closeDeleteModel} />
      )}
      {isModalOpen && <Backdrop onCancel={closeDeleteModel} />}
    </div>
  );
}

export default Todo;
