import { useState } from "react";
import styles from "./login.module.css";
import axios from "axios";

export default function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  function handleClick() {
    axios({
      method: "post",
      url: "http://localhost:8080/auth/login",
      data: {
        username: username,
        password: password,
      },
    })
      .then((response) => {
        console.log("Login realizado com sucesso:", response.data);
      })
      .catch((error) => {
        console.error("Erro no login:", error);
      });
  }

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.divisaoTexto}>
          <h1 className={styles.div}>Log In.</h1>
        </div>
        <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Usuário" />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          placeholder="Senha"
        />
        <div>
          <button onClick={handleClick}>Entrar</button>
          <button>Cadastrar</button>
        </div>
      </section>
    </div>
  );
}
