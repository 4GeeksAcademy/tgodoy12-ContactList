import React, { useState, useEffect, useContext } from "react";
import GoBack from "../component/goBack.jsx";
import ContactForm from "../component/ContactForm.jsx";

import "../../styles/demo.css";

export const AddContact = () => {
	
	return (
		<div className="container">
			<ContactForm title="Add new contact"/>
			<GoBack />
		</div>
	);
};
