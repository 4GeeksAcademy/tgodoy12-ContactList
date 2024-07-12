import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

const AddContactForm = () => {

    const [nameValue, setNameValue] = useState("");
    const [phoneValue, setPhoneValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [addressValue, setAddressValue] = useState("");

    const { store, actions } = useContext(Context);

    const submitForm = (e) => {
        console.log(nameValue, phoneValue, emailValue, addressValue);
        actions.createContact(nameValue, phoneValue, emailValue, addressValue);
    }

    return (
        <div className="m-5">
            <h2 className="text-center">Add a new Contact</h2>
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

export default AddContactForm;