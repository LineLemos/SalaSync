import React from "react";
import styles from "./salas.module.css";
import ronaldinho from "../../assets/download.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function Salas() {
  return (
    <>
      <div className={styles.containerPrincipal}>
        <ul className={styles.ulcontainer}>
          <li className={styles.licontainer}>
            <div>
              <img src={ronaldinho} alt="" className={styles.img} />
            </div>
            <div className={styles.containerText}>
              <h2>Sala 1</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ea
                voluptatibus praesentium dignissimos atque repudiandae
                voluptates, odio suscipit, blanditiis laboriosam architecto
                culpa hic labore delectus. Voluptatibus voluptates deserunt
                cupiditate laborum.
              </p>
            </div>
            <div className={styles.containerPessoal}>
              <div className={styles.containerDados}>
                <FontAwesomeIcon icon={faUser} className={styles.icon} />
                <p>100 pessoas</p>
              </div>
              <button className={styles.btnReservar}>Reservar</button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
