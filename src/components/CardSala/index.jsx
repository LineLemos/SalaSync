import React, { useState } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import styles from "./card.module.css";
import axios from "axios";

export default function CardSala({
  id,
  nome,
  descricao,
  equipamento,
  capacidade,
}) {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [room, setRoom] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
   
    const bookingData = {
      room: room,
      startTime: startTime,
      endTime: endTime,
    };

    const token = localStorage.getItem("token"); 

    axios
      .post("http://localhost:8080/bookings", bookingData, {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      })
      .then((response) => {
        console.log("Sala reservada com sucesso:", response.data);
        closeModal();
      })
      .catch((error) => {
        console.error("Erro ao reservar sala:", error);
      });
    }
    return (
      <div className={styles.master}>
        <h2 className={styles.textName}>NOME: {nome}</h2>
        <div className={styles.divSepara}>
          <div className={styles.divroom}>
            <p>DESCRIÇÃO: {descricao}</p>
            <p>EQUIPAMENTOS: {equipamento}</p>
          </div>
    
          <div className={styles.divcap}>
            <div className={styles.divCapacidade}>
              <p>CAPACIDADE: {capacidade} 0</p>
              <FontAwesomeIcon icon={faUser} className={styles.icon} />
            </div>
            <button onClick={openModal}>Reservar</button>
          </div>
        </div>
    
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
    
                <label htmlFor="date">Data da Reserva</label>
                <input type="date" id="date" required />
    
                <label htmlFor="startTime">Horário de Início</label>
                <input type="time" id="startTime" required />
    
                <label htmlFor="endTime">Horário de Término</label>
                <input type="time" id="endTime" required />
              </div>
              <button className={styles.submitButton}>Salvar Reserva</button>
            </div>
          </form>
          <button onClick={closeModal} className={styles.closeButton}>
            <i className="fas fa-times"></i>
          </button>
        </Modal>
      </div>
    );
}

