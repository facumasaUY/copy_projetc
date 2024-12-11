import React, { useState, useContext } from "react"
import andalogofood from "../../img/anda.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; 
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import { Context } from "../store/appContext";

export const Payment = () => {

    const { actions, store } = useContext(Context);

    initMercadoPago('APP_USR-95548522-114d-4404-9dfd-408bd646ee05', { locale: "es-UY", });
    const [preferenceId, setPreferenceId] = useState(null)


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


    <div className="d-flex justify-content-between" style={{backgroundColor: "rgba(56, 101, 229, 0.5)", borderRadius: "10px", padding: "15px", margin: "50px", height:"auto"}}>
       <div>
        <h1>Tu pedido:</h1>
        <ul>
            <li>Comida 1</li>
            <li>Comida 2</li>
            <li>Comida 3</li>
            <li>Comida 4</li>
        </ul>
       </div>
       
            <div d-flex align-items-center justify-content-center>
                <h1>Elegí tu forma de pago:</h1>
                <div>        
                    <button onClick={pagar}>Pagar con Mercado Pago</button>
                </div>
                <div className="ms-3">
                    <button>Pagar en Caja al Retirar</button>
                </div>
            </div>
    </div>
   

)}
     

      


    
    

//     {preferenceId && <Wallet initialization={{ preferenceId: preferenceId }} customization={{ texts: { valueProp: 'smart_option' } }} />}
//     <div id="wallet_container">
// <Wallet initialization={{ preferenceId: preferenceId }} customization={{ texts:{ valueProp: 'smart_option'}}} />
// </div>
// }
