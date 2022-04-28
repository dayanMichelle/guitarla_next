import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Carrito.module.css";
const Carrito = ({ carrito,actualizarCantidad }) => {
  return (
    <Layout page={"Carrito de compras"}>
      <h1 className="heading">Carrito</h1>
      <main className={`${styles.contenido} contenedor`}>
        <div className={styles.carrito}>
          {carrito.length === 0
            ? "Carrito Vacio"
            : carrito.map((producto) => (
                <div key={producto.id} className={styles.producto}>
                  <div>
                    <Image
                      layout="responsive"
                      width={250}
                      height={500}
                      src={`http://localhost:1337${producto.imagen}`}
                      alt={producto.nombre}
                    />
                  </div>
                  <div>
                    <p className={styles.nombre}>{producto.nombre}</p>
                    <div  className={styles.cantidad}>
                      <p>
                        Cantidad: {producto.cantidad}
                      </p>
                      <select
                        value={producto.cantidad}
                        className={styles.select}
                       onChange={(e) => actualizarCantidad({
                           cantidad : e.target.value,
                           id: producto.id
                       })}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                      </select>
                    </div>

                    <p className={styles.precio}>
                      <span>${producto.precio}</span>
                    </p>
                    <p className={styles.subtotal}>
                      Subtotal: $
                      <span>{producto.precio * producto.cantidad}</span>
                    </p>
                  </div>
                </div>
              ))}
        </div>
        <div>2</div>
      </main>
    </Layout>
  );
};

export default Carrito;
