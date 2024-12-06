const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

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
