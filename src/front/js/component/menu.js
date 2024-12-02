import React, { useState } from "react";
import andalogofood from "../../img/anda.png";import "../../styles/shoppingCart.css";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import { Axios } from "axios"

export const Menu = () => {

    initMercadoPago('TEST-309ffaff-96ff-431f-a465-2b8b243d7054',{
      locale: "es-UY",
    });
  
    const [preferenceId, setPreferenceId] = useState(null)
  
    const [listCart, setListCart] = useState([]);
  
    const [showNotification, setShowNotification] = useState(false)


    {/*VER EN CLASE CON SAMUEL, EL CONSOLE LOG FUNCA PERO NO APARECE LA NOTIFICACION*/}
    const mostrarNotificacion = () => {
      if (!showNotification) { 
        console.log("Mostrando notificación...");
        setShowNotification(true);
        setTimeout(() => {
          console.log("Ocultando notificación...");
          setShowNotification(false);
        }, 3000);
      }
      return (<div>{showNotification && 
        <div class="toast-container position-fixed bottom-0 end-0 p-3">
        <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <img src="..." class="rounded me-2" alt="..."/>
            <strong class="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            Hello, world! This is a toast message.
          </div>
        </div>
      </div>
      }</div>)
    };

    const handleNotificacion = () =>{
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
  
    const createPreference = async () => {
      try {
        const response = await Axios.post("http://localhost:3000/create_preference",{
          title: "Fideos con Salsa Boloñesa",
          quantity: 1,
          price: 100,
        });
        const { id } = response.data;
        return id;
      } catch  (error) {
        console.log(error)
      }};
  
    const handleCompra = async () => {
      if (listCart.length === 0) {
        alert("El carrito está vacío. Por favor, añade productos antes de pagar.");
        return
      }
      const id = await createPreference();
      if (id){
        setPreferenceId(id);
      }
    };  

  const menuDay2 = {

    LUNES: [
      { id: "lunes_1", name: "Opción 1", img: "https://cdn0.recetasgratis.net/es/posts/4/3/6/arroz_con_pollo_al_curry_28634_orig.jpg", price: "$350" },
      { id: "Lunes_2", name: "Opción 2", img: "https://www.nutrioli.com/wp-content/uploads/2016/06/Ensalada-de-lechugas-frutas-y-nuez-de-la-india-2.jpg", price: "$350" },
      { id: "lunes_3", name: "Opción 3", img: "https://www.lacocinadelila.com/wp-content/uploads/2021/01/albondigas-de-pollo-600x450.jpg", price: "$350" },
    ],
    MARTES: [
      { id: "Martes_1", name: "Opción 1", img: "https://content.elmueble.com/medio/2024/10/03/pollo-a-la-plancha-con-verduras-al-pesto_a53bee68_241003155651_1200x1200.webp", price: "$350" },
      { id: "Martes_2", name: "Opción 2", img: "https://upload.wikimedia.org/wikipedia/commons/2/23/Caesar_salad_%282%29.jpg", price: "$350" },
      { id: "Martes_3", name: "Opción 3", img: "https://sinreservas.com.ar/download/multimedia.normal.97a15526e9be66bf.53616e7a61727520283130295f6e6f726d616c2e77656270.webp", price: "$350" },
    ],
    MIÉRCOLES: [
      { id: "Miércoles_1", name: "Opción 1", img: "https://www.deliciosi.com/images/300/378/crema-de-calabaza.jpg", price: "$350" },
      { id: "Miércoles_2", name: "Opción 2", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnrVXtOErESITNnhn9MJMOptSFBKsEPA-9QA&s", price: "$300" },
      { id: "Miércoles_3", name: "Opción 3", img: "https://content.elmueble.com/medio/2024/09/06/arroz-con-verduras_ab2a54ac_240906144446_1200x1200.jpg", price: "$250" },
    ],
    JUEVES: [
      { id: "Jueves_1", name: "Opción 1", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeL6NmTbnojfQnaiMnYoLpiNqzOYnkNMBQHA&s", price: "$350" },
      { id: "Jueves_2", name: "Opción 2", img: "https://truffle-assets.tastemadecontent.net/cdn-cgi/image/width=360/a2f94f01-742_friedchickensalad_square2.jpg", price: "$350" },
      { id: "Jueves_3", name: "Opción 3", img: "https://www.frutamare.com/wp-content/uploads/2021/04/pasta-a-la-bolonesa.jpg", price: "$300" },
    ],
    VIERNES: [
      { id: "Viernes_1", name: "Opción 1", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7n0A8vIS8MRwnHMZhX-MxS2W_L2b0-6g8Jw&s", price: "$350" },
      { id: "Viernes_2", name: "Opción 2", img: "https://img.freepik.com/fotos-premium/weiner-schnitzel-empanado-casero-papas-fritas-pollo-frito-papas-fritas-estilo-comida-europea_1339-152591.jpg", price: "$250" },
      { id: "Viernes_3", name: "Opción 3", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcpQ3KilaPlZwatN49TzcFTRwbDXQ-VFWsx_tScOJkHuh7zyh8_rIVvc-r72wM6whCNfc&usqp=CAU", price: "$200" },
    ],
    SÁBADO: [
      { id: "Sábado_1", name: "Opción 1", img: "https://cdn0.recetasgratis.net/es/posts/8/9/0/ensalada_de_garbanzos_vegana_59098_600_square.jpg", price: "$350" },
      { id: "Sábado_2", name: "Opción 2", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPnXJcdnE2L04D4PAB0py1DthQJoctIfVfUw&s", price: "$300" },
      { id: "Sábado_3", name: "Opción 3", img: "https://i.pinimg.com/736x/bf/cf/ce/bfcfce36554e902259cbcad00169a51c.jpg", price: "$350" },
    ],
  };

  return (
    <div className="container mt-3">
      <nav className="navbar bg-body-tertiary">

        <div className="container-fluid d-flex justify-content-between align-items-center" >
          <a className="navbar-brand d-flex align-items-center">
            <img src={andalogofood} alt="Anda Food Logo" style={{ width: "50px", height: "50px", marginRight: "10px", "borderRadius": "10px" }} />
          </a>


          {/* El carrito de compras */}

          <div className="shoppingCart d-flex">

            {/* Boton de Carrito */}
            <button className="btn m-1 " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" style={{ "backgroundColor": "rgb(56, 101, 229)", "color": "white" }}>
              <i className="fa-solid fa-cart-shopping"></i>
            </button>

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
                  {preferenceId && <Wallet initialization={{ preferenceId: preferenceId }} customization={{ texts: { valueProp: 'smart_option' } }} />}
                </div>

              </div>

            </div>

          </div>
        </div>
      </nav>

      {/* Menu del dia */}
      <div className="menudeldia2" style={{ marginBottom: "20px", fontFamily: "Mulish, sans-serif" }}>
        <div className="mb-5">
          <h2 className="text-center" style={{ color: "rgb(56, 101, 229)" }}>MENÚ DE LA SEMANA</h2>
          <div className="row">
            {Object.keys(menuDay2).map((day) => (
              <div key={day} className="col-12 mb-4">
                <div
                  style={{
                    backgroundColor: "rgba(56, 101, 229, 0.5)",
                    borderRadius: "10px",
                    padding: "15px",

                  }}
                >
                  <h3 className="text-center" style={{ color: "white" }}>{day}</h3>
                  <div className="row">
                    {menuDay2[day].map((item) => (
                      <div key={item.id} className="col-12 col-md-6 col-lg-4 mb-3">
                        <div
                          className="card mx-auto"
                          style={{
                            borderRadius: "10px",
                            overflow: "hidden",
                            width: "200px",
                            height: "200px",
                            border: "none",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                          }}
                        >
                          <div
                            className="position-relative"
                            style={{
                              backgroundColor: "rgb(56, 101, 229)",
                              color: "white",
                              fontSize: "14px",
                              fontWeight: "bold",
                              textAlign: "center",
                            }}
                          >
                            {item.name}
                          </div>
                          <img
                            src={item.img}
                            className="card-img-top img-fluid"
                            alt={item.name}
                            style={{
                              objectFit: "cover",
                              height: "100px",
                              width: "100%",
                            }}
                          />
                          <div
                            style={{
                              fontWeight: "bold",
                              fontSize: "14px",
                              color: "rgb(56, 101, 229)",
                              textAlign: "center",
                              height: "120px",
                            }}
                          >
                            {item.price}
                          </div>

                          <div className="card-body text-center p-2">
                            <div className="d-flex justify-content-between">
                              <button
                                className="btn " onClick={() =>{ handleClick(item); handleNotificacion()}}
                                style={{
                                  backgroundColor: "rgb(56, 101, 229)",
                                  color: "white",
                                  fontSize: "12px",
                                  borderRadius: "10px",
                                }}
                              >
                                Añadir al Carrito
                              </button>
                              <button
                                className="btn"
                                style={{
                                  backgroundColor: "transparent",
                                  fontSize: "20px",
                                }}
                              >
                                ⭐
                              </button>
                            </div>
                          </div>

                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
     
     {/* Notificación */}

     


      {/* CARRUSEL OTRAS OPCIONES  */}
      <div className="container mb-1">
        <h1 className="text-center" style={{ marginBottom: "20px", fontFamily: "Mulish, sans-serif", color: "rgb(56, 101, 229)" }}>
          OTRAS OPCIONES
        </h1>
        <div className="d-flex justify-content-center flex-wrap">

          <div className="text-center" style={{ margin: "10px" }}>
            <img
              src="https://i.pinimg.com/736x/cc/8e/3c/cc8e3cb0ff29ae7c19499124dfea1196.jpg"
              alt="Cocacola común"
              style={{
                height: "100px",
                width: "100px",
                objectFit: "cover",
                borderRadius: "50%",
                marginBottom: "10px",
                border: "3px solid rgb(56, 101, 229)",
              }}
            /><div style={{ fontSize: "14px", fontWeight: "bold", color: "rgb(56, 101, 229)" }}>Precio: $62</div>
            <button className="btn m-1 " style={{ backgroundColor: "rgb(56, 101, 229)", color: "white", fontSize: "12px", "borderRadius": "10px" }}><i className="fa-solid fa-cart-shopping"></i></button>
          </div>

          {/* OTROS PORDUCTOS. Para poder añadirlos al carrito falta crearles  una lista, como los menus de la semana
         Queda esto pendiente, al ser algo facil lo dejo para solucionar en la proxima semana.*/}
          <div className="text-center" style={{ margin: "10px" }}>
            <img
              src="https://i.pinimg.com/736x/c2/f6/92/c2f692861075c7bbcd97ec594962222d.jpg"
              alt="Cocacola light"
              style={{
                height: "100px",
                width: "100px",
                objectFit: "cover",
                borderRadius: "50%",
                marginBottom: "10px",
                border: "3px solid rgb(56, 101, 229)",
              }}
            />
            <div style={{ fontSize: "14px", fontWeight: "bold", color: "rgb(56, 101, 229)" }}>Precio: $62</div>
            <button className="btn m-1 " style={{ backgroundColor: "rgb(56, 101, 229)", color: "white", fontSize: "12px", "borderRadius": "10px" }}><i className="fa-solid fa-cart-shopping"></i></button>
          </div>


          <div className="text-center" style={{ margin: "10px" }}>
            <img
              src="https://i.pinimg.com/736x/a1/5e/ab/a15eab3e7c4f254c5b0701d007992599.jpg"
              alt="Cocacola zero"
              style={{
                height: "100px",
                width: "100px",
                objectFit: "cover",
                borderRadius: "50%",
                marginBottom: "10px",
                border: "3px solid rgb(56, 101, 229)",
              }}
            />
            <div style={{ fontSize: "14px", fontWeight: "bold", color: "rgb(56, 101, 229)" }}>Precio: $62</div>
            <button className="btn m-1 " style={{ backgroundColor: "rgb(56, 101, 229)", color: "white", fontSize: "12px", "borderRadius": "10px" }}><i className="fa-solid fa-cart-shopping"></i></button>
          </div>

          <div className="text-center" style={{ margin: "10px" }}>
            <img
              src="https://molinoagranel.com.uy/wp-content/uploads/2023/06/agua-mineral-salus-600-ml.jpg"
              alt="Agua salus"
              style={{
                height: "100px",
                width: "100px",
                objectFit: "cover",
                borderRadius: "50%",
                marginBottom: "10px",
                border: "3px solid rgb(56, 101, 229)",
              }}
            />
            <div style={{ fontSize: "14px", fontWeight: "bold", color: "rgb(56, 101, 229)" }}>Precio: $42</div>
            <button className="btn m-1 " style={{ backgroundColor: "rgb(56, 101, 229)", color: "white", fontSize: "12px", "borderRadius": "10px" }}><i className="fa-solid fa-cart-shopping"></i></button>
          </div>

          <div className="text-center" style={{ margin: "10px" }}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiCLdNje1XoCGFCNiRhbZwFq8ZPJaIY6Xf-Q&s"
              alt="Manzanas"
              style={{
                height: "100px",
                width: "100px",
                objectFit: "cover",
                borderRadius: "50%",
                marginBottom: "10px",
                border: "3px solid rgb(56, 101, 229)",
              }}
            />
            <div style={{ fontSize: "14px", fontWeight: "bold", color: "rgb(56, 101, 229)" }}>Precio: $15 por unidad.</div>
            <button className="btn m-1 " style={{ backgroundColor: "rgb(56, 101, 229)", color: "white", fontSize: "12px", "borderRadius": "10px" }}><i className="fa-solid fa-cart-shopping"></i></button>
          </div>

          <div className="text-center" style={{ margin: "10px" }}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBy2uSUuJbO0wEsgICk3ovc0utf9QibCkMXw&s"
              alt="Naranjas"
              style={{
                height: "100px",
                width: "100px",
                objectFit: "cover",
                borderRadius: "50%",
                marginBottom: "10px",
                border: "3px solid rgb(56, 101, 229)",
              }}
            />
            <div style={{ fontSize: "14px", fontWeight: "bold", color: "rgb(56, 101, 229)" }}>Precio: $15 por unidad.</div>
            <button className="btn m-1 " style={{ backgroundColor: "rgb(56, 101, 229)", color: "white", fontSize: "12px", "borderRadius": "10px" }}><i className="fa-solid fa-cart-shopping"></i></button>
          </div>
        </div>
      </div>
    </div>
  );
};