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

  const menuday2 = [
    {
      title: "Lunes",
      name: "Option 1",
      img: "https://images.mrcook.app/recipe-image/018f9b27-06a0-7deb-bc5d-b4ca97d2beb0",
    },
    {
      title: "Martes",
      name: "Option 2",
      img: "https://content.elmueble.com/medio/2024/10/03/pollo-a-la-plancha-con-verduras-al-pesto_a53bee68_241003155651_1200x1200.webp",
    },
    {
      title: "Miércoles",
      name: "Option 3",
      img: "https://content.elmueble.com/medio/2024/09/06/arroz-con-verduras_ab2a54ac_240906144446_1200x1200.jpg",
    },
    {
      title: "Jueves",
      name: "Option 4",
      img: "https://truffle-assets.tastemadecontent.net/cdn-cgi/image/width=360/a2f94f01-742_friedchickensalad_square2.jpg",
    },
    {
      title: "Viernes",
      name: "Option 5",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7n0A8vIS8MRwnHMZhX-MxS2W_L2b0-6g8Jw&s",
    },
    {
      title: "Sábado",
      name: "Option 6",
      img: "https://cdn0.recetasgratis.net/es/posts/8/9/0/ensalada_de_garbanzos_vegana_59098_600_square.jpg",
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
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">
            Anda FOOD</a>
          <form className="d-flex">
            <button className="btn btn-outline-primary " type="submit"><i className="fa-solid fa-cart-shopping"></i></button>
            <button type="button" className="btn btn-primary dropdown-toggle mx-1" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="fa-solid fa-bars"></i>
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li><a className="dropdown-item" href="#">a</a></li>
              <li><a className="dropdown-item" href="#">b</a></li>
            </ul>
          </form>
        </div>
      </nav >

      <div>
        <button className="btn btn-link me-3">
          <i className="bi bi-cart"></i>
        </button>
        <button className="btn btn-link">
          <i className="bi bi-list"></i>
        </button>
      </div>

      <div className="text-center mb-4">
        <button className="btn w-100" style={{
          fontFamily: "Mulish, sans-serif",
          "font-optical-sizing": "auto",
          "font-weight": "<weight>",
          "font-style": "normal",
          "color": "white",
          "backgroundColor": "rgb(56, 101, 229"
        }}>RESERVAR HORARIO</button>
        <button className="btn btn-link text-primary mt-2" style={{
          fontFamily: "Mulish, sans-serif",
          "font-optical-sizing": "auto",
          "font-weight": "<weight>",
          "font-style": "normal"
        }}>
          Ver horarios disponibles
        </button>
      </div>

      {/* menu del dia1 */}
      <div className="menudeldia" style={{ backgroundColor: "rgb(56, 101, 229, 0.3", "borderRadius": "10px", "overflow": "hidden", "marginBottom": "30px" }}>
        <div className="mb-5">
          <h2 className="text-center mb-5 text-light" style={{
            fontFamily: "Mulish, sans-serif",
            "font-optical-sizing": "auto",
            "font-weight": "<weight>",
            "font-style": "normal",
            "marginTop": "20px"
          }}>MENÚ DEL DÍA</h2>
          <div className="row">
            {menuday.map((item, index) => (
              <div key={index} className="col-12 col-md-4 mb-3">
                <div className="card h-100 mx-3" style={{ "borderRadius": "10px", "overflow": "hidden" }}>
                  <img
                    src={item.img}
                    className="card-img-top img-fluid"
                    alt={item.name}
                    style={{ objectFit: "cover", height: "300px" }}
                  />
                  <div className="card-body text-center">
                    <button className="btn  w-100" style={{
                      backgroundColor: "rgb(56, 101, 229", "color": "white",
                      fontFamily: "Mulish, sans-serif",
                      "font-optical-sizing": "auto",
                      "font-weight": "<weight>",
                      "font-style": "normal"
                    }}>Comprar</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* posible menu del dia2 */}
      <div className="menudeldia2" style={{ backgroundColor: "rgb(56, 101, 229, 0.3", "borderRadius": "10px", "overflow": "hidden", "marginTop": "30px" }}>
        <div className="mb-5">
          <h2 className="text-center mb-5 text-light" style={{
            fontFamily: "Mulish, sans-serif",
            "font-optical-sizing": "auto",
            "font-weight": "<weight>",
            "font-style": "normal",
            "marginTop": "20px"
          }}>MENÚ DE LA SEMANA</h2>
          <div className="row">
            {menuday2.map((item, index) => (
              <div key={index} className="col-12 col-md-4 mb-3">
                <div className="card h-100 mx-3" style={{ "borderRadius": "10px", "overflow": "hidden" }}>
                  <div
                    className="position-relative"
                    style={{
                      backgroundColor: "rgb(56, 101, 229",
                      color: "white",
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      textAlign: "center",
                      padding: "10px 0",
                      position: "absolute",
                      top: "0",
                      left: "0",
                      right: "0",
                      zIndex: 2,
                    }}
                  >
                    {item.title}
                  </div>

                  <img
                    src={item.img}
                    className="card-img-top img-fluid"
                    alt={item.name}
                    style={{ objectFit: "cover", height: "300px" }}
                  />
                  <div className="card-body text-center">
                    <button className="btn  w-100" style={{
                      backgroundColor: "rgb(56, 101, 229", "color": "white",
                      fontFamily: "Mulish, sans-serif",
                      "font-optical-sizing": "auto",
                      "font-weight": "<weight>",
                      "font-style": "normal"
                    }}>Comprar</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* otro menu */}
      <div className="">
        <h2 className="text-center mb-3" style={{
          fontFamily: "Mulish, sans-serif",
          "font-optical-sizing": "auto",
          "font-weight": "<weight>",
          "font-style": "normal"
        }}>OTRAS OPCIONES</h2>
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
    </div >
  );
};
 