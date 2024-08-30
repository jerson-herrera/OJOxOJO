import React from "react";
import projectCdl from "../../assets/projectsImgs/screenshotCDL.png";
import nodejs from "../../assets/projectsImgs/node.svg";
import react2 from "../../assets/projectsImgs/react2.svg";
import github from "../../assets/projectsImgs/github.svg";
import link from "../../assets/projectsImgs/link.svg";
import "./ProjectsPage.css";

export const ProjectsPage = () => {
  return (
    <div id="projects" className="projects-container">
      <h1 className="project-tittle">proyectos</h1>
      <section className="project-section">
        <h3>Proyecto inspirado en la: Call of Duty League Web</h3>
        <img src={projectCdl} alt="project cdl" className="img-cdl-project" />
        <p className="project-description">
          Este es un proyecto en el cual podemos visualizar los equipos de la
          CDL (call of duty league) la liga profesional del famoso video juego
          call of duty. ESTADO: EN PROGRESO
        </p>
        <div className="project-contenedor-items">
          <div className="project-tech-item">
            <img src={nodejs} alt="NodeJs" className="project-social-icon" />
            <span className="project-tech-name">NodeJs</span>
            <span className="project-tech-version">20.16.0</span>
          </div>
          <div className="project-tech-item">
            <img src={react2} alt="NodeJs" className="project-social-icon" />
            <span className="project-tech-name">React</span>
            <span className="project-tech-version">18.3.1</span>
          </div>
        </div>
        <div className="project-links-button">
          <a
            href="https://github.com/jerson-herrera/EjCDL"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link-button"
          >
            <img src={github} alt="Github-Repository" className="project-link-icon" /> Github
          </a>
          <a
            href="https://ej-cdl.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link-button"
          >
            <img src={link} alt="Link" className="project-link-icon" />Sitio en Vivo{/*Live site*/}
          </a>
        </div>
      </section>
    </div>
  );
};
