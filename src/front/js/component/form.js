import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import "../../styles/home.css";
import salonComedor from "../../img/salonComedor.png";

export const Form = () => {

  const navigate = useNavigate();
  const volver = () => {
      navigate(-1);
  };

  return (
    
    <div className="container p-5 " >
      <h1 className="text-center">Tu opinion nos importa.</h1>
      <div className="d-flex justify-content-center align-items-center">
      <div>
        <img src={salonComedor}/>
      </div>
      <div className="form-container">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">¿Fue de tu agrado la atención y el servicio?</label>
          <input
            type="text"
            className="form-control input"
            id="exampleFormControlInput1"
            placeholder=" Dejanos tu comentario."
            
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">¿Que te gustaria que mejoremos?</label>
          <textarea
            className="form-control input"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder=" Danos tu aporte para seguir mejorando nuestros servicios."
            
          />
          <div className="container d-flex  justify-content-end my-3">
            <button type="button" className="btn btn-primary">Enviar</button>
            <button type="button"  onClick={volver}  className="btn btn-primary ms-2">Volver</button>

            
            
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};