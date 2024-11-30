import React, { useState } from "react"; 

export const Feedback = ({ initialRating = 0 }) => { 

  const [rating, setRating] = useState(initialRating); 

  const handleClickStar = (newRating) => {
    setRating(newRating); 
  };

  const starElements = []; 
  for (let i = 1; i <= 5; i++) { 
    const filled = i <= rating; 
    starElements.push(
      <span key={i} onClick={() => handleClickStar(i)}>
        {filled ? ( 
          <i className="fas fa-star " style={{ color:"blue"}}></i>
        ) : (
          <i className="far fa-star" style={{ color:"blue"}}></i>
        )}
      </span>
    );
  }

  return (
    <div className="container d-flex space-between m-3 justify-content-center">
      <div className="card " style={{ width: "18rem" , border: "2px solid blue" }}>
        <img
          src="https://jumboalacarta.com.ar/wp-content/uploads/2019/06/shutterstock_521741356-1024x684.jpg"
          className="card-img-top"
          alt="Plato de comida"
        />
        <div className="card-body border-primary">
          <h3 className="card-title text-primary">Ingredientes</h3>
		  <p>Pollo</p>
		  <p>Lechuga</p>
		  <p>Tomate</p>
		  <p>Palta</p>
          <p className="card-text">
            {starElements} {}
          </p>
        </div>
      </div>
    </div>
  );
};