import React, { useContext, useEffect, useState } from "react";
import ContactCard from "../component/contactCard.jsx";
import { Navbar } from "../component/navbar.jsx";
import { Context } from "../store/appContext";

export const Contacts = () => {
	const { store, actions } = useContext(Context);
	const [contactList, setContactList] = useState([]);

	
	useEffect(() => {
		actions.getContacts();
		console.log(store.contacts[0]);
	}, []);

	return (
		<div className="container mt-5">
		<Navbar/>	
		<ContactCard />
		<h5></h5>
		</div>
	)	
}
