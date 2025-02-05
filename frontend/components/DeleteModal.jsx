const DeleteModal = ({ setIsDeleteModal }) => {
  return (
    <div className="delete-modal">
      <p className="delete-modal-heading">Do you want to delete the task?</p>
      <div className="delete-modal-button-box">
        <button
          type="button"
          className="delete-modal-cancel"
          onClick={() => setIsDeleteModal(false)}
        >
          Cancel
        </button>
        <button type="button" className="delete-modal-delete">
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
