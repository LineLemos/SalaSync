import React from 'react'
import styles from './reservation.module.css'
import Header from "../../components/Header/indexHeader";


export function Reservation() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.header}>
        {/* <Logo className={styles.logo} /> {senai-logo.svg} */}
        <div className={styles.buttonContainer}>
          <button className={styles.button}>Cadastrar Sala</button>
        </div>
      </div>
    </div>
  );
}

