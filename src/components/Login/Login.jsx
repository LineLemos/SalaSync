import styles from "./login.module.css";

export default function Login() {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.divisaoTexto} >
          <h1 className={styles.div}>Log In.</h1>
        </div>
        <button>Administrador/Professor</button>
        <input type="text" placeholder="User" />
        <input type="text" placeholder="Password" />
        <div>
          <button>Entrar</button>
          <button>Cadastrar</button>
        </div>
      </section>
    </div>
  );
}
