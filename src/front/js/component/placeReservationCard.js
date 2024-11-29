import React from "react";

export const PlaceReservationCard = () => {
    return (
        <div className="d-flex flex-wrap">

            <div className="card rounded-5 my-2 py-2" style={{ width: "18rem", borderStyle: "solid", borderWidth: "4px", borderColor: "#3865E5" }}>
                <div className="card-body">
                <div className="">
                    <div className="d-flex justify-content-between">
                        <h5 className="card-title mb-3">Lunes</h5>
                        <p className="card-title mb-3">Hora: 13:00</p>
                    </div>
                    <p className="card-subtitle mb-2 text-body-secondary"><strong>Tienes reserva</strong></p>
                </div>
            
                    <p className="card-text text mb-3"><i>Lugares disponibles: 5</i></p>
                    <div className="border-top">
                        <p className="card-text text my-2"><i>Eliminar reserva</i></p>
                    </div>
                </div>
            </div>

            <div>
                <div className="btn-group my-2 mx-2">
                    <button className="btn btn-primary btn-sm dropdown-toggle px-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Seleccionar horario
                    </button>
                    <ul className="dropdown-menu">
                        <li><h6 className="dropdown-item my-0">11:30</h6></li>
                        <li><h6 className="dropdown-item my-0">12:00</h6></li>
                        <li><h6 className="dropdown-item my-0">12:30</h6></li>
                        <li><h6 className="dropdown-item my-0">13:00</h6></li>
                        <li><h6 className="dropdown-item my-0">13:30</h6></li>
                    </ul>
                </div>
            </div>





        </div>
    )
}
