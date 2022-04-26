import Layout from '../components/Layout'
import Listado from '../components/Listado'
export default function Home({guitarras}) {
  return (

      <Layout
      page="Home"
      >
        <main className='contenedor'>
          <h1 className='heading'>Nuestra Colección</h1>
          <Listado 
          guitarras={guitarras}
          />
        </main>
      </Layout>
  )
}
export async function getStaticProps() {
  const url = `${process.env.API_URL}/guitarras?_sort=precio:DESC`;
  const response = await fetch(url);
  const guitarras = await response.json();
  return {
    props: {
      guitarras,
    },
  };
}
