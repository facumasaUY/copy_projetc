import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/shoppingCart.css";

export const ShoppingCart = () => {
	const { store, actions } = useContext(Context);
   return (
    <div  className="shoppingcart">
        <h1>Lista de Compras</h1>
        <div className="listCart">
            <div className="foodImage">
                <img src="https://images.mrcook.app/recipe-image/018f9b27-06a0-7deb-bc5d-b4ca97d2beb0"/>
            </div>
            <div className="foodName">
                NAME
            </div>
            <div className="precioTotal">
                $250
            </div>
            <div className="cantidad">
                <span className="menos">
                {"<"}
                </span>
                <span>1</span>
                <span className="mas">
                    {">"}
                    </span>
            </div>
        </div>
        <div className="btn" >
            <button className="close">CERRAR</button>
            <button className="pay">PAGAR</button>
        </div>
         
    </div>
);

}



