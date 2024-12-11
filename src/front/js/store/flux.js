import axios from 'axios';
const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            token: null,
            message: null,
            user: null,
            mercadoPago: {},
        },
        actions: {
            // Use getActions to call a function within a fuction
            pagoMercadoPago: async (total) => {
                try {
                    const response = await fetch(process.env.BACKEND_URL + "api/preference", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ total: total })
                    });
                    const data = await response.json();
                    console.log(data)
                    setStore({ mercadoPago: data })
                    return true;
                } catch (error) {
                    console.error("Error al crear la preferencia:", error);
                }
            },
            login: async (useNew) => {
                try {
                    const resp = await fetch(process.env.BACKEND_URL + "api/login", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(useNew)
                    })
                    console.log(resp.status)
                    const data = await resp.json()
                    if (resp.ok) {
                        console.log(data,"token")
                        setStore({user:data.user,token:data.access_token})
                        localStorage.setItem("access_token",data.access_token)
                        return true;
                    }
                    setStore({user:false})
                    return false
                } catch (error) {
                    console.log("Error loading message from backend", error)
                    setStore({user:false})
                    return false;
                }
            },
            signup: async (user) => {
                try {
                    // fetching data from the backend
                    const resp = await fetch(process.env.BACKEND_URL + "api/signup", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(user)
                    })
                    console.log(resp.status)
                    return true;
                } catch (error) {
                    console.log("Error loading message from backend", error)
                    return false;
                }
            },
        }
    };
};

export default getState