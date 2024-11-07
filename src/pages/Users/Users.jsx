import React from "react";
import logo from "../../assets/logo.png";
import Header from "../../components/Header/indexHeader";
import styles from "../Reservation/reservation.module.css";


export function Users() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.header}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <div className={styles.buttonContainer}>
          <button className={styles.button}>Cadastrar Sala</button>
        </div>
      </div>
    </div>
  );
}
