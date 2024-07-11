import React from "react";

const AddContactForm = () => {
    return (
        <div className="m-5">
            <h2 className="text-center">Add a new Contact</h2>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Full name"/>
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">Email</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Email"/>
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">Phone</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Phone number"/>
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">Address</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Address"/>
            </div>
            <div>
                <button type="submit" className="btn btn-primary col-md-12">Save</button>
            </div>
        </div>
    )
}

export default AddContactForm;