import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const ShoppingCart = () => {
	const { store, actions } = useContext(Context);
   return (
    <div id="listaDeCompras" className="text-center mt-5 mx-auto" style={{width:"370px"}}>
        <h1>Lista de Compras</h1>
        <div>

        </div>
        
         
    </div>
);

}



