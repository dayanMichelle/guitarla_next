import "../styles/normalize.css";
import "../styles/globals.css";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const [carrito, setCarrito] = useState([]);

  //LocalStorage
  useEffect(() => {
    const carritoLS = JSON.parse(localStorage.getItem("carrito")) ?? [];
    setCarrito(carritoLS);
  }, []);
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const agregarCarrito = (producto) => {
    if (carrito.some((articulo) => articulo.id === producto.id)) {
      const carritoActualizado = carrito.map((articulo) => {
        if (articulo.id === producto.id) {
          articulo.cantidad = producto.cantidad;
        }
        return articulo;
      });
      setCarrito(carritoActualizado);
    } else {
      setCarrito([...carrito, producto]);
    }
  };

  const actualizarCantidad = (producto) => {
    const carritoActualizado = carrito.map((articulo) => {
      if (articulo.id === producto.id) {
        articulo.cantidad = producto.cantidad;
      }
      return articulo;
    });
    setCarrito(carritoActualizado);
  };

  const eliminarProducto = (id) => {
    const carritoActulizado = carrito.filter(articulo => articulo.id !== id);
    setCarrito(carritoActulizado);
  };
  return (
    <Component
      eliminarProducto={eliminarProducto}
      actualizarCantidad={actualizarCantidad}
      carrito={carrito}
      agregarCarrito={agregarCarrito}
      {...pageProps}
    />
  );
}

export default MyApp;
