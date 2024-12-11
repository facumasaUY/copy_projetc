import React from 'react';
import andalogofood from '../../img/andalogofood.png';
import { Link } from 'react-router-dom';

const NavbarMenu = () => {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid d-flex justify-content-between align-items-center">
               

                <div className="flex-direction-column">
                    <Link to={"/improve-us"}>
                        <p><a className="link-opacity-10-hover m-2  " href="#">Déjanos tu comentario</a></p>
                    </Link>
                    <button className="btn m-1 " type="button" style={{ backgroundColor: "rgb(56, 101, 229)", "color": "white" }}
                        onClick={() => irAReservaDeLugar()}
                    >
                        Reserva de lugar
                    </button>
                    <button className="btn m-1  " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" style={{ "backgroundColor": "rgb(56, 101, 229)", "color": "white" }}>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title text-primary" id="offcanvasExampleLabel">Lista de Compras</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>


                            <div className="container-fluid d-flex justify-content-between align-items-center" >
                                <div className="dropdown">
                                    <a className="navbar-brand d-flex align-items-center dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src={andalogofood} alt="Anda Food Logo" style={{ width: "50px", height: "50px", marginRight: "10px", "borderRadius": "10px" }} />
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Mi cuenta</a></li>
                                        <li><a className="dropdown-item" href="#">Mis compras</a></li>
                                        <li><a className="dropdown-item" href="#">Cerrar Sesión</a></li>
                                    </ul>
                                </div>


                                {/* El carrito de compras */}

                                <div className="shoppingCart d-flex">

                                    {/* Boton de Carrito */}

                                    <div className="flex-direction-column">
                                        <Link to={"/form/:theid"}><p><a className="link-opacity-10-hover m-1  " href="#">Déjanos tu comentario</a></p></Link>

                                        <button className="btn m-1 " type="button" style={{ backgroundColor: "rgb(56, 101, 229)", "color": "white" }}
                                            onClick={() => irAReservaDeLugar()}
                                        >
                                            Reserva de lugar
                                        </button>
                                        <button className="btn m-1 " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" style={{ "backgroundColor": "rgb(56, 101, 229)", "color": "white" }}>
                                            <i className="fa-solid fa-cart-shopping"></i>
                                        </button>
                                    </div>

                                    {/* Ventana */}
                                    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">

                                        {/* Título */}
                                        <div className="offcanvas-header" style={{
                                            color: "white",
                                            backgroundColor: "#3865e5"
                                        }}>
                                            <h1>Carrito</h1>
                                        </div>

                                        {/* Body */}
                                        <div className="listCart offcanvas-body position-relative"
                                            style={{ backgroundColor: "rgb(56, 101, 229, 0.3)" }}
                                        >

                                            {spinner && (<div className="spinner-grow d-flex justify-content-center" role="status"
                                                style={{ backgroundColor: "#3865e5" }}
                                            >
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                            )}

                                            {listCart.length === 0 ? (
                                                <p>El carrito está vacío.</p>
                                            ) : (
                                                listCart.map((item, index) => (


                                                    <div key={index} className="d-flex align-items justify-content-evenly" style={{ backgroundColor: "white" }}>

                                                        <div className="foodImage d-flex justify-content-center align-items-center">
                                                            <img src={item.img} />
                                                        </div>

                                                        <div className="foodName d-flex justify-content-center align-items-center" style={{ color: "#3865e5" }}>
                                                            {item.name}
                                                        </div>

                                                        <div className="precioTotal d-flex justify-content-center align-items-center" style={{ color: "#3865e5" }}>
                                                            {item.price}
                                                        </div>

                                                        <div className="cantidad d-flex justify-content-center align-items-center">
                                                            <span className="menos" style={{
                                                                width: "30px",
                                                                height: "30px",
                                                                color: "white",
                                                                backgroundColor: "#3865e5",
                                                                borderRadius: "50%",
                                                                cursor: "pointer",
                                                                margin: "0 10px",
                                                                textAlign: "center"
                                                            }}>
                                                                {"<"}
                                                            </span>
                                                            <span>1</span>
                                                            <span className="mas" style={{
                                                                width: "30px",
                                                                height: "30px",
                                                                color: "white",
                                                                backgroundColor: "#3865e5",
                                                                borderRadius: "50%",
                                                                cursor: "pointer",
                                                                margin: "0 10px",
                                                                textAlign: "center"
                                                            }}>
                                                                {">"}
                                                            </span>
                                                        </div>

                                                    </div>)))}

                                            <div className="btn position-absolute bottom-0 start-0 end-0 d-flex justify-content-between" >
                                                <button type="button" className="close align-self-start" data-bs-dismiss="offcanvas" aria-label="Close">VOLVER</button>
                                                <button className="pay align-self-end" id="process-checkout" onClick={() => handleCompra()}>IR A PAGAR</button>
                                            </div>


                                        </div>



                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavbarMenu;