import React, { useState } from 'react';
import styles from './room.module.css';
import logo from '../../assets/logo.png';
import Header from '../../components/Header/indexHeader';
import Modal from 'react-modal';
import Salas from '../../components/Salas/Salas';

Modal.setAppElement('#root');

export function Room() {

  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [seatAmount, setSeatAmount] = useState();
  const [equipment, setEquipment] = useState();

  function handleClick() {
    axios({
      method: "post",
      url: "http://localhost:8080/rooms",
      data: {
        name: name,
        description: description,
        seatAmount: seatAmount,
        equipment: equipment
      },
    })
      .then((response) => {
        alert("sala cadastrada com sucesso:", response.data);
      })
      .catch((error) => {
        alert.error("Erro ao criar sala:", error);
      });
  }

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
            <form>
              <div className={styles.form}>
                <div className={styles.formContent}>
                  <h1>Cadastro de Sala</h1>
                  <label htmlFor="name">Nome da Sala</label>
                  <input type="text" id="name" required />
                  
                  <label htmlFor="seatAmount">Capacidade</label>
                  <input type="number" id="seatAmount" required />

                  <label htmlFor="equipment">Equipamentos</label>
                  <input type="Text" id="equipment" required />

                  <label htmlFor="description">Descrição</label>
                  <textarea
                    rows="8"
                    cols="40"
                    maxlength="400"
                    required
                  ></textarea>
                </div>
                <button onClick={handleClick} className={styles.submitButton}>
                  Criar Sala
                </button>
              </div>
            </form>

            <button onClick={closeModal} className={styles.closeButton}>
              <i className="fas fa-times"></i>
            </button>
          </Modal>
        </div>
      </div>
      <Salas />
    </div>
  );
}

