import React from "react";
import { Link } from "react-router-dom";

const GoBack = () => {

    return (
        <div className="mx-5">
				<ul className="pagination justify-content-start">
					<li className="page-item">
					<Link className="page-link text-secondary" to="/contacts"><i className="fas fa-long-arrow-alt-left"></i><span className="mx-1"></span>Go back to Contacts</Link>
					</li>
				</ul>
			</div>
    );
}

export default GoBack;