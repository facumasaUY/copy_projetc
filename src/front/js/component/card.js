import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Card = () => {
	return (
		<div className="container d-flex m-2">
			<div className="card" style={{"width": "18rem"}}>
				<img src="https://jumboalacarta.com.ar/wp-content/uploads/2019/06/shutterstock_521741356-1024x684.jpg" className="card-img-top" alt="Plato de comida"/>
					<div className="card-body">
						<h5 className="card-title">Ingredientes</h5>
						<p className="card-text"><i className="fa-regular fa-star"></i></p>
						<a href="#" className="btn btn-primary opa">Danos tu opinion</a>
					</div>
			</div>
		</div>
	);
};
