function Modal(props) {
  function cancelHandler() {
    props.onCancel();
  }

  function confirmHandler() {
    props.onConfirm();
  }

  return (
    <div className="modal">
      <p>Are you sure?</p>
      <div className="buttons-container">
        <button className="cancel-button" onClick={cancelHandler}>
          Cancel
        </button>
        <button className="confirm-button" onClick={confirmHandler}>
          Confrim
        </button>
      </div>
    </div>
  );
}

export default Modal;
