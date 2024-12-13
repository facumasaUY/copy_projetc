import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"

import "../../styles/home.css";
import homeImage from "../../img/home.png";
import Swal from 'sweetalert2'

export const RecuperarPassword = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate()
    const [aleatoria, setAleatoria] = useState("")
    const [nueva, setNueva] = useState("")
    const mensaje = (titulo) => {
        Swal.fire({
            icon: "error",
            title: "error de ingreso",
            text: titulo,

        })
    }
    const envio = async (e) => {
        e.preventDefault()
        if (contraseña == "") {
            mensaje("ingrese su contraseña enviada por email")
            return
        }

    }
    return (

        <div className="mt-5 mx-auto d-flex flex-wrap justify-content-center login" >

            <div className="text-center">
                <img className="loginimage" src={homeImage} alt="Descripción de la imagen" />
            </div>
            <form className="form content" style={{ width: "370px" }}>
                <h3>Reseteo de Contraseña</h3>
                <div className="mb-3">
                    <label className="form-label">Contraseña Enviada Por Email</label>
                    <input type="password" value={aleatoria} onChange={(e) => setAleatoria(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Ingrese su Nueva Contraseña</label>
                    <input type="password" value={nueva} onChange={(e) => setNueva(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="text-center">
                    <button type="button" onClick={(e) => envio(e)} className="btn btn-primary">
                        Resetear
                    </button>
                </div>

                <div className="text-center mt-2">
                    <Link to={"/register"}>
                        <p className="text-info">Registrarse</p>
                    </Link>
                </div>

            </form>
        </div>
    );
};

