import Link from "next/link";
import styles from "../styles/NoFound.module.css";

const NoFound = () => {
  return (
    <div className={styles.no_encontrado}>
      <h1 className="heading">404</h1>
      <Link href="/">Volver al inicio</Link>
    </div>
  );
};

export default NoFound;
