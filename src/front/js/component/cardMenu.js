// import React, { useState, useEffect } from "react";
// export const CardMenu = ({ menu }) => {
//     const [showModal, setShowModal] = useState(false);
//     const [rating, setRating] = useState(0);
//     const handleClickStar = (newRating) => {
//         setRating(newRating);
//     };
//     const starElements = [];
//     for (let i = 1; i <= 5; i++) {
//         const filled = i <= rating;
//         starElements.push(
//             <span key={i} onClick={() => handleClickStar(i)}>
//                 {filled ? (
//                     <i className="fas fa-star " style={{ color: "gold" }}></i>
//                 ) : (
//                     <i className="far fa-star" style={{ color: "gold" }}></i>
//                 )}
//             </span>
//         );
//     }
//     const toggleModal = () => {
//         setShowModal(!showModal);
//     };









//     return (
//         <>
//             <div key={menu.id} className="col-12 col-md-6 col-lg-4 mb-3">
//                 <div
//                     className="card mx-auto"
//                     style={{
//                         borderRadius: "10px",
//                         overflow: "hidden",
//                         width: "200px",
//                         height: "200px",
//                         border: "none",
//                         boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//                     }}
//                 >
//                     <div
//                         className="position-relative"
//                         style={{
//                             backgroundColor: "rgb(56, 101, 229)",
//                             color: "white",
//                             fontSize: "14px",
//                             fontWeight: "bold",
//                             textAlign: "center",
//                         }}
//                     >
//                         {menu.name}
//                     </div>
//                     <img
//                         src={menu.img}
//                         alt={menu.name}
//                         className="card-img-top img-fluid"
//                         style={{
//                             objectFit: "cover",
//                             height: "100px",
//                             width: "100%",
//                         }}
//                     />
//                     <div
//                         style={{
//                             fontWeight: "bold",
//                             fontSize: "14px",
//                             color: "rgb(56, 101, 229)",
//                             textAlign: "center",
//                             height: "120px",
//                         }}
//                     >
//                         ${menu.price}
//                     </div>
//                     <div className="card-body text-center p-2">
//                         <div className="d-flex justify-content-between">
//                             <button
//                                 className="btn"
//                                 onClick={() => {
//                                     handleClick(menu);
//                                     handleNotificacion();
//                                 }}
//                                 style={{
//                                     backgroundColor: "rgb(56, 101, 229)",
//                                     color: "white",
//                                     fontSize: "12px",
//                                     borderRadius: "10px",
//                                 }}
//                             >
//                                 Añadir al Carrito
//                             </button>
//                             <button
//                                 className="btn"
//                                 style={{
//                                     backgroundColor: "transparent",
//                                     fontSize: "20px",
//                                 }}
//                                 onClick={toggleModal}
//                             >
//                                 ⭐
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div
//                 className={`modal fade ${showModal ? "show" : ""}`}
//                 tabIndex="-1"
//                 aria-labelledby="exampleModalLabel"
//                 aria-hidden="true"
//                 style={{
//                     display: showModal ? "block" : "none",
//                 }}
//             >
//                 <div className="modal-dialog">
//                     <div className="modal-content">
//                         <div className="modal-header" style={{
//                             fontFamily: "Mulish, sans-serif",
//                             backgroundColor: "rgba(56, 101, 229,0.2)",
//                         }}>
//                             <h5 className="modal-title" id="exampleModalLabel" style={{ color: "rgba(56, 101, 229)"}}>
//                                 Descripción del Menú
//                             </h5>
//                             <button
//                                 type="button"
//                                 className="btn-close"
//                                 data-bs-dismiss="modal"
//                                 aria-label="Close"
//                                 onClick={toggleModal}
//                             ></button>
//                         </div>
//                         <div className="modal-body d-flex">
//                             <img
//                                 src={menu.img}
//                                 alt={menu.name}
//                                 className="img-fluid"
//                                 style={{
//                                     objectFit: "cover",
//                                     width: "200px",
//                                     height: "auto",
//                                     marginRight: "20px",
//                                 }}
//                             />
//                             <div>
//                                 <h5>{menu.name}</h5>
//                                 <p>Precio: ${menu.price}</p>
//                                 <p>Descripción: {menu.description}</p>
//                                 <div>{starElements}</div>
//                             </div>
//                         </div>
//                         <div className="modal-footer">
//                             <button
//                                 type="button"
//                                 className="btn"
//                                 data-bs-dismiss="modal"
//                                 onClick={toggleModal}
//                                 style={{ color: "rgb(56, 101, 229)" }}>
//                                 Cerrar
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div >
//         </>
//     );
// };






import React, { useState } from "react";

export const CardMenu = ({ menu }) => {
    const [showModal, setShowModal] = useState(false);
    const [rating, setRating] = useState(0); // Estado para almacenar la calificación (número de estrellas)
    const [selectedRating, setSelectedRating] = useState(0); // Estado para mostrar la calificación en el botón

    const handleClickStar = (newRating) => {
        setRating(newRating);
    };

    const starElements = [];
    for (let i = 1; i <= 5; i++) {
        const filled = i <= rating;
        starElements.push(
            <span key={i} onClick={() => handleClickStar(i)}>
                {filled ? (
                    <i className="fas fa-star" style={{ color: "gold" }}></i>
                ) : (
                    <i className="far fa-star" style={{ color: "gold" }}></i>
                )}
            </span>
        );
    }

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const handleCloseModal = () => {
        // Al cerrar el modal, actualizamos el botón con la calificación seleccionada
        setSelectedRating(rating);
        setShowModal(false);
    };

    return (
        <>
            <div key={menu.id} className="col-12 col-md-6 col-lg-4 mb-3">
                <div
                    className="card mx-auto"
                    style={{
                        borderRadius: "10px",
                        overflow: "hidden",
                        width: "200px",
                        height: "200px",
                        border: "none",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    }}
                >
                    <div
                        className="position-relative"
                        style={{
                            backgroundColor: "rgb(56, 101, 229)",
                            color: "white",
                            fontSize: "14px",
                            fontWeight: "bold",
                            textAlign: "center",
                        }}
                    >
                        {menu.name}
                    </div>
                    <img
                        src={menu.img}
                        alt={menu.name}
                        className="card-img-top img-fluid"
                        style={{
                            objectFit: "cover",
                            height: "100px",
                            width: "100%",
                        }}
                    />
                    <div
                        style={{
                            fontWeight: "bold",
                            fontSize: "14px",
                            color: "rgb(56, 101, 229)",
                            textAlign: "center",
                            height: "120px",
                        }}
                    >
                        ${menu.price}
                    </div>
                    <div className="card-body text-center p-2">
                        <div className="d-flex justify-content-between">
                            <button
                                className="btn"
                                onClick={() => {
                                    handleClick(menu);
                                    handleNotificacion();
                                }}
                                style={{
                                    backgroundColor: "rgb(56, 101, 229)",
                                    color: "white",
                                    fontSize: "12px",
                                    borderRadius: "10px",
                                }}
                            >
                                Añadir al Carrito
                            </button>
                            <button
                                className="btn"
                                style={{
                                    backgroundColor: "transparent",
                                    fontSize: "20px",
                                }}
                                onClick={toggleModal}
                            >
                                {selectedRating > 0 ? `${selectedRating} ⭐` : "⭐"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <div
                className={`modal fade ${showModal ? "show" : ""}`}
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                style={{
                    display: showModal ? "block" : "none",
                }}
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header" style={{
                            fontFamily: "Mulish, sans-serif",
                            backgroundColor: "rgba(56, 101, 229,0.2)",
                        }}>
                            <h5 className="modal-title" id="exampleModalLabel" style={{ color: "rgba(56, 101, 229)" }}>
                                Descripción del Menú
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                onClick={toggleModal}
                            ></button>
                        </div>
                        <div className="modal-body d-flex">
                            <img
                                src={menu.img}
                                alt={menu.name}
                                className="img-fluid"
                                style={{
                                    objectFit: "cover",
                                    width: "200px",
                                    height: "auto",
                                    marginRight: "20px",
                                }}
                            />
                            <div>
                                <h5>{menu.name}</h5>
                                <p>Precio: ${menu.price}</p>
                                <p>Descripción: {menu.description}</p>
                                <div>{starElements}</div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn"
                                data-bs-dismiss="modal"
                                onClick={handleCloseModal} // Llamamos a la función para cerrar y guardar la calificación
                                style={{ color: "rgb(56, 101, 229)" }}
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};