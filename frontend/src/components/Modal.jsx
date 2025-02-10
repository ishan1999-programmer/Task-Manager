import { useState } from "react";
import axios from "axios";

const Modal = ({ modal, setIsModal, task, setTask, setData, taskId }) => {
  function handleClick() {
    if (modal === "create") {
      addTask();
    } else {
      editTask();
    }
  }

  async function addTask() {
    let dataFetched = await axios.post("http://localhost:5000/api/tasks", {
      title: task,
    });
    setData(dataFetched.data);
    setIsModal("");
    setTask("");
  }

  async function editTask() {
    let dataFetched = await axios.put(
      `http://localhost:5000/api/tasks/${taskId}`,
      { title: task, isCompleted: false }
    );
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
        <button type="button" onClick={() => handleClick()}>
          {modal === "create" ? "Add" : "Save"}
        </button>
      </div>
    </div>
  );
};

export default Modal;
