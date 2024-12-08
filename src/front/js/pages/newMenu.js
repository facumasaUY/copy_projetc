import React, { useState } from "react";

export const NewMenu = () => {
    const [image, setImage] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(file);
        }
    };

    const [product, setProduct] = useState({
        day: "",
        name: "",
        description: "",
        price: ""
    });

    const handlePublish = async (event) => {
        event.preventDefault();
        console.log("Publish the new product", product, image);

        if (!product.day || !product.name || !product.description || !product.price || !image) {
            alert("Por favor, complete todos los campos y suba una imagen.");
            return;
        }
    

        const formData = new FormData();
        formData.append('day', product.day);
        formData.append('name', product.name);
        formData.append('description', product.description);
        formData.append('img', image);
        formData.append('price', product.price);

        const resp = await fetch(process.env.BACKEND_URL + 'api/menu', {
            method: 'POST',
            body: formData
        });
        

        if (!resp.ok) {
            alert('Failed to publish product');
        } else {
            const data = await resp.json();
            console.log(data);
            alert('Product Published');
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="col-md-8 col-lg-6 order-md-1 bg-light p-4 rounded">
                <h4 className="mt-5">MENÚ NUEVO</h4>
                <form className="needs-validation" noValidate onSubmit={handlePublish}>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="day">Día</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder=""
                                value={product.day}
                                required
                                onChange={(event) => setProduct({ ...product, day: event.target.value })}
                            />
                            <div className="invalid-feedback">Valid day is required.</div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="Name">Nombre del Menú</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder=""
                                value={product.name || ''}
                                required
                                onChange={(event) => setProduct({ ...product, name: event.target.value })}
                            />
                            <div className="invalid-feedback">Valid name is required.</div>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="description">Descripción del Menú</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            value={product.description || ''}
                            required
                            onChange={(event) => setProduct({ ...product, description: event.target.value })}
                        />
                        <div className="invalid-feedback">Description is required.</div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="price">Precio</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            value={product.price || ''}
                            required
                            onChange={(event) => setProduct({ ...product, price: event.target.value })}
                        />
                        <div className="invalid-feedback">Please enter a valid price.</div>
                    </div>

                    {!image && (
                        <div className="input-group mb-3">
                            <input
                                type="file"
                                className="form-control"
                                id="inputimage"
                                onChange={handleImageUpload}
                            />
                            <label className="input-group-text" htmlFor="inputimage">Upload</label>
                        </div>
                    )}

                    {image && (
                        <div className="col-12 my-2">
                            <img
                                src={URL.createObjectURL(image)}
                                alt="Preview"
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
                                Borrar
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
    );
};
