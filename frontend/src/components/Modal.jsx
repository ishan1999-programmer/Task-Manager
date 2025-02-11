import { useState } from "react";
import axios from "axios";

const Modal = ({ modal, setIsModal, task, setTask, setData, taskId }) => {
  let [isLoading , setIsLoading] = useState(false);
  function handleClick() {
    if (modal === "create") {
      addTask();
    } else {
      editTask();
    }
  }

  async function addTask() {
    setIsLoading(true);
    let dataFetched = await axios.post("http://localhost:5000/api/tasks", {
      title: task,
    });
    setIsLoading(false);
    setData(dataFetched.data);
    setIsModal("");
    setTask("");
  }

  async function editTask() {
    setIsLoading(true);
    let dataFetched = await axios.put(
      `http://localhost:5000/api/tasks/${taskId}`,
      { title: task, isCompleted: false }
    );
    setIsLoading(false);
    setData(dataFetched.data);
    setIsModal("");
    setTask("");
  }

  return (
    <div className="modal">
      <button className="close-modal" onClick={() => setIsModal("")}>
        X
      </button>
      <p className="modal-heading">
        {modal === "create" ? "Create a new task" : "Edit task"}
      </p>
      <div className="modal-input-box">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="button" disabled={isLoading} onClick={() => handleClick()}>
          {isLoading ?(modal==="create" ? "Adding..." : "Editing...") : (modal==="create" ? "Add" : "Edit")  }
        </button>
      </div>
    </div>
  );
};

export default Modal;
