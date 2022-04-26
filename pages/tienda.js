import Layout from "../components/Layout";

const Tienda = ({ guitarras }) => {
  return (
    <Layout page="Tienda">
      <main className="contenedor">
        <h1 className="heading">Nuestra Colección</h1>
      </main>
    </Layout>
  );
};

export async function getStaticProps() {
  const url = `${process.env.API_URL}/guitarras`;
  const response = await fetch(url);
  const guitarras = await response.json();
  return {
    props: {
      guitarras,
    },
  };
}

export default Tienda;
