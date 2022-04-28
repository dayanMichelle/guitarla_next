import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, page,guitarra }) => {
  return (
    <div>
      <Head>
        <title>Guitar LA - {page} </title>
        <meta name="description" content="Web site to buy a guitar" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Akshar:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header guitarra={guitarra} />
      {children}
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  guitarra: null
}

export default Layout;
