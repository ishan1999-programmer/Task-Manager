import { useRef } from "react";
import axios from "axios";

const Task = ({
  setIsModal,
  setIsDeleteModal,
  task,
  setTask,
  id,
  title,
  isCompleted,
  setData,
  setTaskId,
}) => {
  const taskNameRef = useRef(null);

  async function handleDoneClick(id) {
    let dataFetched = await axios.put(`http://localhost:5000/api/tasks/${id}`, {
      title: title,
      isCompleted: !isCompleted,
    });
    setData(dataFetched.data);
  }

  return (
    <li className="task">
      <p
        className={task.isCompleted ? "task-name-done" : "task-name"}
        ref={taskNameRef}
      >
        {title}
      </p>
      <button
        type="button"
        className="done"
        onClick={() => handleDoneClick(id)}
      >
        <div>Done</div>
      </button>
      <button
        type="button"
        className="edit"
        onClick={() => {
          setIsModal("edit");
          setTask(taskNameRef.current.innerHTML);
          setTaskId(id);
        }}
      >
        <div>Edit</div>
      </button>
      <button
        type="button"
        className="delete"
        onClick={() => {
          setIsDeleteModal(true);
          setTaskId(id);
        }}
      >
        <div>Delete</div>
      </button>
    </li>
  );
};

export default Task;
