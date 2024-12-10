
import React, { useState, useEffect, useContext } from "react";
import andalogofood from "../../img/anda.png";
import "../../styles/shoppingCart.css";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import "/src/front/styles/home.css";
import { CardMenu } from "./cardMenu";


export const Menu = () => {

  const { actions, store } = useContext(Context)

  const navigate = useNavigate();


  const [quantity, setQuantity] = useState(1);

  const [listCart, setListCart] = useState([]);

  const [spinner, setSpinner] = useState(false);

  const [showNotification, setShowNotification] = useState(false);

  const [menus, setMenus] = useState([]);


  const mostrarNotificacion = () => {
    if (!showNotification) {
      console.log("Mostrando notificación...");
      setShowNotification(true);
      setTimeout(() => {
        console.log("Ocultando notificación...");
        setShowNotification(false);
      }, 2000);
    }
  };

  const handleNotificacion = () => {
    return mostrarNotificacion()
  }

  const handleClick = (item) => {
    setListCart((carritoActual) => {
      const existe = carritoActual.some((producto) => producto.id === item.id);
      if (!existe) {
        return [...carritoActual, item];
      }
      return carritoActual;
    });
  };


  const handleCompra = async () => {
    if (listCart.length === 0) {
      alert("El carrito está vacío. Por favor, añade productos antes de pagar.");
    } else {
      setSpinner(true)
      setTimeout(() => {
        setSpinner(false)
        irAPayment();
      }, 2000)
    }
  };

  const decrecer = () => {

  };

  const acrecentar = () => {

  };

  useEffect(() => {
   
    actions.getMenu("Lunes")
    actions.getMenu("Martes")
  }, []);



  const menuDay2 = {
    // LUNES: [
    //   { id: "lunes_1", name: "Opción 1", description: "Arroz con trozos de pollo y verduras.", img: "https://cdn0.recetasgratis.net/es/posts/4/3/6/arroz_con_pollo_al_curry_28634_orig.jpg", price: "$350" },
    //   { id: "Lunes_2", name: "Opción 2", description: "Ensalada de lechuga , tomate ,kiwi ,cebolla y rabanito", img: "https://www.nutrioli.com/wp-content/uploads/2016/06/Ensalada-de-lechugas-frutas-y-nuez-de-la-india-2.jpg", price: "$350" },
    //   { id: "lunes_3", name: "Opción 3", description: "Albondigas de carne con salsa picante", img: "https://www.lacocinadelila.com/wp-content/uploads/2021/01/albondigas-de-pollo-600x450.jpg", price: "$350" },
    // ],
    // MARTES: [
    //   { id: "Martes_1", name: "Opción 1", description: "Churrasco de pollo con ensalada de coliflor ,zanahoria y esparragos", img: "https://content.elmueble.com/medio/2024/10/03/pollo-a-la-plancha-con-verduras-al-pesto_a53bee68_241003155651_1200x1200.webp", price: "$350" },
    //   { id: "Martes_2", name: "Opción 2", description: "Ensalda de coliflor ,repollo ,acelga ,zanahoria y queso rallado ", img: "https://upload.wikimedia.org/wikipedia/commons/2/23/Caesar_salad_%282%29.jpg", price: "$350" },
    //   { id: "Martes_3", name: "Opción 3", description: "Panchos con panceta ahumada morron picadito y salsa ahumada", img: "https://sinreservas.com.ar/download/multimedia.normal.97a15526e9be66bf.53616e7a61727520283130295f6e6f726d616c2e77656270.webp", price: "$350" },
    // ],
    // MIÉRCOLES: [
    //   { id: "Miércoles_1", name: "Opción 1", description: "Sopa crema de zapallo ,zanahoria, cebolla, morron y remolacha", img: "https://www.deliciosi.com/images/300/378/crema-de-calabaza.jpg", price: "$350" },
    //   { id: "Miércoles_2", name: "Opción 2", description: "Cazuela de matambre con porotos y verudras", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnrVXtOErESITNnhn9MJMOptSFBKsEPA-9QA&s", price: "$300" },
    //   { id: "Miércoles_3", name: "Opción 3", description: "Arroz primavera con choclo ,zanahoria ,arveja y tomate", img: "https://content.elmueble.com/medio/2024/09/06/arroz-con-verduras_ab2a54ac_240906144446_1200x1200.jpg", price: "$250" },
    // ],
    // JUEVES: [
    //   { id: "Jueves_1", name: "Opción 1", description: "Milanesa de berenjena a la napolitana", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeL6NmTbnojfQnaiMnYoLpiNqzOYnkNMBQHA&s", price: "$350" },
    //   { id: "Jueves_2", name: "Opción 2", description: "Carne de cerdo con lechuga,zanahoria y rabanito", img: "https://truffle-assets.tastemadecontent.net/cdn-cgi/image/width=360/a2f94f01-742_friedchickensalad_square2.jpg", price: "$350" },
    //   { id: "Jueves_3", name: "Opción 3", description: "Tallarines con tuco de carne picada", img: "https://www.frutamare.com/wp-content/uploads/2021/04/pasta-a-la-bolonesa.jpg", price: "$300" },
    // ],
    // VIERNES: [
    //   { id: "Viernes_1", name: "Opción 1", description: "Ensalda de tomate , rucula y queso", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7n0A8vIS8MRwnHMZhX-MxS2W_L2b0-6g8Jw&s", price: "$350" },
    //   { id: "Viernes_2", name: "Opción 2", description: "Milanesa de pescado con papas fritas", img: "https://img.freepik.com/fotos-premium/weiner-schnitzel-empanado-casero-papas-fritas-pollo-frito-papas-fritas-estilo-comida-europea_1339-152591.jpg", price: "$250" },
    //   { id: "Viernes_3", name: "Opción 3", description: "Sorrentinos de calabza con salsa 4 quesos", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcpQ3KilaPlZwatN49TzcFTRwbDXQ-VFWsx_tScOJkHuh7zyh8_rIVvc-r72wM6whCNfc&usqp=CAU", price: "$200" },
    // ],
    // SÁBADO: [
    //   { id: "Sábado_1", name: "Opción 1", description: "Ensalda de garbanzos, tomate , brocoli y esparragos", img: "https://cdn0.recetasgratis.net/es/posts/8/9/0/ensalada_de_garbanzos_vegana_59098_600_square.jpg", price: "$350" },
    //   { id: "Sábado_2", name: "Opción 2", description: "Pastel de canre con salsa blanca ", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPnXJcdnE2L04D4PAB0py1DthQJoctIfVfUw&s", price: "$300" },
    //   { id: "Sábado_3", name: "Opción 3", description: "Brochet de verduras con carne de cerdo ", img: "https://i.pinimg.com/736x/bf/cf/ce/bfcfce36554e902259cbcad00169a51c.jpg", price: "$350" },
    // ]
  };

  const anotheroptions = [
    {
      id: 1,
      name: "Coca-Cola Común",
      img: "https://i.pinimg.com/736x/cc/8e/3c/cc8e3cb0ff29ae7c19499124dfea1196.jpg",
      price: 62,
    },
    {
      id: 2,
      name: "Coca-Cola Light",
      img: "https://i.pinimg.com/736x/c2/f6/92/c2f692861075c7bbcd97ec594962222d.jpg",
      price: 62,
    },
    {
      id: 3,
      name: "Coca-Cola Zero",
      img: "https://i.pinimg.com/736x/a1/5e/ab/a15eab3e7c4f254c5b0701d007992599.jpg",
      price: 62,
    },
    {
      id: 4,
      name: "Agua Salus",
      img: "https://molinoagranel.com.uy/wp-content/uploads/2023/06/agua-mineral-salus-600-ml.jpg",
      price: 42,
    },
    {
      id: 5,
      name: "Manzanas",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiCLdNje1XoCGFCNiRhbZwFq8ZPJaIY6Xf-Q&s",
      price: "15 c/u",
    },
    {
      id: 6,
      name: "Naranjas",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBy2uSUuJbO0wEsgICk3ovc0utf9QibCkMXw&s",
      price: "15 c/u",
    },
  ];


  const irAFeedback = (item) => {
    navigate(`/feedback/${item.id}`, { state: item });
  };

  const irAReservaDeLugar = () => {
    navigate("/reservations");
  };

  const irAPayment = () => {
    navigate("/payment");
  };
//Sacar el menuNavbar para otro componente.
  const MenuNavbar = (props) => {
    return (
      <nav className="navbar bg-body-tertiary">

        <div className="container-fluid d-flex justify-content-between align-items-center" >
          <div className="dropdown">
            <a className="navbar-brand d-flex align-items-center dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img src={andalogofood} alt="Anda Food Logo" style={{ width: "50px", height: "50px", marginRight: "10px", "borderRadius": "10px" }} />
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Mi cuenta</a></li>
              <li><a className="dropdown-item" href="#">Mis compras</a></li>
              <li><a className="dropdown-item" href="#">Cerrar Sesión</a></li>
            </ul>
          </div>


          {/* El carrito de compras */}

          <div className="shoppingCart d-flex">

            {/* Boton de Carrito */}

            <div className="flex-direction-column">
              <Link to={"/form/:theid"}><p><a className="link-opacity-10-hover m-1  " href="#">Déjanos tu comentario</a></p></Link>

              <button className="btn m-1 " type="button" style={{ backgroundColor: "rgb(56, 101, 229)", "color": "white" }}
                onClick={() => irAReservaDeLugar()}
              >
                Reserva de lugar
              </button>
              <button className="btn m-1 " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" style={{ "backgroundColor": "rgb(56, 101, 229)", "color": "white" }}>
                <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>

            {/* Ventana */}
            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">

              {/* Título */}
              <div className="offcanvas-header" style={{
                color: "white",
                backgroundColor: "#3865e5"
              }}>
                <h1>Carrito</h1>
              </div>

              {/* Body */}
              <div className="listCart offcanvas-body position-relative" style={{ backgroundColor: "rgb(56, 101, 229, 0.3)" }}>

                {props.spinner && (<div className="spinner-grow d-flex justify-content-center" role="status" style={{ backgroundColor: "#3865e5" }}>
                  <span className="visually-hidden">Loading...</span>
                </div>)}

                {listCart.length === 0 ? (
                  <p>El carrito está vacío.</p>
                ) : (
                  listCart.map((item, index) => (


                    <div key={index} className="d-flex align-items justify-content-evenly" style={{ backgroundColor: "white" }}>

                      <div className="foodImage d-flex justify-content-center align-items-center">
                        <img src={item.img} />
                      </div>

                      <div className="foodName d-flex justify-content-center align-items-center" style={{ color: "#3865e5" }}>
                        {item.name}
                      </div>

                      <div className="precioTotal d-flex justify-content-center align-items-center" style={{ color: "#3865e5" }}>
                        {item.price}
                      </div>

                      <div className="cantidad d-flex justify-content-center align-items-center">
                        <span className="menos" style={{
                          width: "30px",
                          height: "30px",
                          color: "white",
                          backgroundColor: "#3865e5",
                          borderRadius: "50%",
                          cursor: "pointer",
                          margin: "0 10px",
                          textAlign: "center"
                        }}>
                          {"<"}
                        </span>
                        <span>1</span>
                        <span className="mas" style={{
                          width: "30px",
                          height: "30px",
                          color: "white",
                          backgroundColor: "#3865e5",
                          borderRadius: "50%",
                          cursor: "pointer",
                          margin: "0 10px",
                          textAlign: "center"
                        }}>
                          {">"}
                        </span>
                      </div>

                    </div>)))}

                <div className="btn position-absolute bottom-0 start-0 end-0 d-flex justify-content-between" >
                  <button type="button" className="close align-self-start" data-bs-dismiss="offcanvas" aria-label="Close">VOLVER</button>
                  <button className="pay align-self-end" id="process-checkout" onClick={() => handleCompra()}>IR A PAGAR</button>
                </div>


              </div>



            </div>

          </div>
        </div>
      </nav>
    )
  };


  return (<div className="container mt-3">

    <MenuNavbar spinner={spinner} />

    {/* Menu del dia */}
    <div className="menudeldia2 mt-3" style={{ marginBottom: "20px", fontFamily: "Mulish, sans-serif" }}>
      <div className="mb-5">
        <h2 className="text-center" style={{ color: "rgb(56, 101, 229)" }}>MENÚ DE LA SEMANA</h2>
        <div className="row">
          {store.menuLunes.map((menu) => (
            <CardMenu
            key={menu.id}
            menu={menu}
            />
          ))}
        </div>
      </div>
    </div>
    <div className="menudeldia2 mt-3" style={{ marginBottom: "20px", fontFamily: "Mulish, sans-serif" }}>
      <div className="mb-5">
        <h2 className="text-center" style={{ color: "rgb(56, 101, 229)" }}>MENÚ DE LA SEMANA</h2>
        <div className="row">
          {store.menuMartes.map((menu) => (
 
            <CardMenu
            key={menu.id}
            menu={menu}
            />
          ))}
        </div>
      </div>
    </div>



    {/* Notificación */}


    {showNotification && (
      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div
          id="liveToast"
          className="toast show" // Clase 'show' para que sea visible
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header" style={{ backgroundColor: "rgb(56, 101, 229)", color: "white" }}>
            <strong className="me-auto">Notificación</strong>
          </div>
          <div className="toast-body">
            ¡Producto agregado al carrito correctamente!
          </div>
        </div>
      </div>
    )}

    {/* Otras opciones */}
    <div className="container my-4">
      <h1
        className="text-center mb-2"
        style={{
          fontFamily: "Mulish, sans-serif",
          color: "rgb(56, 101, 229)",
        }}
      >
        OTRAS OPCIONES
      </h1>
      <div
        className="d-flex justify-content-center flex-wrap gap-4"
        style={{ rowGap: "20px" }}
      >
        {anotheroptions.map((item) => (
          <div
            className="d-flex flex-column align-items-center"
            key={item.id}
            style={{ width: "150px" }}
          >
            <div
              className="card"
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                overflow: "hidden",
              }}
            >
              <img
                src={item.img}
                className="card-img-top"
                alt={item.name}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
            <div
              className="text-center mt-2"
              style={{
                fontSize: "10px",
                fontFamily: "Mulish, sans-serif",
              }}
            >
              <h5
                className="card-title"
                style={{
                  color: "rgb(56, 101, 229)",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                }}
              >
                {item.name}
              </h5>
              <p
                className="card-text m-2"
                style={{
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                Precio: ${item.price}
              </p>
              <button
                className="btn " onClick={() => { handleClick(item); handleNotificacion() }}
                style={{
                  backgroundColor: "rgb(56, 101, 229)",
                  color: "white",
                  fontSize: "0.8rem",
                  borderRadius: "10px",
                  padding: "5px 10px",
                }}
              >
                <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

  );
};