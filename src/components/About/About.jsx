import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img 
                src={getImageUrl("about/aboutImage.png")} 
                alt="Me sitting with a laptop"
                className={styles.aboutImage}
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h3>General</h3>
                        <p>
                            full name: James Koh
                            hometown: Singapore
                            school: Rose-Hulman Institute of Technology, Class of 2024
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Hobbies & Interests</h3>
                        <p>
                            lifting, running, self-help books, "productivity hacks"
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Work</h3>
                        {/* TODO: attach resume as pdf */}
                        <p>
                            resume: *attach pdf
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>);
}
