import React from 'react';

import styles from "./ProjectCard.module.css";
import { getImageUrl } from '../../utils';

// instead of using pass in as prop, use destructing from ES6
// e.g. same as const project = props.project
export const ProjectCard = ({ project: {title, imageSrc, description, skills, demo} }) => {
  return (
    <div className={styles.container}>
        <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} className={styles.image}/>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>{
            skills.map((skill, id) => {
                return (
                <li key={id} className={styles.skill}>
                    {skill}
                </li>
            )})
        }</ul>
        {
            demo &&
            <div className={styles.links}>
                <a href={demo} className={styles.link}>Demo</a>
            </div>
        }
    </div>
  )
}
