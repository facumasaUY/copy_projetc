import React, { useState, useContext } from "react"
import andalogofood from "../../img/anda.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; 
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import { Context } from "../store/appContext";

export const Payment = () => {

    const { actions, store } = useContext(Context);

    initMercadoPago('TEST-309ffaff-96ff-431f-a465-2b8b243d7054', { locale: "es-UY", });
    const [preferenceId, setPreferenceId] = useState(null)

    // const createPreference = async () => { 
    //     try { const response = await Axios.post("http://localhost:3000/create_preference", { 
    //         title: "Fideos con Salsa Boloñesa", 
    //         quantity: 1, 
    //         price: 100, }); 
    //         const { id } = response.data; 
    //         return id; } 
    //         catch (error) { console.log(error) } };

            const pagar = async () => {
                // const subtotal = 100; 
               const initPoint = await actions.pagoMercadoPago(2024);
                if (initPoint) {
                    let url = store.mercadoPago.init_point
                    window.location.href = url; // Redirige al cliente
                }
            };         

    // const handleCompra = async () => { const id = await createPreference(); if (id) { setPreferenceId(id); } }; 

    return (

    <div className="d-flex align-items-center justify-content-center" style={{backgroundColor: "rgba(56, 101, 229, 0.5)", borderRadius: "10px", padding: "15px", margin: "50px", height:"auto"}}>
        <button onClick={pagar}>Pagar con Mercado Pago</button>
    </div>

)}
     

      


    
    

//     {preferenceId && <Wallet initialization={{ preferenceId: preferenceId }} customization={{ texts: { valueProp: 'smart_option' } }} />}
//     <div id="wallet_container">
// <Wallet initialization={{ preferenceId: preferenceId }} customization={{ texts:{ valueProp: 'smart_option'}}} />
// </div>
// }
