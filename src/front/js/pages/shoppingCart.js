import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const ShoppingCart = () => {
	const { store, actions } = useContext(Context);
   return (
    <div  className="" style={{color: "#3865e5", backgroundColor:"white"}}>
        <h1>Lista de Compras</h1>
        <div className="listCart">

        </div>
        <div className="btn" >
            <button className="close">CERRAR</button>
            <button className="pay">PAGAR</button>
        </div>
         
    </div>
);

}



