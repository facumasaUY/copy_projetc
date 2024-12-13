import React, { useState, useEffect, useContext } from "react";
import andalogofood from "../../img/anda.png";
import userlogo from "../../img/user.webp";
import "../../styles/shoppingCart.css";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import "/src/front/styles/home.css";
import { CardMenu } from "./cardMenu";
import { CardOption } from "./cardOptions";
import { MenuNavbar } from "./navbarMenu";
import { SelectedMenuData } from "./cardMenu";


export const Menu = () => {

  const { actions, store } = useContext(Context)

  const navigate = useNavigate();


  const [quantity, setQuantity] = useState(1);

  const [spinner, setSpinner] = useState(false);

  const [menus, setMenus] = useState([]);

  const [listCart, setListCart] = useState([]);

  const [showNotification, setShowNotification] = useState(false);

  const [selectedMenu, setSelectedMenu] = useState(null); 

  useEffect(() => {
    const carritoGuardado = JSON.parse(localStorage.getItem("listCart"));
    if (carritoGuardado) {
        setListCart(carritoGuardado);
    }
}, []);

// Guardar carrito en localStorage cada vez que cambie
useEffect(() => {
    localStorage.setItem("listCart", JSON.stringify(listCart));
}, [listCart]);

const mostrarNotificacion = () => {
  if (!showNotification) {
    console.log("Mostrando notificación...");
    setShowNotification(true);
    setTimeout(() => {
      console.log("Ocultando notificación...");
      setShowNotification(false);
    }, 500);
  }
};

const handleClick = (item) => {
  // Check if item already exists in the cart
  const exists = listCart.some((producto) => producto.id === item.id);

  // Update cart state
  setListCart((carritoActual) => {
    if (!exists) {
      return [...carritoActual, item];
    }
    return carritoActual;
  });
};

// const handleClick = (item) => {
//   setListCart((carritoActual) => {
//       console.log("Carrito actual:", carritoActual);
//       console.log("Nuevo item:", item);
//       const existe = carritoActual.some((producto) => producto.id === item.id);
//       if (!existe) {
//           return [...carritoActual, item];
//       }
//       return carritoActual;
//   });
// };

const handleNotificacion = () => {
  return mostrarNotificacion()
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
    actions.getMenu("Miercoles")
    actions.getMenu("Jueves")
    actions.getMenu("Viernes")
    actions.getMenu("Sabado")
    actions.getOptions("CocaCola")
    actions.getOptions("CocaCola Zero")
    actions.getOptions("CocaCola Light")
    actions.getOptions("Agua")
    actions.getOptions("Naranja")
    actions.getOptions("Manzana")
  }, []);



  // const irAFeedback = (item) => {
  //   navigate(`/feedback/${item.id}`, { state: item });
  // };

  const irAReservaDeLugar = () => {
    navigate("/reservations");
  };

  const irAPayment = () => {
    navigate("/payment");
  };


  //Sacar el menuNavbar para otro componente.
  


  return (
    <SelectedMenuData.Provider value={{ selectedMenu, listCart, setListCart}}>
    <div className="container mt-3">
      <div>
    <MenuNavbar/>
    </div>

      <div className="mb-5">
          <h2 className="text-center" style={{ color: "rgb(56, 101, 229)", padding:"20px" }}>MENÚ SEMANAL</h2>
          <div className="row">
      <div
        className="menudeldia2 mt-3"
        style={{
          marginBottom: "20px",
          fontFamily: "Mulish, sans-serif",
          backgroundColor: "rgba(56, 101, 229, 0.2)",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <div className="mb-5">
          <h2 className="text-center" style={{ color: "rgb(56, 101, 229)" }}>Lunes</h2>
          <div className="row">
            {store.menuLunes.map((menu) => (
              <CardMenu   key={menu.id} menu={menu} 
            //   onClick={() => {
            //     handleClick(menu);
            //     handleNotificacion();
            // }}
              />
            ))}
          </div>
        </div>
      </div>

      <div
        className="menudeldia2 mt-3"
        style={{
          marginBottom: "20px",
          fontFamily: "Mulish, sans-serif",
          backgroundColor: "rgba(56, 101, 229, 0.2)",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <div className="mb-5">
          <h2 className="text-center" style={{ color: "rgb(56, 101, 229)" }}>Martes</h2>
          <div className="row">
            {store.menuMartes.map((menu) => (
              <CardMenu key={menu.id} menu={menu} />
            ))}
          </div>
        </div>
      </div>

      <div
        className="menudeldia2 mt-3"
        style={{
          marginBottom: "20px",
          fontFamily: "Mulish, sans-serif",
          backgroundColor: "rgba(56, 101, 229, 0.2)",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <div className="mb-5">
          <h2 className="text-center" style={{ color: "rgb(56, 101, 229)" }}>Miércoles</h2>
          <div className="row">
            {store.menuMiercoles.map((menu) => (
              <CardMenu key={menu.id} menu={menu} />
            ))}
          </div>
        </div>
      </div>

      <div
        className="menudeldia2 mt-3"
        style={{
          marginBottom: "20px",
          fontFamily: "Mulish, sans-serif",
          backgroundColor: "rgba(56, 101, 229, 0.2)",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <div className="mb-5">
          <h2 className="text-center" style={{ color: "rgb(56, 101, 229)" }}>Jueves</h2>
          <div className="row">
            {store.menuJueves.map((menu) => (
              <CardMenu key={menu.id} menu={menu} />
            ))}
          </div>
        </div>
      </div>

      <div
        className="menudeldia2 mt-3"
        style={{
          marginBottom: "20px",
          fontFamily: "Mulish, sans-serif",
          backgroundColor: "rgba(56, 101, 229, 0.2)",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <div className="mb-5">
          <h2 className="text-center" style={{ color: "rgb(56, 101, 229)" }}>Viernes</h2>
          <div className="row">
            {store.menuViernes.map((menu) => (
              <CardMenu key={menu.id} menu={menu} />
            ))}
          </div>
        </div>
      </div>

      <div
        className="menudeldia2 mt-3"
        style={{
          marginBottom: "20px",
          fontFamily: "Mulish, sans-serif",
          backgroundColor: "rgba(56, 101, 229, 0.2)",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <div className="mb-5">
          <h2 className="text-center" style={{ color: "rgb(56, 101, 229)" }}>Sábado</h2>
          <div className="row">
            {store.menuSabado.map((menu) => (
              <CardMenu key={menu.id} menu={menu} />
            ))}
          </div>
        </div>
      </div>
      </div>

      {/* Otras Opciones*/}
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
          className="menudeldia2 mt-3"
          style={{
            marginBottom: "20px",
            fontFamily: "Mulish, sans-serif",
            backgroundColor: "rgba(56, 101, 229, 0.2)",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          <div className="mb-5">
            <h2 className="text-center" style={{ color: "rgb(56, 101, 229)" }}></h2>
            <div className="d-flex flex-wrap justify-content-center">
              {store.optionCocaCola.map((option) => (
                <div className="m-2" style={{ flex: "1 0 auto", maxWidth: "200px" }}>
                  <CardOption key={option.id} option={option} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* <div className="text-center mt-4">
          <button
            className="btn"
            onClick={irAPayment}
            style={{
              backgroundColor: "rgb(56, 101, 229)",
              color: "white",
              fontSize: "1rem",
              borderRadius: "10px",
              padding: "10px 20px",
            }}
          >
            Ir a Pago
          </button>
        </div> */}
      </div>
      </div>
    </div>
    </SelectedMenuData.Provider>
  );
};