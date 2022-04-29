import styles from "../styles/Curso.module.css";

const Curso = ({ curso }) => {
  const { titulo, contenido, imagen } = curso;
  console.log(imagen.url);
  return (
    <section>
      <div className={`contenedor ${styles.grid}`}>
        <div className={styles.contenido}>
          <h2 className="heading">{titulo}</h2>
          <p className={styles.texto}>{contenido}</p>
          <a className={styles.enlace} href="#">Más Información</a>
        </div>
      </div>
      <style jsx>
        {`
        section {
            padding: 10rem 0;
            margin-top: 10rem;
            background-image: linear-gradient(to right, rgb(0 0 0 / 0.64), rgb( 0 0 0 / 0.7)), url(${process.env.NEXT_PUBLIC_API_URL + imagen.url});
            background-size: cover;
            background-position: 50%;
        } 
        `}
        </style>
    </section>
  );
};

export default Curso;
