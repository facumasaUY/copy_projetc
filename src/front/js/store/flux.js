import axios from 'axios';

const getState = ({ getStore, getActions, setStore }) => {
	
	const back = "http://localhost:3000"; // O la URL que uses para tu backend

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

		
			
		}
	};
};

export default getState;
