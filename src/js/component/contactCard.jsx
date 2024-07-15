import React, {useContext, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import DeleteModal from "./deleteModal.jsx";


const ContactCard = (props) => {
    const { actions } = useContext(Context);
    const nav = useNavigate();
    const { theid } = useParams();
    const [showModal, setShowModal] = useState(false);



    const handleDelete = () => {
        setShowModal(true);
        // actions.deleteContact(props.id);
    }

    const handleEdit = () => {
        nav(`/update/${props.id}`);
    }


    return (
            
        <div className="card mb-3">
            <div className="row">
                <div className="col-md-2">
                <img src="https://picsum.photos/200" className="img-fluid rounded-start"/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h4 className="card-title pb-3">{props.name}</h4>    
                    <span className="text-secondary mx-3"><i className="fas fa-map-marker-alt"></i></span><span className="text-secondary">{props.address}</span><br />
                    <span className="text-secondary mx-3"><i className="fas fa-mobile-alt"></i></span><span className="text-secondary">{props.phone}</span><br />
                    <span className="text-secondary mx-3"><i className="fas fa-envelope fa-sm"></i></span><span className="text-secondary">{props.email}</span><br />            
                </div>
                </div>
                <div className="col-md-2">
                    <div className="mt-3 d-flex p-3 justify-content-center">
                        {/* edit */}
                        <div className="me-2"><button type="button" className="btn btn-outline-dark" onClick={handleEdit}><i className="fas fa-pen"></i></button></div>
                        {/* delete */}
                        <div className="ms-2"><button type="button" id={`deleteButton-${props.id}`} onClick={handleDelete} className="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target={`#deleteModal-${props.id}`}><i className="fas fa-trash-alt"></i></button></div>
                    </div>
                </div>
            </div>
            <DeleteModal id={props.id} name={props.name} show={showModal} onClose={() => setShowModal(false)}/>
        </div>
    )
}

export default ContactCard;