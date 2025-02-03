import React from 'react';

import styles from "./ProjectCard.module.css";
import { getImageUrl } from '../../utils';

// instead of using pass in as prop, use destructing from ES6
// e.g. same as const project = props.project
export const ProjectCard = ({ project: {title, imageSrc, description, skills, demo, source} }) => {
  return (
    <div className={styles.container}>
        <div className={styles.imageContainer}>
            <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} className={styles.image}/>
            <div className={styles.descriptionContainer}>
                <p className={styles.description}>{description}</p>
                {
                    demo && <a target="_blank" href={demo} className={styles.link}>Demo</a>
                }
                {
                    source && <a target="_blank" href={source} className={styles.link}>Source</a>
                }
            </div>
        </div>
        <h3 className={styles.title}>{title}</h3>
        <ul className={styles.skills}>{
            skills.map((skill, id) => {
                return (
                <li key={id} className={styles.skill}>
                    {skill}
                </li>
            )})
        }</ul>
    </div>
  )
}
