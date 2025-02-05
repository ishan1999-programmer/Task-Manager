const Task = ({setIsModal})=>{
    return(
        <li className="task">
            <p>Task Name</p>
            <button type="button" className="done">
                <div>Done</div>
            </button>
            <button type="button" className="edit" onClick={()=>setIsModal("edit")}>
                <div>Edit</div>
            </button>
            <button type="button" className="delete">
                <div>Delete</div>
            </button>
        </li>
    )
}

export default Task