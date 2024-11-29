import React, { useContext } from "react";
import { Context } from "../store/appContext";
import userRegisterImage from "../../img/user.webp";

export const Register = () => {
    return (
        <div className="mx-auto" style={{ width: "350px" }}>
            <div className="text-center">
            <h1 className="text-center pt-4">Registrarse</h1>
            <img className="registeruser" src={userRegisterImage} alt="Descripción de la imagen" />
            </div>
          
            
            <div className="mb-2">
                <label className="form-label">Primer nombre</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Nombre" />
            </div>
            <div className="mb-2">
                <label className="form-label">Apellido</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Apellido" />
            </div>
            <div className="mb-2">
                <label className="form-label">Correo electrónico</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" />
            </div>
            <div className="mb-2">
                <label className="form-label">Número de funcionario</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="" />
            </div>
            <div className="mb-2">
                <label className="form-label">Contraseña</label>
                <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" />
                <span id="passwordHelpInline" className="form-text">
                    Debe contener de 8 a 20 caracteres.
                </span>
            </div>
            <div className="mb-3">
                <label className="form-label">Confirmar contraseña</label>
                <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" />
            </div>
            <div className="text-center mb-4">
					<button type="submit" className="btn btn-primary">Registrarse</button>
			</div>



        </div>
    )
}
