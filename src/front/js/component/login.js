import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import homeImage from "../../img/home.png";


export const Login = () => {
	const { store, actions } = useContext(Context);

	return (

		<div className="mt-5 mx-auto d-flex flex-wrap justify-content-center" >
			
			<div className="text-center">
			<img className="loginimage" src={homeImage} alt="Descripción de la imagen" />
			</div>
			<form className="form content" style={{ width: "370px" }}>
				<h1>Iniciar sesión</h1>
				<div className="mb-3">
					<label className="form-label">Correo electrónico</label>
					<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

				</div>
				<div className="mb-3">
					<label for="exampleInputPassword1" className="form-label">Contraseña</label>
					<input type="password" className="form-control" id="exampleInputPassword1" />
				</div>
				<div className="text-center">
					<button type="submit" className="btn btn-primary">Entrar</button>
				</div>

				<div className="text-center mt-2">
					<p>¿Olvidaste tu contraseña?</p>
				</div>

				<div className="text-center mt-2">
					<p className="text-info">Registrarse</p>
				</div>
			</form>
		</div>
	);
};