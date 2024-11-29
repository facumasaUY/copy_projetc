import React from "react";

export const Menu = () => {
  const menuday = [
    {
      name: "Option 1",
      img: "https://images.mrcook.app/recipe-image/018f9b27-06a0-7deb-bc5d-b4ca97d2beb0",
    },
    {
      name: "Option 2",
      img: "https://content.elmueble.com/medio/2024/10/03/pollo-a-la-plancha-con-verduras-al-pesto_a53bee68_241003155651_1200x1200.webp",
    },
    {
      name: "Option 3",
      img: "https://content.elmueble.com/medio/2024/09/06/arroz-con-verduras_ab2a54ac_240906144446_1200x1200.jpg",
    },
  ];

  const anotheroptions = [
    {
      name: "Pollo frito con ensalada",
      price: "$340",
      img: "https://truffle-assets.tastemadecontent.net/cdn-cgi/image/width=360/a2f94f01-742_friedchickensalad_square2.jpg",
    },
    {
      name: "Ensalada Caprese",
      price: "$420",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7n0A8vIS8MRwnHMZhX-MxS2W_L2b0-6g8Jw&s",
    },
    {
      name: "Ravioles de ricota",
      price: "$350",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm1z85GRoIuGJXnYXRAJecso_h8JYmFJDVBwE-n1pXTv60LY2bionxMHeIevOtN7Lgqmo&usqp=CAU",
    },
    {
      name: "Pescado con puré",
      price: "$350",
      img: "https://acdn.mitiendanube.com/stores/001/215/401/products/merluza-rebozada-11-24b4592696822a7c8316884005616613-1024-1024.jpg",
    },
    {
      name: "Ensalada vegetariana",
      price: "$350",
      img: "https://cdn0.recetasgratis.net/es/posts/8/9/0/ensalada_de_garbanzos_vegana_59098_600_square.jpg",
    },
    {
      name: "Berenjena a la parmesana",
      price: "$350",
      img: "https://dietamediterranea.com/wp-content/uploads/2016/01/20160201-Berenjenas-con-parmesano.jpg",
    },
  ];

  return (
    <div className="container mt-3">
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand">
            Anda FOOD</a>
          <form class="d-flex">
            <button class="btn btn-outline-primary" type="submit"><i class="fa-solid fa-cart-shopping"></i></button>
          </form>
        </div>
      </nav>

      <div>
        <button className="btn btn-link me-3">
          <i className="bi bi-cart"></i>
        </button>
        <button className="btn btn-link">
          <i className="bi bi-list"></i>
        </button>
      </div>

      <div className="text-center mb-4">
        <button className="btn btn-primary w-100">RESERVAR HORARIO</button>
        <button className="btn btn-link text-primary mt-2">
          Ver horarios disponibles
        </button>
      </div>

      <div className="mb-5">
        <h2 className="text-center mb-3">MENÚ DEL DÍA</h2>
        <div className="row">
          {menuday.map((item, index) => (
            <div key={index} className="col-12 col-md-4 mb-3">
              <div className="card h-100">
                <img
                  src={item.img}
                  className="card-img-top img-fluid"
                  alt={item.name}
                />
                <div className="card-body text-center">
                  <button className="btn btn-primary w-100">Comprar</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-center mb-3">OTRAS OPCIONES</h2>
        <div className="row">
          {anotheroptions.map((item, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 mb-3">
              <div className="card h-100">
                <img
                  src={item.img}
                  className="card-img-top img-fluid"
                  alt={item.name}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="text-muted">{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
