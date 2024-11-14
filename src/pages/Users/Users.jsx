import React from "react";
import logo from "../../assets/logo.png";
import Header from "../../components/Header/indexHeader";
import styles from "../Room/room.module.css";
import Modal from 'react-modal';
import { useState } from "react";

export function Users() {

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
        <img src={logo} alt="Logo" className={styles.logo} />
        <div className={styles.buttonContainer}>
          <button className={styles.button} onClick={openModal}>
            Editar Usuários
          </button>

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Cadastro do Usuário"
            overlayClassName={styles.modalOverlay}
            className={styles.modalContent}
          >
            <form>
              <div className={styles.form}>
                <div className={styles.formContent}>
                  <h1>Cadastro do Usuário</h1>
                  <label htmlFor="name">Nome do Usuário</label>
                  <input type="text" id="name" required />

                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" required />

                  <label htmlFor="password">Senha</label>
                  <input type="password" id="password" required />
                </div>
                <button className={styles.submitButton}>
                  Cadastrar Usuário
                </button>
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

