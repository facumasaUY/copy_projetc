import React from "react";
import { PlaceReservationCard } from "../component/placeReservationCard";

export const PlaceReservations= () => {
    return (
        <div className="d-flex flex-column align-items-center mt-3">
            <h1>RESERVA DE LUGAR</h1>
            {/* <img className="mt-4" src="https://lambdatres.com/wp-content/uploads/2011/12/mobiliario-zona-office-01.jpg" alt="..." style={{width:"40%"}}/> */}
            <PlaceReservationCard />
            <PlaceReservationCard />
            <PlaceReservationCard />
            <PlaceReservationCard />
            <PlaceReservationCard />
            <PlaceReservationCard />
        </div>
    )
}

