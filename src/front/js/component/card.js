import React, { useState } from "react"; 

export const Feedback = ({ initialRating = 0 , id,name,imageURL,description}) => { 

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
          <i className="fas fa-star " style={{ color:"gold"}}></i>
        ) : (
          <i className="far fa-star" style={{ color:"gold"}}></i>
        )}
      </span>
    );
  }

  return (
    <div className="container d-flex space-between m-3 justify-content-center">
      <div className="card " style={{ width: "18rem" , border: "2px solid blue" }}>
        <img
          src="https://cdn0.recetasgratis.net/es/posts/4/3/6/arroz_con_pollo_al_curry_28634_orig.jpg"
          // {imageURL + id} 
          className="card-img-top"
          alt={name}
        />
        <div className="card-body border-primary">
          <h3 className="card-title text-primary">Descripcion
            {description}</h3>
		  <p>Plato con enslada de quinoa ,verduras y pollo .</p>
		  
          <p className="card-text">
            {starElements} {}
          </p>
        </div>
      </div>
    </div>
  );
};