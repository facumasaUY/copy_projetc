import React from "react";
import { useNavigate } from "react-router-dom";

export const CardOption = ({ menu }) => {

    const navigate = useNavigate();

    const irAPayment = () => {
        navigate("/payment");
    };

    const handleClick = (item) => {
        
        console.log("Item seleccionado: ", item);
    };

    const handleNotificacion = () => {
        // Lógica para mostrar una notificación
        alert("¡Producto agregado!");
    };

    return (
        <div className="container my-4">
            <h1
                className="text-center mb-2"
                style={{
                    fontFamily: "Mulish, sans-serif",
                    color: "rgb(56, 101, 229)",
                }}
            >
                OTRAS OPCIONES
            </h1>
            <div
                className="d-flex justify-content-center flex-wrap gap-4"
                style={{ rowGap: "20px" }}
            >
                {menu.map((item) => (
                    <div
                        className="d-flex flex-column align-items-center"
                        key={item.id}
                        style={{ width: "150px" }}
                    >
                        <div
                            className="card"
                            style={{
                                width: "150px",
                                height: "150px",
                                borderRadius: "50%",
                                overflow: "hidden",
                            }}
                        >
                            <img
                                src={item.img}
                                className="card-img-top"
                                alt={item.name}
                                style={{
                                    objectFit: "cover",
                                    width: "100%",
                                    height: "100%",
                                }}
                            />
                        </div>
                        <div
                            className="text-center mt-2"
                            style={{
                                fontSize: "10px",
                                fontFamily: "Mulish, sans-serif",
                            }}
                        >
                            <h5
                                className="card-title"
                                style={{
                                    color: "rgb(56, 101, 229)",
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                }}
                            >
                                {item.name}
                            </h5>
                            <p
                                className="card-text m-2"
                                style={{
                                    fontWeight: "bold",
                                    fontSize: "15px",
                                }}
                            >
                                Precio: ${item.price}
                            </p>
                            <button
                                className="btn"
                                onClick={() => {
                                    handleClick(item);
                                    handleNotificacion();
                                }}
                                style={{
                                    backgroundColor: "rgb(56, 101, 229)",
                                    color: "white",
                                    fontSize: "0.8rem",
                                    borderRadius: "10px",
                                    padding: "5px 10px",
                                }}
                            >
                                <i className="fa-solid fa-cart-shopping"></i>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-4">
                <button
                    className="btn"
                    onClick={irAPayment}
                    style={{
                        backgroundColor: "rgb(56, 101, 229)",
                        color: "white",
                        fontSize: "1rem",
                        borderRadius: "10px",
                        padding: "10px 20px",
                    }}
                >
                    Ir a Pago
                </button>
            </div>
        </div>
    );
};
