import React, { useState } from 'react';
import styles from './Credits.module.css';
import { Modal } from './Modal';

export const Credits = () => {
    const [openModal, setOpenModal] = useState(false)

    return (
        <div className={styles.container}>
            <button className={styles.modalBtn} onClick={() => {setOpenModal(true)}}>Credits</button>
            <Modal isOpen={openModal} onClose={() => setOpenModal(false)} />
        </div>
    )
}