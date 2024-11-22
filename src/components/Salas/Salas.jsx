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
     console.log("useEffect executado");
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
    fetchRooms();
    console.log(rooms)
  }

  return (
    <>
      <div className={styles.containerPrincipal}>
        <ul className={styles.ulcontainer}>
          {rooms.map((room, index) => (
            <li key={`${room.id}-${index}`} className={styles.licontainer}>
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
                
              </div>
             
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
