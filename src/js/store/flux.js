const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
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
							setStore({ contacts: data.contacts })
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
						setStore({ contacts: data.contacts });
						console.log(data);
					}
				})
				.catch((error) => console.log(error));
			}


			
			
		}
	};
};

export default getState;
