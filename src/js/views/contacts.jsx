import React from "react";
import ContactCard from "../component/contactCard.jsx";

import "../../styles/home.css";
import { Navbar } from "../component/navbar.jsx";

export const Contacts = () => {
	return (
		<div className="container mt-5">
		<Navbar/>	
		<ContactCard />

		</div>
	)	
}
