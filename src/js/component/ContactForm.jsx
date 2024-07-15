import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate, useParams } from "react-router-dom";

const ContactForm = (props) => {

    const [nameValue, setNameValue] = useState("");
    const [phoneValue, setPhoneValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [addressValue, setAddressValue] = useState("");
    const nav = useNavigate();

    const { store, actions } = useContext(Context);

    // const submitForm = (e) => {
    //     console.log(nameValue, phoneValue, emailValue, addressValue);
    //     actions.createContact(nameValue, phoneValue, emailValue, addressValue);
        
    // }

    //test
    const { theid } = useParams();

    useEffect(() => {
        if (theid) {
            actions.getContact(theid);
        }else {
            setNameValue("");
            setPhoneValue("");
            setEmailValue("");
            setAddressValue("");
        }
    }, [theid]);

    useEffect(() => {
        if (store.selectedContact && theid) {
            setNameValue(store.selectedContact.name);
            setPhoneValue(store.selectedContact.phone);
            setEmailValue(store.selectedContact.email);
            setAddressValue(store.selectedContact.address);
        }
    }, [store.selectedContact]);

    const submitForm = (e) => {
        e.preventDefault();
        if (theid) {
            actions.updateContact(theid, nameValue, phoneValue, emailValue, addressValue);
            
        } else {
            actions.createContact(nameValue, phoneValue, emailValue, addressValue);
        }
        nav("/contacts");
        
    }
    //test


    return (
        <div className="m-5">
            <h2 className="text-center">{props.title}</h2>
            <form onSubmit={submitForm}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="name" onChange={(e) => setNameValue(e.target.value)} value={nameValue} placeholder="Full name"/>
            </div>
            <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input type="text" className="form-control" id="phone" onChange={(e) => setPhoneValue(e.target.value)} value={phoneValue} placeholder="Phone number"/>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="text" className="form-control" id="email" onChange={(e) => setEmailValue(e.target.value)} value={emailValue} placeholder="Email"/>
            </div>
            <div className="mb-3">
                <label htmlFor="address" className="form-label">Address</label>
                <input type="text" className="form-control" id="address" onChange={(e) => setAddressValue(e.target.value)} value={addressValue} placeholder="Address"/>
            </div>
            <div>
                <button type="submit" className="btn btn-primary col-md-12">Save</button>
            </div>
            </form>
        </div>
    );
}

export default ContactForm;