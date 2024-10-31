import style from "./home.module.css";

export function Home() {
  return (
    <>
    <Header/>
      <div className={styles.header}>
        <a href="home">Home</a>
        <p>ta funcionando?</p>
        <a href="salas">Salas</a>
        <a href="senai">Senai</a>
      </div>
    </>
  );
}
