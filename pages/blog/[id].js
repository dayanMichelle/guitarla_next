import Layout from "../../components/Layout";
import Image from "next/image";
import { formatearFecha } from "../../helpers";
const EntradaBlog = ({ entrada }) => {
  console.log(entrada);
  const { titulo, contenido, imagen, published_at } = entrada;

  return (
    <Layout>
      <main className="contenedor">
        <h1 className="heading">{titulo}</h1>
        <article>
          <Image
            layout="responsive"
            width={800}
            height={600}
            src={`http://localhost:1337${imagen.url}`}
            alt={`Imagen de ${titulo}`}
          />
          <div>
            <p>{formatearFecha(published_at)}</p>
            <p>{contenido}</p>
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
    params: { id: entrada.id.toString() },
  }));
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params: { id } }) {
  const url = `${process.env.API_URL}/blogs/${id}`;
  const respuesta = await fetch(url);
  const entrada = await respuesta.json();

  return {
    props: {
      entrada,
    },
  };
}

export default EntradaBlog;
