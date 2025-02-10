import axios from "axios";

const DeleteModal = ({ setIsDeleteModal, setData, taskId }) => {
  async function handleDeleteClick() {
    let dataFetched = await axios.delete(
      `http://localhost:5000/api/tasks/${taskId}`
    );
    setData(dataFetched.data);
    setIsDeleteModal(false);
  }
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
        <button
          type="button"
          className="delete-modal-delete"
          onClick={handleDeleteClick}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
