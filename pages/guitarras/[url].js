import Image from "next/image";
import { useState } from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/Guitarra.module.css";

const Producto = ({ guitarra,agregarCarrito }) => {
  const [cantidad,setCantidad] = useState(0);
  const { descripcion, imagen, nombre, precio,id } = guitarra[0];
  const handledSubmit = e =>{
    e.preventDefault();
   
    if( cantidad < 1 ){
      alert("La cantidad no válida");
      return;
    }
     //Agregar al carrito
     const guitarraSeleccionada = {
       id,
       imagen: imagen.url,
       nombre,
       precio,
       cantidad
     }
     agregarCarrito(guitarraSeleccionada);
  }

  return (
    <Layout
    page={`Guitarra ${nombre}`}
    >
      <div className={styles.guitarra}>
        <Image
          layout="responsive"
          height={350}
          width={180}
          src={`http://localhost:1337${imagen.url}`}
          alt={nombre}
        />
        <div className={styles.contenido}>
          <h3>{nombre}</h3>
          <p className={styles.descripcion}>{descripcion}</p>
          <p className={styles.precio}>${precio}</p>

          <form className={styles.formulario} onSubmit={handledSubmit}>
              <label>Cantidad:</label>
              <select value={cantidad} onChange={e => setCantidad(e.target.value)}>
                  <option value="">-- Seleccione -- </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
              </select>
              <input 
              type="submit" 
              value="Agregar al carrito" 
              />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ query: { url } }) {
  const urlGuitarra = `${process.env.API_URL}/guitarras?url=${url}`;
  const response = await fetch(urlGuitarra);
  const guitarra = await response.json();
  return {
    props: {
      guitarra,
    },
  };
}
export default Producto;
