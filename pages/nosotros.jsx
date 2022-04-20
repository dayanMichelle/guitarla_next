import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Nosotros.module.css'
const Nosotros = () => {
  return (
    <Layout
    page="Nosotros"
    >
        <main className='contenedor'>
          <h2 className='heading'>Nosotos</h2>
          <div className={styles.contenido}>
            <Image
            layout='responsive'
            width={600}
            height={450}
            src='/img/nosotros.jpg'
            alt='about us'
            />
            <div>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum quaerat expedita sunt? Facilis nam at aperiam dicta alias! Voluptate consequuntur, quos molestias deserunt fuga delectus quam magni enim, inventore ea error iure, commodi sint natus! Nisi, praesentium fugit distinctio est maiores voluptas sit eaque fuga molestiae quam. At eius assumenda non, eos vitae placeat doloribus perspiciatis odio. Consequuntur, corporis. Quaerat ab nulla repudiandae assumenda accusantium odit ipsa dolorum voluptatibus ratione ipsam illum minus optio sit, at fugit natus laborum quasi et nesciunt molestiae suscipit culpa reiciendis? Dolorum error ullam exercitationem iure a quia officia, impedit laudantium aut alias cupiditate reprehenderit animi, est ratione unde sunt facere dicta tempora minus eligendi! Quae explicabo, expedita praesentium culpa accusantium dolorum rerum voluptate saepe repellendus, tenetur esse vero itaque laudantium corporis, ratione porro eaque deserunt officiis! Molestias, vitae accusantium ratione porro corrupti itaque odit perspiciatis officia totam qui, commodi harum ipsa quibusdam officiis expedita.</p>
            </div>
          </div>
        </main>
    </Layout>
  )
}

export default Nosotros