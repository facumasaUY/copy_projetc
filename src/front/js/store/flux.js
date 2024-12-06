import axios from 'axios';

const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {


 mercadoPago: {},
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			pagoMercadoPago: async (total) => { 
				try { 
					const response = await fetch("https://crispy-rotary-phone-x59p57vpggwjfv5x5-3001.app.github.dev/api/preference", { 
						method:"POST",
						headers:{"Content-Type":"application/json"},
						body: JSON.stringify({total:total})
					 });
					const data = await response.json();
					console.log(data)
					setStore({mercadoPago: data})
					return true;
				} catch (error) { 
					console.error("Error al crear la preferencia:", error); 
				} 
			},

		
			

		},
		actions: {
			// Use getActions to call a function within a fuction
			signup: (user) => {
				const myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				

				const raw = JSON.stringify(user);

				const requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch(process.env.BACKEND_URL+"api/signup", requestOptions)
					.then((response) => response.json())
					.then((result) => console.log(result))
					.catch((error) => console.error(error));
			}


		}
	};
};

export default getState;
