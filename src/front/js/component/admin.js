import React from "react";
import { Navbar } from "../component/loginnavbar";
import foodimg from "../../img/food.png";
import othersimg from "../../img/others.png";
import "/src/front/styles/home.css";
import { Link } from "react-router-dom";

export const Admin = () => {
    return (
        <>
            <Navbar />
            <div className="adminmenu">

                <h1 className="text-center">Administración de Comedor</h1>
                <div className="d-flex flex-wrap justify-content-center align-items-center adminmenu">
                    <Link to={"/newMenu"} className="custom-link">
                        <div className="cardadmin m-4 p-3">
                            <h2 className="text-center">Añadir menú</h2>
                            <img className="menuadmin" src={foodimg} alt="Descripción de la imagen" />
                        </div>

                    </Link>

                    <Link to={"/newOptions"} className="custom-link">
                        <div className="cardadmin m-4 p-3">
                            <h2 className="text-center">Añadir otros</h2>
                            <img className="menuadmin2" src={othersimg} alt="Descripción de la imagen" />
                        </div>
                    </Link>


                </div>

            </div>

        </>
    )
}