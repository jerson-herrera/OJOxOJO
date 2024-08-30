import React from "react";
import css from "../../assets/aboutImgs/css.svg";
import js from "../../assets/aboutImgs/js.svg";
import html from "../../assets/aboutImgs/html.svg";
import react2 from "../../assets/aboutImgs/react2.svg";
import nodejs from "../../assets/aboutImgs/nodejs.svg";
import "./AboutPage.css";
export const AboutPage = () => {
  return (
    <div id="about" className="about-container">
      <h1 className="about-tittle">Sobre mi</h1>
      <p className="about-text">
        Soy un programador web backend junior apasionado por el desarrollo de
        aplicaciones eficientes y escalables. Tengo experiencia en la creación
        de soluciones backend utilizando Node.js y MySQL, y disfruto resolviendo
        problemas complejos con código limpio y bien estructurado. Durante mi
        participación en proyectos académicos y personales, he desarrollado
        habilidades en la gestión de bases de datos, la creación de APIs RESTful
        y la implementación de sistemas de autenticación y autorización.
        Apasionado por aprender nuevas tecnologías y mejorar continuamente.
        Actualmente estoy terminando mis estudios como tecnólogo en desarrollo
        de software en la universidad Fundación Universitaria Católica Lumen
        Gentium
      </p>
      <div className="about-buttons">
        <div className="about-section section-languages">
          <h2>Lenguajes de Programación</h2>
          <div className="tech-item">
            <img src={css} alt="CSS" className="social-icon" />
            <div className="tech-details">
              <span className="tech-name">CSS</span>
              {/* <span className="tech-version">v3.0</span> */}
            </div>
          </div>
          <div className="tech-item">
            <img src={html} alt="HTML" className="social-icon" />
            <div className="tech-details">
              <span className="tech-name">HTML</span>
              {/* <span className="tech-version">v5.0</span> */}
            </div>
          </div>
          <div className="tech-item">
            <img src={js} alt="JavaScript" className="social-icon" />
            <div className="tech-details">
              <span className="tech-name">JavaScript</span>
              <span className="tech-version">ES6</span>
            </div>
          </div>
        </div>
        <div className="about-section section-frameworks">
          <h2>Frameworks</h2>
          <div className="tech-item">
            <img src={nodejs} alt="NodeJs" className="social-icon" />
            <div className="tech-details">
              <span className="tech-name">Nodejs</span>
              <span className="tech-version">20.16.0</span>
            </div>
          </div>
          <div className="tech-item">
            <img src={react2} alt="NodeJs" className="social-icon" />
            <div className="tech-details">
              <span className="tech-name">React</span>
              <span className="tech-version">18.3.1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
