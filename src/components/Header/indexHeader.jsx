import { Link } from "react-router-dom";
import styles from "./header.module.css";


export default function Header() {
  return (
    <>
      <header className={`${styles.header} header-class`}>
        <div className={styles.div}>
          <Link to="/">Home</Link>
          <Link to="/salas">Salas</Link>
          <Link to="/senai">Senai</Link>
        </div>
      </header>
    </>
  );
}
