import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { PlaceReservationCard } from "../component/placeReservationCard";

export const PlaceReservations = () => {

    const navigate = useNavigate();
    const volver = () => {
        navigate(-1);
    };

    const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
    const [reservas, setReservas] = useState([]);

    const actualizarReserva = (dia, hora) => {
        setReservas((prev) => {
            const nuevaReserva = { dia, hora };
            const filtrado = prev.filter((reserva) => reserva.dia !== dia);
            return [...filtrado, nuevaReserva];
        });
    };

    
    const guardarReservas = async () => {
        const user = "UnUsuario"; // Cambiar esto!!! Preguntar a Samuel
            const response = await fetch("https://refactored-trout-gwx9vg7ggj7c994r-3001.app.github.dev/reservations", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(
                    reservas.map((reserva) => ({
                        user,
                        dia: reserva.dia,
                        hora: reserva.hora,
                    }))
                ),
            });
            if (response.ok) {
                alert("Reservas guardadas con éxito");
            } else {
                alert("Hubo un problema al guardar las reservas");
            }
    } 
    


    return (
        <div className="d-flex flex-column align-items-center mt-3" style={{ marginBottom: "20px", fontFamily: "Mulish, sans-serif" }}>

            <div className="d-flex align-items-center">
                <button className="btn btn-white" style={{ padding: '10px', marginLeft:'10px', marginRight: '30px', cursor: 'pointer', borderRadius:'25px', borderColor:'gray' }}
                    title="Volver al menú"
                    onClick={volver} 
                >
                    <div ClassName="d-flex flex-column">
                        Menú
                        <i className="fa-solid fa-arrow-left fa-xl ms-1"></i>
                    </div>
                </button>
                <h2 className="text-center" style={{ color: "rgb(56, 101, 229)"}}>RESERVAR LUGAR EN COMEDOR</h2>
                <button className="btn btn-white" style={{ padding: '10px', marginLeft:'10px', marginRight: '30px', cursor: 'pointer', borderRadius:'25px', borderColor:'green', backgroundColor:"lightgreen" }}
                    title="Guardar reserva"
                    onClick={guardarReservas}
                >
                    <div ClassName="d-flex flex-column">
                        Guardar
                    </div>
                </button>

            </div>
            {/* <img className="mt-4" src="https://lambdatres.com/wp-content/uploads/2011/12/mobiliario-zona-office-01.jpg" alt="..." style={{width:"40%"}}/> */}

            <div className="col-6 d-flex flex-wrap justify-content-center gap-3">
                {diasSemana.map((dia, index) => (
                    <PlaceReservationCard key={index} dia={dia} actualizarReserva={actualizarReserva} />
                ))}
            </div>

        </div>
    )
}

