import React from 'react';
import andalogofood from '../../img/andalogofood.png';

export const Profile = () => {

    return (
        <>
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
        </>
    )

}