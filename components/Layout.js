import Head from "next/head"
import Header from "./Header"


const Layout = ({children,page}) => {
  return (
    <div>
       <Head>
        <title>Guitar LA - {page} </title>
        <meta name="description" content="Web site to buy a guitar" />
       </Head>
       <Header />
       {children}
    </div>
  )
}

export default Layout