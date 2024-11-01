import styles from "./header.module.css";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.div}>
          <a href="home">Home</a>
          <a href="salas">Salas</a>
          <a href="senai">Senai</a>
        </div>
      </header>
    </>
  );
}
export default Header;
