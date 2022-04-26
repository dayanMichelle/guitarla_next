import Layout from "../../components/Layout";
import Image from "next/image";
import styles from '../../styles/Entrada.module.css';
import { formatearFecha } from "../../helpers";
const EntradaBlog = ({ entrada }) => {
  console.log(entrada);
  const { titulo, contenido, imagen, published_at } = entrada[0];

  return (
    <Layout
    page={titulo}>
      <main className="contenedor">
        <h1 className="heading">{titulo}</h1>
        <article className={styles.entrada}>
          <Image
            layout="responsive"
            width={800}
            height={600}
            src={`http://localhost:1337${imagen.url}`}
            alt={`Imagen de ${titulo}`}
          />
          <div className={styles.contenido}>
            <p className={styles.fecha}>{formatearFecha(published_at)}</p>
            <p className={styles.texto}>{contenido}</p>
          </div>
        </article>
      </main>
    </Layout>
  );
};
export async function getStaticPaths() {
  const url = `${process.env.API_URL}/blogs`;
  const respuesta = await fetch(url);
  const entradas = await respuesta.json();
  const paths = entradas.map((entrada) => ({
    params: { url: entrada.url },
  }));
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params: { url } }) {
  const urlBlog = `${process.env.API_URL}/blogs?url=${url}`;
  const respuesta = await fetch(urlBlog);
  const entrada = await respuesta.json();

  return {
    props: {
      entrada
    },
  };
}

export default EntradaBlog;
