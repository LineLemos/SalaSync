import React from "react";
import logo from "../../assets/logo.png";
import Header from "../../components/Header/indexHeader";
import styles from "../Reservation/reservation.module.css";

export function Booking() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.header}>

        <div className={styles.logoContainer}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.button}>Cadastrar Sala</button>
        </div>
      
      </div>
    </div>
  );
}
