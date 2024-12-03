import React from "react";
import { PlaceReservationCard } from "../component/placeReservationCard";

export const PlaceReservations= () => {

    const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]

    return (
        <div className="d-flex flex-column align-items-center mt-3">
            <h1 className="text-primary text-center">RESERVAR LUGAR EN COMEDOR</h1>
            {/* <img className="mt-4" src="https://lambdatres.com/wp-content/uploads/2011/12/mobiliario-zona-office-01.jpg" alt="..." style={{width:"40%"}}/> */}
            
            <div className="col-6 d-flex flex-wrap justify-content-center gap-3">
                {diasSemana.map((dia, index) => (
                    <PlaceReservationCard key={index} dia={dia} />
                ))}
            </div>

        </div>
    )
}

