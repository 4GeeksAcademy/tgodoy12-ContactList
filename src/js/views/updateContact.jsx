import React from "react";
import ContactForm from "../component/ContactForm.jsx";
import GoBack from "../component/goBack.jsx";

const UpdateContact = () => {
    
    return (
        <div className="container">
            <ContactForm title="Update contact"/>
            <GoBack />
        </div>
        
    );   
}

export default UpdateContact;

