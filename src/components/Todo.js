import Backdrop from "./Backdrop";
import DeleteModal from "./DeleteModal";

import { useState } from "react";

function Todo(props) {
  const [isModalOpen, setIsModelOpen] = useState(false);

  function deleteTodo() {
    // console.log(props.id);
    setIsModelOpen(true);
  }

  function closeDeleteModel() {
    setIsModelOpen(false);
  }

  function confirmDeleteModel() {
    props.deleteTodo(props.id);
    setIsModelOpen(false);
  }

  return (
    <div className="card">
      <p> {props.text} </p>
      <div className="button-container">
        <button onClick={deleteTodo}> Delete </button>
      </div>
      {isModalOpen && (
        <DeleteModal
          onCancel={closeDeleteModel}
          onConfirm={confirmDeleteModel}
        />
      )}
      {isModalOpen && <Backdrop onCancel={closeDeleteModel} />}
    </div>
  );
}

export default Todo;
