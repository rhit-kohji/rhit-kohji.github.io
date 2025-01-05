import React from 'react';

import styles from "./Contact.module.css";
import { getImageUrl } from '../../utils';

export const Contact = () => {
    return <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon"></img>
                <a href="mailto:kohji@rose-hulman.edu">kohji@rose-hulman.edu</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon"></img>
                <a href="https://www.linkedin.com/in/jikta">linkedin.com/jikta</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon"></img>
                <a href="https://github.com/rhit-kohji">github.com/rhit-kohji</a>
            </li>
        </ul>
    </footer>
}
