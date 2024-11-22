import React, { useState } from "react";
import styles from "./room.module.css";
import logo from "../../assets/logo.png";
import Header from "../../components/Header/indexHeader";
import Modal from "react-modal";
import axios from "axios";
import Salas from "../../components/Salas/Salas";

Modal.setAppElement("#root");

export function Room({ onRoomCreated }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [seatAmount, setSeatAmount] = useState("");
  const [description, setDescription] = useState("");
  const [equipment, setEquipment] = useState({
    tv: false,
    projector: false,
    computer: false,
    other: "",
  });

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const selectedEquipment = Object.keys(equipment).filter(
      (key) => equipment[key]
    );

    const roomData = {
      name: name,
      description: description,
      equipment: selectedEquipment,
      seatAmount: parseInt(seatAmount),
    };

    const token = localStorage.getItem("token"); 

    axios
      .post("http://localhost:8080/rooms/create", roomData, {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      })
      .then((response) => {
        console.log("Sala criada com sucesso:", response.data);

         if (onRoomCreated) {
           onRoomCreated(response.data);
         }
        closeModal();
      })
      .catch((error) => {
        console.error("Erro ao criar sala:", error);
      });
  }

  function handleEquipmentChange(event) {
    const { name, value, checked } = event.target;
    setEquipment((prevState) => ({
      ...prevState,
      [name]: name === "other" ? value : checked,
    }));
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
            <form onSubmit={handleSubmit}>
              <div className={styles.form}>
                <div className={styles.formContent}>
                  <h1>Cadastro de Sala</h1>
                  <label htmlFor="name">Nome da Sala</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />

                  <label htmlFor="seatAmount">Capacidade</label>
                  <input
                    type="number"
                    id="seatAmount"
                    value={seatAmount}
                    onChange={(e) => setSeatAmount(e.target.value)}
                    required
                  />

                  <label htmlFor="description">Descrição</label>
                  <textarea
                    id="description"
                    rows="5"
                    maxLength="400"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  ></textarea>

                  <div className={styles.equipmentContainer}>
                    <label>Equipamentos:</label>
                    <div>
                      <input
                        type="checkbox"
                        id="tv"
                        name="tv"
                        checked={equipment.tv}
                        onChange={handleEquipmentChange}
                      />
                      <label htmlFor="tv">TV</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="projector"
                        name="projector"
                        checked={equipment.projector}
                        onChange={handleEquipmentChange}
                      />
                      <label htmlFor="projector">Projetor</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="computer"
                        name="computer"
                        checked={equipment.computer}
                        onChange={handleEquipmentChange}
                      />
                      <label htmlFor="computer">Computadores</label>
                    </div>
                    <div className={styles.othersEquipment}>
                      <label htmlFor="other">Outros:</label>
                      <input
                        type="text"
                        id="other"
                        name="other"
                        value={equipment.other}
                        onChange={handleEquipmentChange}
                        placeholder="Especifique outros equipamentos"
                      />
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className={styles.submitButton}
                >
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
    </div>
  );
}
