import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../component/loginnavbar";

export const NewOption = () => {
    const [image, setImage] = useState(null);
    const [product, setProduct] = useState({
        name: "",
        price: ""
    });

    const navigate = useNavigate();

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(file);
        }
    };

    const handlePublish = async (event) => {
        event.preventDefault();

        if (!product.name || !product.price || !image) {
            alert("Por favor, complete todos los campos y suba una imagen.");
            return;
        }

        const formData = new FormData();
        formData.append('name', product.name);
        formData.append('img', image);
        formData.append('price', product.price);

        try {
            const resp = await fetch(process.env.BACKEND_URL + '/api/menuoptions', {
                method: 'POST',
                body: formData
            });

            if (!resp.ok) {
                alert('No se pudo publicar la opción. Intenta nuevamente.');
                return;
            }

            const data = await resp.json();
            console.log(data);
            alert('Opción publicada exitosamente.');

        
            navigate("/menu");
        } catch (error) {
            console.error("Error:", error);
            alert("Hubo un error al publicar la opción.");
        }
    };

    return (
        <>
        <Navbar/>
       
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="col-md-8 col-lg-6 order-md-1 bg-light p-4 rounded">
                <h4 className="mt-5">Otras Opciónes</h4>
                <form className="needs-validation" noValidate onSubmit={handlePublish}>
                    <div className="mb-3">
                        <label htmlFor="name">Opciónes</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder=""
                            value={product.name}
                            required
                            onChange={(event) => setProduct({ ...product, name: event.target.value })}
                        />
                        <div className="invalid-feedback">El nombre es obligatorio.</div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="price">Precio</label>
                        <input
                            type="number"
                            className="form-control"
                            id="price"
                            placeholder=""
                            value={product.price}
                            required
                            onChange={(event) => setProduct({ ...product, price: event.target.value })}
                        />
                        <div className="invalid-feedback">El precio es obligatorio.</div>
                    </div>

                    {!image && (
                        <div className="input-group mb-3">
                            <input
                                type="file"
                                className="form-control"
                                id="inputimage"
                                onChange={handleImageUpload}
                            />
                            <label className="input-group-text" htmlFor="inputimage">Subir Imagen</label>
                        </div>
                    )}

                    {image && (
                        <div className="col-12 my-2">
                            <img
                                src={URL.createObjectURL(image)}
                                alt="Vista previa"
                                className="img-thumbnail"
                                style={{ maxWidth: "200px", maxHeight: "200px", objectFit: "cover" }}
                            />
                        </div>
                    )}

                    {image && (
                        <div className="col-12 my-2">
                            <button
                                className="btn btn-danger"
                                type="button"
                                onClick={() => setImage(null)}
                            >
                                Borrar Imagen
                            </button>
                        </div>
                    )}

                    <div className="d-grid gap-2 mb-2">
                        <button className="btn btn-primary" type="submit">
                            Subir Menú
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </>
    );
};
