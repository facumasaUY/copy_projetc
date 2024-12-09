
import React, { useState, useEffect } from "react";

export const ViewMenu = () => {
    const [menus, setMenus] = useState([]);

    useEffect(() => {
        const fetchMenus = async () => {
            try {
                const response = await fetch(process.env.BACKEND_URL + 'api/menu');
                const data = await response.json();
                setMenus(data);
            } catch (error) {
                console.error("Error fetching menus:", error);
            }
        };

        fetchMenus();
    }, []);

    return (
        <div className="container">
            <h2>Menús Disponibles</h2>
            <div className="row">
                {menus.map((menu) => (
                    <div key={menu.id} className="col-md-4">
                        <div className="card">
                            <img src={menu.img} alt={menu.name} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{menu.name}</h5>
                                <p className="card-text">{menu.description}</p>
                                <p className="card-text"><strong>Precio:</strong> {menu.price}</p>
                                <p className="card-text"><strong>Día:</strong> {menu.day}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
