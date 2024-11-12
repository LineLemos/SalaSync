import React from 'react';
import styles from './room.module.css';
import logo from "../../assets/logo.png";
import Header from "../../components/Header/indexHeader";
import Modal from "react-modal";
import {useState} from "react";

Modal.setRoomElement("#root");

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
          <button onClick={openModal} className={styles.button}>Cadastrar Sala</button>>
          <Modal
          IsOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          overlayClassName="modal-overlay"
          className="modal-content"
          ></Modal>
        </div>
        {/* fala galera do yutchube */}
      </div>
    </div>
  );
}

