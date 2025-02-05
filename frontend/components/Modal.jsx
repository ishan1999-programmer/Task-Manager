
const Modal = ({modal, setIsModal}) => {
  return (
    <div className='modal'>
        <button className="close-modal" onClick={()=>setIsModal("")}>X</button>
        <p className="modal-heading">{modal==="create" ? "Create a new task" : "Edit task"}</p>
        <div className="modal-input-box">
            <input type="text" />
            <button type='button'>{modal==="create" ? "Add" : "Save"}</button>
        </div>
    </div>
  )
}

export default Modal
