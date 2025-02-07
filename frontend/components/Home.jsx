import Task from "./Task";
import Modal from "./Modal";
import DeleteModal from "./DeleteModal";
import { useState } from "react";

const Home = () => {
  const [modal, setIsModal] = useState("");
  const [task, setTask] = useState("");
  const [deleteModal, setIsDeleteModal] = useState(false);
  const data = []
  return (
    <div className="container">
      <div className={modal || deleteModal ? "content-hide" : "content"}>
        <h1>Task Manager</h1>
        <button
          type="button"
          className="create"
          onClick={() => setIsModal("create")}
        >
          Create
        </button>
        <ul className="tasks-list">
            {data.map((task)=> <Task
            key={task.id}
            title={task.title}
            isCompleted={task.isCompleted}
            setIsModal={setIsModal}
            setIsDeleteModal={setIsDeleteModal}
            task={task}
            setTask={setTask}
          />)}
          
        </ul>
      </div>
      {modal && (
        <Modal
          modal={modal}
          setIsModal={setIsModal}
          task={task}
          setTask={setTask}
        />
      )}
      {deleteModal && <DeleteModal setIsDeleteModal={setIsDeleteModal} />}
    </div>
  );
};

export default Home;
