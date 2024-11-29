import React from "react";

export const Footer = () => (
	<footer
		className="footer mt-auto py-3 text-center"
		style={{
			"fontFamily": "Mulish, sans-serif",
			"width": "100%",
			"position": "relative",

		}}
	>
		<div className="card m-3 border border-warning">
			<div className="card-body">
				<h5 className="card-title">
					¡Nos encantaría leer tu opinión! <i className="fa-regular fa-face-smile"></i>
				</h5>
				<div className="mb-3">
					<textarea
						className="form-control"
						rows="3"
						placeholder="Escribe aquí..."
					></textarea>
					<div className="d-flex justify-content-end">
						<button type="button" className="btn btn-warning mt-3">
							Enviar
						</button>
					</div>
				</div>
			</div>
		</div>
		<p>Derechos reservados</p>
	</footer>
);
