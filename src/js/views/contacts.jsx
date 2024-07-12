import React, { useContext, useEffect, useState } from "react";
import ContactCard from "../component/contactCard.jsx";
import { Navbar } from "../component/navbar.jsx";
import { Context } from "../store/appContext";

export const Contacts = () => {
	const { store, actions } = useContext(Context);
	

	console.log(store.contacts[0]);
	

	return (
		<div className="container mt-5 pb-5">
		<Navbar/>

		{store.contacts.map((contact, index) => 
			<ContactCard id={contact.id} name={contact.name} phone={contact.phone} email={contact.email} address={contact.address} key={index}/>
		)}
		
		</div>
	)	
}
