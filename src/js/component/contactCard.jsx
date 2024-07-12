import React, {useContext, useEffect} from "react";
import { Context } from "../store/appContext";


const ContactCard = (props) => {
    // const { store } = useContext(Context);
    // console.log(store.contacts[0]); 
    
    // useEffect(() => {
	// 	actions.getContacts();
	// }, []);
    return (
            
        <div className="card mb-3">
            <div className="row g-0">
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
                    <div className="text-center mt-3">
                        <span>edit </span>
                        <span>delete</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactCard;