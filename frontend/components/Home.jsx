import Task from "./Task"
import Modal from "./Modal";
import { useState } from "react";

const Home = ()=>{
    const [modal , setIsModal] = useState("");
    return(
        <div className="container">
            <div className={modal ? "content-hide" : "content"}>
                <h1>Task Manager</h1>
                <button type="button" className="create" onClick={()=>setIsModal("create")}>Create</button>
                <ul className="tasks-list">
                    <Task setIsModal= {setIsModal}></Task>
                </ul>
            </div>
            {modal&&<Modal modal={modal} setIsModal= {setIsModal}/>}
        </div>
    )
}

export default Home;