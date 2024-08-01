import React from 'react';
import styles from "./Hero.module.css";
import { Typewriter } from 'react-simple-typewriter';
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm James</h1>
            <span className={styles.description}>
              <Typewriter
                words={['hey there!', 'i\'m a CS new grad from Rose-Hulman.', 'currently obsessed with self-improvement.', 'i also like lifting :)', 'thanks for visiting!']}
                loop={false} // loop infinitely
                cursor={true}
                cursorBlinking={true}
              />
            </span>
            <a className={styles.contactBtn} href="mailto:kohji@rose-hulman.edu">Contact Me</a>
        </div>
        <img className={styles.heroImg} src={getImageUrl("hero/heroImage.png")} alt="Hero Image" />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
  )
}
