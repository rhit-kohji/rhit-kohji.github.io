import React from 'react';
import styles from './Modal.module.css';
import creditsImg from '../../../assets/icons/credits.png';
import { FaWindowClose } from 'react-icons/fa';


export const Modal = ({ isOpen, onClose }) => {
  return (
    isOpen &&
    <div onClick={onClose} className={styles.overlay}>
        <div onClick={(event) => {
            event.stopPropagation() // prevents modal from closing when clicked
        }} className={styles.modalContainer}>
            <p onClick={onClose} className={styles.closeBtn}>
                <FaWindowClose />
            </p>
            <div className={styles.title}>
                <img className={styles.creditsImg} src={creditsImg} alt="Credits Icon" />
                <h1>Thank you for contributing to my website!</h1>
            </div>
            <div className={styles.content}>
                <a href="https://samkohworks.weebly.com/more.html" title="sam koh works">Hero image created by Samuel Koh</a>
                <a href="https://www.flaticon.com/free-icons/letter-j" title="letter j icons">Letter j icons created by shohanur.rahman13 - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/gratitude" title="gratitude icons">Gratitude icons created by Freepik - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/portfolio" title="portfolio icons">Portfolio icons created by Freepik - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/hobbies" title="hobbies icons">Hobbies icons created by GOWI - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/work" title="work icons">Work icons created by Freepik - Flaticon</a>
                <a href="https://icons8.com/icon/laYYF3dV0Iew/microsoft-sql-server">Microsoft SQL Server icon - Icons8</a>
                <a href="https://www.flaticon.com/free-icons/jetpack" title="jetpack icons">Jetpack icons created by Nikita Golubev - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/schedule" title="schedule icons">Schedule icons created by Freepik - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/path" title="path icons">Path icons created by Freepik - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/wizard" title="wizard icons">Wizard icons created by Freepik - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/library" title="library icons">Library icons created by Freepik - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/credit-card" title="credit card icons">Credit card icons created by Freepik - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/chat-bot" title="chat bot icons">Chat bot icons created by zero_wing - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/cookbook" title="cookbook icons">Cookbook icons created by Freepik - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/alpaca" title="alpaca icons">Alpaca icons created by Freepik - Flaticon</a>
            </div>
        </div>
    </div>
  )
}