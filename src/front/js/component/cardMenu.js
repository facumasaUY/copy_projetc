import React from "react";

export const CardMenu = ({menu}) => {
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
                    {menu.price}
                </div>
                <div className="card-body text-center p-2">
                    <div className="d-flex justify-content-between">
                        <button
                            className="btn"
                            onClick={() => {
                                handleClick(menu);
                                handleNotificacion();
                            }}
                            style={{
                                backgroundColor: "rgb(56, 101, 229)",
                                color: "white",
                                fontSize: "12px",
                                borderRadius: "10px",
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
                            onClick={() => irAFeedback(item)}
                        >
                            ⭐
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
