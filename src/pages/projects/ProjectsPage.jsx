import React from "react";
import projectCdl from "../../assets/projectsImgs/screenshotCDL.png";
import nodejs from "../../assets/projectsImgs/node.svg";
import react from "../../assets/projectsImgs/react.svg";
import github from "../../assets/projectsImgs/github.svg";
import link from "../../assets/projectsImgs/link.svg";
import "./ProjectsPage.css";

export const ProjectsPage = () => {
  return (
    <div id="projects" className="projects-container">
      <h1 className="project-tittle">proyectos</h1>
      <section className="sections">
        <h3>Proyecto inspirado en la: Call of Duty League Web</h3>
        <img src={projectCdl} alt="project cdl" className="img-cdl-project" />
        <p className="description">
          Este es un proyecto en el cual podemos visualizar los equipos de la
          CDL (call of duty league) la liga profesional del famoso video juego
          call of duty. ESTADO: EN PROGRESO
        </p>
        <div className="contenedor-items">
          <div className="tech-item">
            <img src={nodejs} alt="NodeJs" className="social-icon" />
            <span className="tech-name">NodeJs</span>
            <span className="tech-version">1.0</span>
          </div>
          <div className="tech-item">
            <img src={react} alt="NodeJs" className="social-icon" />
            <span className="tech-name">NodeJs</span>
            <span className="tech-version">1.0</span>
          </div>
          <div className="tech-item">
            <img src={nodejs} alt="NodeJs" className="social-icon" />
            <span className="tech-name">NodeJs</span>
            <span className="tech-version">1.0</span>
          </div>
        </div>
        <div className="links-button">
          <a
            href="https://github.com/jerson-herrera/EjCDL"
            target="_blank"
            rel="noopener noreferrer"
            className="link-button"
          >
            <img src={github} alt="Github-Repository" className="link-icon" /> Github
          </a>
          <a
            href="https://ej-cdl.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-button"
          >
            <img src={link} alt="Link" className="link-icon" />Sitio en Vivo{/*Live site*/}
          </a>
        </div>
      </section>
    </div>
  );
};
