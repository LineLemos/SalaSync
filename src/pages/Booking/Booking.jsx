import {React, useState} from "react";
import logo from "../../assets/logo.png";
import Header from "../../components/Header/indexHeader";
import styles from "../Room/room.module.css";
import Modal from 'react-modal';


export function Booking() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.header}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.button} onClick={openModal}>
            Ver Reservas
          </button>

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Booking Modal"
            overlayClassName={styles.modalOverlay}
            className={styles.modalContent}
          >
            <form>
              <div className={styles.form}>
                <div className={styles.formContent}>
                  <h1>Reserva</h1>
                  <label htmlFor="creator">Criado por</label>
                  <input type="text" id="creator" required />

                  <label htmlFor="startTime">Horário de Início</label>
                  <input type="time" id="startTime" required />

                  <label htmlFor="endTime">Horário de Término</label>
                  <input type="time" id="endTime" required />

                  <label htmlFor="date">Data da Reserva</label>
                  <input type="date" id="date" required />
                </div>
                <button className={styles.submitButton}>Salvar Reserva</button>
              </div>
            </form>
            <button onClick={closeModal} className={styles.closeButton}>
              <i className="fas fa-times"></i>
            </button>
          </Modal>
        </div>
      </div>
    </div>
  );
}
