import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from 'react-router-dom';
import "../../styles/home.css";
import { Login } from "../component/login";

export const Home = () => {
    const { store, actions } = useContext(Context);

    const [product, setProduct] = useState([]);

    const getProducts = async () => {
        const resp = await fetch(process.env.BACKEND_URL + "api/newMenu");
        const data = await resp.json();
        setProduct(data);
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div>
            <Login />
            <h1>New Menu</h1>
            <div className="d-flex justify-content-center">
                {product.length > 0 ? (
                    product.map((prod, index) => {
                        return (
                            <div key={index} className="card" style={{ width: "18rem" }}>
                                <img src={prod.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{prod.name}</h5>
                                    <p className="card-text">{prod.description}</p>
                                    <a href="#" className="btn btn-primary">GO</a>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p>No products</p>
                )}
            </div>
        </div>
    );
};
