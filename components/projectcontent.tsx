import { FunctionComponent } from "react";
import { Project } from "../lib/types";
import styles from "../styles/Home.module.css";

const ProjectContent: FunctionComponent<{ project: Project }> = ({
  project,
}) => {
  const Links = () => {
    return (
      <div className={styles.projectsContainer_links}>
        {project.github && (
          <a
            href={project.github}
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            Site
          </a>
        )}
      </div>
    );
  };

  if (project.isFeatured)
    return (
      <div className={styles.featuredContainer_content}>
        <h3 className={styles.header}>{project.title}</h3>
        <p className={styles.featuredContainer_technology}>
          {project.technology.toString().replaceAll(",", ", ")}
        </p>
        <p>{project.description}</p>
        <Links />
      </div>
    );

  return (
    <>
      <div>
        <h4 className={styles.header}>{project.title}</h4>
        <p className={styles.featuredContainer_technology}>
          {project.technology.toString().replaceAll(",", ", ")}
        </p>
      </div>
      <p>{project.description}</p>
      <Links />
    </>
  );
};

export default ProjectContent;
