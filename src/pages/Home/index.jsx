import Header from "../../components/Header/indexHeader";
import styles from "./home.module.css";
import Login from "../../components/Login/Login";

export function Home() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.content}>
            <div className={styles.title}>
              <h1 className={styles.senaiLogo}>SENAI </h1>
              <h1 className={styles.senaiName}>SalaSync</h1>
            </div>
            <p className={styles.text}>
              Aumente a eficiência e a organização com nosso sistema de gestão
              de salas. Nossa plataforma permite que instituições e empresas
              gerenciem facilmente a reserva de salas e auditórios, economizando
              tempo e garantindo que todos os espaços sejam utilizados da melhor
              forma possível.
            </p>
          </div>

          <div className={styles.login}>
            <Login />
          </div>
        </div>

        <footer className={styles.footer}>
          <div className={styles.footerIcons}>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-youtube"></i>
          </div>
          <p>
            Para mais informações, entre em contato conosco pelo email
            <span> salasync.com</span>
          </p>
          <p>
            Termos e Condições - Política de Privacidade ©2024 Todos os direitos
            reservados por <span> Equipe SalaSync.</span>
          </p>
        </footer>
      </div>
    </>
  );
}
