import React from "react";
import logo from "../../assets/logo.png";
import Header from "../../components/Header/indexHeader";
import styles from "../Room/room.module.css";

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
          <button className={styles.button} onClick={openModal}>Ver Reservas</button>
        </div>
        <Modal isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            overlayClassName={styles.modalOverlay}
            className={styles.modalContent}
            >

          {/* estilizar */}
          
        </Modal>
      
      </div>
    </div>
  );
}
