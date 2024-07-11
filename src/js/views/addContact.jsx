import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import AddContactForm from "../component/addContactForm.jsx";

import "../../styles/demo.css";

export const AddContact = () => {
	
	return (
		<div className="container">
			
			<AddContactForm/>

			
			
			<div className="mx-5">
				<ul className="pagination justify-content-start">
					<li className="page-item">
					<Link className="page-link text-secondary" to="/contacts"><i className="fas fa-long-arrow-alt-left"></i><span className="mx-1"></span>Go back to Contacts</Link>
					</li>
				</ul>
			</div>

		</div>
	);
};
