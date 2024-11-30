import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Form = () => {
  return (
    <div className="container p-5" >
      <div className="form-container" style={{
        border: '2px solid blue',
        padding: '10px',
        borderRadius: '5px'
      }}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Fue de tu agrado la atención y el servicio.</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder=" "
            style={{ backgroundColor: "rgb(56, 101, 250, 0.3)" }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">¿Que te gustaria que mejoremos?</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            style={{ backgroundColor: "rgb(56, 101, 250, 0.3)" }}
          />
          <div className="container d-flex  justify-content-end my-3">
            <button type="button" className="btn btn-primary">Enviar</button>
          </div>
        </div>
      </div>
    </div>
  );
};