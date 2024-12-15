import React from 'react';
import styles from './Modal.module.css';
import creditsImg from '../../../assets/icons/credits.png';

export const Modal = ({ isOpen, onClose }) => {
  return (
    isOpen &&
    <div onClick={onClose} className={styles.overlay}>
        <div onClick={(event) => {
            event.stopPropagation() // prevents modal from closing when clicked
        }} className={styles.modalContainer}>
            <p onClick={onClose} className={styles.closeBtn}>X</p>
            <div className={styles.title}>
                <img className={styles.creditsImg} src={creditsImg} alt="Credits Icon" />
                <h1>Thank you for contributing to my website!</h1>
            </div>
            <div className={styles.content}>
                <a href="https://samkohworks.weebly.com/more.html" title="sam koh works">Hero image created by Samuel Koh</a>
                <a href="https://www.flaticon.com/free-icons/letter-j" title="letter j icons">Letter j icons created by shohanur.rahman13 - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/gratitude" title="gratitude icons">Gratitude icons created by Freepik - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/knowledge" title="knowledge icons">Knowledge icons created by Vectors Tank - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/hobbies" title="hobbies icons">Hobbies icons created by GOWI - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/work" title="work icons">Work icons created by Freepik - Flaticon</a>
                <a href="https://icons8.com/icon/laYYF3dV0Iew/microsoft-sql-server">Microsoft SQL Server icon - Icons8</a>
            </div>
        </div>
    </div>
  )
}