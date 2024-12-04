import React, { useState } from "react"
import andalogofood from "../../img/anda.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; 
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import { Axios } from "axios"

export const Menu = () => {
    const navigate = useNavigate();
     
    
    <div><h1>Hola Mundo</h1></div>
}
// initMercadoPago('TEST-309ffaff-96ff-431f-a465-2b8b243d7054',{
//     locale: "es-UY",
//   });

//   const [preferenceId, setPreferenceId] = useState(null)

//   const createPreference = async () => {
//     try {
//       const response = await Axios.post("http://localhost:3000/create_preference",{
//         title: "Fideos con Salsa Boloñesa",
//         quantity: 1,
//         price: 100,
//       });
//       const { id } = response.data;
//       return id;
//     } catch  (error) {
//       console.log(error)
//     }};

//     const handleCompra = async () => {
//         const id = await createPreference();
//         if (id){
//           setPreferenceId(id);
//         }
//       }; 
      


    
    

//     {preferenceId && <Wallet initialization={{ preferenceId: preferenceId }} customization={{ texts: { valueProp: 'smart_option' } }} />}
//     <div id="wallet_container">
// <Wallet initialization={{ preferenceId: preferenceId }} customization={{ texts:{ valueProp: 'smart_option'}}} />
// </div>
// }
