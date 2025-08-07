import React from "react";
import styles from "./projectsStyles.module.css";
import JobLogo from "../../assets/JobLogo.png";
import islandLogo from "../../assets/islandLogo.webp";
import portfolioLogo from "/Portfolio_logo.png";
import ProjectCard from "../../common/ProjectCard";
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        {/* HireVerse Project */}
        <ProjectCard
          src={JobLogo}
          link="https://hireverse-ydxc.onrender.com/"
          h3="HireVerse"
          p={"Smart Job Platform"}
        />

        {/* React Portfolio */}
        <ProjectCard
          src={portfolioLogo}
          link="https://my-portfolio-pi-ochre-po6z51dcu0.vercel.app/"
          h3="Portfolio Project"
          p={"Personal Portfolio"}
        />

        {/* Travel Island */}
        <ProjectCard
          src={islandLogo}
          link="https://islandtm-travelwebsite.netlify.app/"
          h3={
            <>
              Island<sup>TM</sup>
            </>
          }
          p={"Travel Site UI"}
        />
      </div>
    </section>
  );
}

export default Projects;
