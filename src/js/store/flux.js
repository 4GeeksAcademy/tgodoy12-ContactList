const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			selectedContact: {}
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			createSlug: () => {
					fetch('https://playground.4geeks.com/contact/agendas/tgodoy', {
						method: "POST",
						headers: {
							'Content-Type': 'application/json'
						}
					})
					.then((response) => {
						if(response.status === 201) {
							return response.json()
							
						}
						
					})
					.then((data) => console.log(data))
					.catch((error) => console.log(error));
			},
				
			getContacts: () => {
					fetch('https://playground.4geeks.com/contact/agendas/tgodoy/contacts')
					.then((response) => {
						if(response.status === 404) {
							getActions().createSlug();
						}
						return response.json();	
					})
					.then((data) => {
						console.log(data.contacts);
						setStore({ contacts: data.contacts });
					})
					.catch((error) => console.log(error));
			},
			
			createContact: (name, phone, email, address) => {
				const store = getStore();
				fetch('https://playground.4geeks.com/contact/agendas/tgodoy/contacts', 
					{
						method: "POST",
						body: JSON.stringify({
							"name": name,
							"phone": phone,
							"email": email,
							"address": address
						  }),
						headers: {
							'Content-Type': 'application/json'
					}	
						}
					) 
					.then((response) => {
						console.log(response);
						if(response.status === 201) {
							return response.json();
						}
					})
					.then((data) => {
						if(data) {
							setStore({ contacts: [...store.contacts, data] })
							console.log(data)
							
						}
					})
					.catch((error) => console.log(error))
			},
			deleteContact: (contactId) => {
				fetch(`https://playground.4geeks.com/contact/agendas/tgodoy/contacts/${contactId}`, {
					method: "DELETE"	
				})
				.then((response) => { 
					const store = getStore();
					if(response.status === 204) {
					console.log("entro el if 204");
					setStore({ contacts: store.contacts.filter(element => element.id !== contactId) })     
				}
		
				})
				.catch((error) => console.log(error))
			},
			updateContact: (contactId, name, phone, email, address) => {
				const store = getStore();
				fetch(`https://playground.4geeks.com/contact/agendas/tgodoy/contacts/${contactId}`, {
					method: "PUT",
					body: JSON.stringify({
						"name": name,
  						"phone": phone,
  						"email": email,
 						"address": address
					}),
					headers: {
						'Content-Type': 'application/json'
					}
				})
				.then((response) => {
					if(response.status === 200) {
						return response.json();
					}
				})
				.then((data) => {
					if(data) {

						const updatedArray = store.contacts.map((item) => {
							// console.log(item.id +" " + contactId)
							if(item.id == contactId) {
								return data;
							}
							return item;
						})

						
						console.log(store.selectedContact);
						setStore({ contacts: updatedArray });
						console.log(data);
					}
				})
				.catch((error) => console.log(error));
			},
			getContact: (contactId) => {
                const store = getStore();
                const contact = store.contacts.find(contact => contact.id === parseInt(contactId));
                setStore({ selectedContact: contact });
            }


			
			
		}
	};
};

export default getState;
