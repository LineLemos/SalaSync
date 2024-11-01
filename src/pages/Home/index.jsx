import Header from "../../components/Header/indexHeader";
import styles from "./home.module.css";
import Login from "../../components/Login/Login";

export function Home() {
  return (
    <>
      <div>
        <Header />
        <div className={styles.header}>
          <div className={styles.conteiner}>
            <h1 className={styles.senailogo}>SENAI </h1>
            <h1 className={styles.senainame}>SalaSync</h1>
            <p className={styles.text}>
              Aumente a eficiência e organização com nosso sistema de gestão de
              salas. Nossa plataforma permite que instituições e empresas
              gerenciem facilmente a reserva de salas e auditórios, economizando
              tempo e garantindo que todos os espaços sejam utilizados da melhor
              forma possível.
            </p>
          </div>
          <Login/>
        </div>
      </div>
    </>
  );
}
