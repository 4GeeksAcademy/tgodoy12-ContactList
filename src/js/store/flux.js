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
						// setStore({ contacts: data.contacts });
					})
					.catch((error) => console.log(error));
			},
			
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
