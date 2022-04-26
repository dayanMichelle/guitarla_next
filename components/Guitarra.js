import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Guitarra.module.css";

const Guitarra = ({ guitarra }) => {
  const { descripcion, imagen, nombre, url, precio } = guitarra;
  return (
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
        <Link href={`/guitarras/${url}`}>
          <a className={styles.enlace}>Ver más</a>
        </Link>
      </div>
    </div>
  );
};

export default Guitarra;
