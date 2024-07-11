import React from "react";

const ContactCard = () => {
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-2">
                <img src="https://picsum.photos/200" className="img-fluid rounded-start"/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">Full Name</h5>
                    <span className="text-secondary"><i className="fas fa-map-marker-alt"></i></span><span className="mx-3 text-secondary">address</span>
                    <span className="text-secondary"><i class="fas fa-mobile-alt"></i></span><span className="mx-3 text-secondary">phone</span>
                    <span className="text-secondary"><i className="fas fa-map-marker-alt fa-sm"></i></span><span className="mx-3 text-secondary">address</span>
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