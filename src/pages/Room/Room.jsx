import React, { useState } from 'react';
import styles from './room.module.css';
import logo from '../../assets/logo.png';
import Header from '../../components/Header/indexHeader';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export function Room() {
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
            Cadastrar Sala
          </button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            overlayClassName={styles.modalOverlay}
            className={styles.modalContent}
          >
            {/* estilizar e colocar conteudo */}
            <button onClick={closeModal}>Close</button>
          </Modal>
        </div>
      </div>
    </div>
  );
}
