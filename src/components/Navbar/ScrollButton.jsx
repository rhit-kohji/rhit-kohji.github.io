import React, { useState, useEffect } from 'react';
import { FaChevronUp } from 'react-icons/fa';
import styles from './ScrollButton.module.css';

export const ScrollButton = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = window.scrollY;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);
    }, []);
    
    return (
        visible && (
            <button
                onClick={scrollToTop}
                className={styles.scrollButton}
            >
                <FaChevronUp />
            </button>
        )
    )
}
