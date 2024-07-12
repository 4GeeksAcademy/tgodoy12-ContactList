import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

const AddContactForm = () => {

    const {formValues, setFormValues} = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
    });

    const { store, actions } = useContext(Context);

    const readValues = (e) => {
        const { id, value } = e.target;
        setFormValues({
            ...formValues,
            [id]: value
        });
    }

    return (
        <div className="m-5">
            <h2 className="text-center">Add a new Contact</h2>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="name" onChange={readValues} value={formValues.name} placeholder="Full name"/>
            </div>
            <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input type="text" className="form-control" id="phone" onChange={readValues} value={formValues.phone} placeholder="Phone number"/>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="text" className="form-control" id="email" onChange={readValues} value={formValues.email} placeholder="Email"/>
            </div>
            <div className="mb-3">
                <label htmlFor="address" className="form-label">Address</label>
                <input type="text" className="form-control" id="address" onChange={readValues} value={formValues.address} placeholder="Address"/>
            </div>
            <div>
                <button type="submit" className="btn btn-primary col-md-12">Save</button>
            </div>
        </div>
    )
}

export default AddContactForm;