import React, { useContext } from "react";
import { Context } from "../store/appContext";

const DeleteModal = (props) => {
    const { actions } = useContext(Context);

    const handleDelete = () => {
        actions.deleteContact(props.id);
        // props.onClose();
    }

    return (
        <div className={`modal fade ${props.show ? 'show' : ''}`} id={`deleteModal-${props.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" style={{ display: props.show ? 'block' : 'none' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Delete contact</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={props.onClose}></button>
                </div>
                <div className="modal-body">
                    <p>Are you sure you want to delete {props.name} from your contacts?</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleDelete}>Yes</button>
                </div>
                </div>
            </div>
        </div>
    );
}

export default DeleteModal;