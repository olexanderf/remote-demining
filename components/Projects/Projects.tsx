import Image from "next/image";

import SectionContainer from "../SectionContainer/SectionContainer";

import projectsData from "./projectsData";

import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <SectionContainer
      title="Переваги проєкту "
      description="Територія може бути забруднена мінами, встановленими вручну, або розтяжками з вибуховими предметами. В такому випадку їх виявляють і знешкоджують вручну. Ми пропонуємо метод дистанційного розмінування без участі сапера і для будь-якого виду забруднення."
    >
      <ul className={styles.list}>
        {projectsData.map(({ id, img, title, text }) => (
          <li key={id} className={styles.card}>
            <Image src={img} className={styles.image} alt={title} />
            <div className={styles.body}>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.text}>{text}</p>
            </div>
          </li>
        ))}
      </ul>
    </SectionContainer>
  );
};

export default Projects;
