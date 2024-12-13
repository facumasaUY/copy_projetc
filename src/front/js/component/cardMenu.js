import React, { useState, useEffect, useContext, createContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const SelectedMenuData = createContext();

export const CardMenu = ({menu}) => {

    const [selectedMenu, setSelectedMenu] = useState(null);
    
    const { listCart, setListCart } = useContext(SelectedMenuData);

    const handleClick = (menu) => {
        setSelectedMenu(menu);
        setListCart([...listCart, menu]);
        console.log("Item seleccionado: ", menu);
      };
    
      const handleNotificacion = () => {
        alert("¡Producto agregado!");
      };

    
    
    const navigate = useNavigate();

    const irAFeedback = (menu) => {
        navigate(`/feedback/${menu.id}`, { state: menu });

      };

    return (
        <div key={menu.id} className="col-12 col-md-6 col-lg-4 mb-3">
            <div
                className="card mx-auto"
                style={{
                    borderRadius: "10px",
                    overflow: "hidden",
                    width: "200px",
                    height: "200px",
                    border: "none",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                }}
            >
                <div
                    className="position-relative"
                    style={{
                        backgroundColor: "rgb(56, 101, 229)",
                        color: "white",
                        fontSize: "14px",
                        fontWeight: "bold",
                        textAlign: "center",
                    }}
                >
                    {menu.name}
                </div>
                <img
                    src={menu.img}
                    alt={menu.name}
                    className="card-img-top img-fluid"
                    style={{
                        objectFit: "cover",
                        height: "100px",
                        width: "100%",
                    }}
                />
                <div
                    style={{
                        fontWeight: "bold",
                        fontSize: "14px",
                        color: "rgb(56, 101, 229)",
                        textAlign: "center",
                        height: "120px",
                    }}
                >
                    ${menu.price}
                </div>
                <div className="card-body text-center p-2">
                    <div className="d-flex justify-content-between">
                        <button
                            className="btn"
                            style={{
                                backgroundColor: "rgb(56, 101, 229)",
                                color: "white",
                                fontSize: "12px",
                                borderRadius: "10px",
                            }}
                            onClick={() => {
                                handleClick(menu);
                                handleNotificacion();
                            }}
                        >
                            Añadir al Carrito
                        </button>
                        <button
                            className="btn"
                            style={{
                                backgroundColor: "transparent",
                                fontSize: "20px",
                            }}
                            onClick={() => irAFeedback(menu)}
                        >
                            ⭐
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
