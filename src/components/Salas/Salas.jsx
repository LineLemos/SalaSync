import React, { useState, useEffect } from "react";
import styles from "./salas.module.css";
import ronaldinho from "../../assets/download.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
import { Room } from "../../pages/Room/Room";
import axios from "axios";

export default function Salas() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetchRooms();
  }, []);

  function fetchRooms() {
    axios
      .get("http://localhost:8080/rooms")
      .then((response) => {
        setRooms(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar salas:", error);
      });
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleRoomCreated(newRoom) { 
    console.log("Nova sala criada:", newRoom);
    setRooms((prevRooms) => [...prevRooms, newRoom]); 
  }

  return (
    <>
      <div className={styles.containerPrincipal}>
        <Room onRoomCreated={handleRoomCreated} />
        <ul className={styles.ulcontainer}>
          {rooms.map((room) => (
            <li key={room.id} className={styles.licontainer}>
              <div className={styles.containerText}>
                <h2 className={styles.nameRoom}>NOME: {room.name}</h2>
                <p>DESCRIÇÃO: {room.description}</p>
                <p>EQUIPAMENTOS: {room.equipment.join(", ")}</p>
              </div>
              <div className={styles.containerPessoal}>
                <div className={styles.containerDados}>
                  <FontAwesomeIcon icon={faUser} className={styles.icon} />
                  <p>{room.seatAmount}</p>
                </div>
                <button className={styles.btnReservar} onClick={openModal}>
                  Reservar
                </button>
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

                      <label htmlFor="startTime">Horário de Início</label>
                      <input type="time" id="startTime" required />

                      <label htmlFor="endTime">Horário de Término</label>
                      <input type="time" id="endTime" required />

                      <label htmlFor="date">Data da Reserva</label>
                      <input type="date" id="date" required />
                    </div>
                    <button
                      className={styles.submitButton}
                      onClick={handleSubmit}
                    >
                      Salvar Reserva
                    </button>
                  </div>
                </form>
                <button onClick={closeModal} className={styles.closeButton}>
                  <i className="fas fa-times"></i>
                </button>
              </Modal>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
