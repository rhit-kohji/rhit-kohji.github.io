import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img 
                src={getImageUrl("about/aboutImage.jpg")} 
                alt="Me sitting with a laptop"
                className={styles.aboutImage}
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img className={styles.aboutIcon} src={getImageUrl("about/generalIcon.png")} alt="General icon" />
                    <div className={styles.aboutItemText}>
                        <h3>General</h3>
                        <p>
                            James Koh, Singapore<br/>
                            Rose-Hulman Institute of Technology, Class of 2024<br/>
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img className={styles.aboutIcon} src={getImageUrl("about/hobbiesIcon.png")} alt="Hobbies icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Hobbies & Interests</h3>
                        <p>
                            lifting, running, self-help books, philosophy of life
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img className={styles.aboutIcon} src={getImageUrl("about/workIcon.png")} alt="Work icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Work</h3>
                        <p>
                            resume: <a target="_blank" href={getImageUrl("about/James_Koh_Resume.pdf")} alt="James Koh resume">pdf</a>
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>);
}
