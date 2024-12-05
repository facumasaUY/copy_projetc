import React, { useContext ,useState  } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import userRegisterImage from "../../img/user.webp";

export const Register = () => {
    const { store, actions } = useContext(Context);
	const [name,setName]=useState("")
    const [last_name,setLast_name]=useState("")
	const [email,setEmail]=useState("")
	const[password,setPassword]=useState("")

	const signup = async (e)=>{
     e.preventDefault()
	 let newUser = {
		name : name,
        last_name:last_name,
		email : email,
		password : password

	}
	let resp = await actions.signup(newUser)
	console.log(resp)
	}

    return (
        <div className="mx-auto" style={{ width: "350px" }}>
            <div className="text-center">
            <h1 className="text-center pt-4">Registrarse</h1>
            <img className="registeruser" src={userRegisterImage} alt="Descripción de la imagen" />
            </div>
          
            
            <div className="mb-2">
                <label className="form-label">Nombres</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}className="form-control" id="exampleFormControlInput1" placeholder="Nombre" />
            </div>
            <div className="mb-2">
                <label className="form-label">Apellidos</label>
                <input type="text" value={last_name} onChange={(e)=>setLast_name(e.target.value)}className="form-control" id="exampleFormControlInput1" placeholder="Apellido" />
            </div>
            <div className="mb-2">
                <label className="form-label">Correo electrónico</label>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="Email" />
            </div>
            <div className="mb-2">
                <label className="form-label">Número de funcionario</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="" />
            </div>
            <div className="mb-2">
                <label className="form-label">Contraseña</label>
                <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)}id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" />
                <span id="passwordHelpInline" className="form-text">
                    Debe contener de 8 a 20 caracteres.
                </span>
            </div>
            <div className="mb-3">
                <label className="form-label">Confirmar contraseña</label>
                <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" />
            </div>
            <div className="text-center mb-4">
					<button type="button" onClick={(event)=>signup(event)} className="btn btn-primary m-2">Registrarse</button>
                    <Link to="/">Login</Link>
            </div>



        </div>
    )
}
