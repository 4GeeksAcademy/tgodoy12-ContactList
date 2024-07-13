import React, { useContext } from "react";
import ContactCard from "../component/contactCard.jsx";
import { Navbar } from "../component/navbar.jsx";
import { Context } from "../store/appContext";

export const Contacts = () => {
	const { store } = useContext(Context);

	return (
		<div className="container mt-5 pb-5">
			<Navbar/>

			{store.contacts.map((contact, index) => 
				<ContactCard id={contact.id} name={contact.name} phone={contact.phone} email={contact.email} address={contact.address} key={index}/>
			)}
		
		</div>
	)	
}
