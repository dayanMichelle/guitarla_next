import Curso from "../components/Curso";
import Layout from "../components/Layout";
import Listado from "../components/Listado";
import ListadoBlog from "../components/ListadoBlog";
export default function Home({ guitarras, curso, entradas }) {
  return (
    <Layout page="Home" guitarra={guitarras[3]}>
      <main className="contenedor">
        <h1 className="heading">Nuestra Colección</h1>
        <Listado guitarras={guitarras} />
      </main>
      <Curso curso={curso} />
      <section className="contenedor">
        <ListadoBlog entradas={entradas} />
      </section>
    </Layout>
  );
}
export async function getStaticProps() {
  //Consultar 2 apis distintas

  const urlGuitarras = `${process.env.API_URL}/guitarras`;
  const urlCurso = `${process.env.API_URL}/cursos`;
  const urlBlog = `${process.env.API_URL}/blogs?_limit=3&_sort=created_at:desc`;
  const [resGuitarras, resCurso, resBlog] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCurso),
    fetch(urlBlog),
  ]);
  const [guitarras, curso, entradas] = await Promise.all([
    resGuitarras.json(),
    resCurso.json(),
    resBlog.json(),
  ]);
  return {
    props: {
      guitarras,
      curso,
      entradas,
    },
  };
}
