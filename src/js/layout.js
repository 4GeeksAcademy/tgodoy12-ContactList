import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Contacts } from "./views/contacts.jsx";
import { AddContact } from "./views/addContact.jsx";
import injectContext from "./store/appContext";
import UpdateContact from "./views/updateContact.jsx";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					
					<Routes>
						<Route path="/" element={<Contacts />} />
						<Route path="/contacts" element={<Contacts />} />
						<Route path="/add-contact" element={<AddContact />} />
						<Route path="/update/:theid" element={<UpdateContact />} />	
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
