import { useRef } from "react";

const Task = ({ setIsModal, setIsDeleteModal, task , setTask ,title, isCompleted }) => {
  const taskNameRef = useRef(null);

  return (
    <li className="task">
      <p className={task.isCompleted ? "task-name-done" : "task-name"} ref={taskNameRef}>
        {title}
      </p>
      <button type="button" className="done">
        <div>Done</div>
      </button>
      <button
        type="button"
        className="edit"
        onClick={() =>{
          setIsModal("edit");
          setTask(taskNameRef.current.innerHTML)

        }
        }
      >
        <div>Edit</div>
      </button>
      <button
        type="button"
        className="delete"
        onClick={() => setIsDeleteModal(true)}
      >
        <div>Delete</div>
      </button>
    </li>
  );
};

export default Task;
