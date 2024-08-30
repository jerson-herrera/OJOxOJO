import React from 'react'
import foto from "../../assets/foto.jpg"
import github from "../../assets/github.svg"
import linkedin from "../../assets/linkedin.svg"
import "./HomePage.css"

export const HomePage = () => {
  return (
    <div id='home' className='home-container'>
      <img src={foto} alt="Foto de perfil" className='profile-picture' />
      <h1 className='home-name'>Jerson Herrera</h1>
      <p className='home-text'>Bienvenido a mi portafolio como desarrollador web junior backend</p>
      <a href="./hv.pdf" download="hv.pdf">
        <button type="button">Descargar HV</button>
      </a>
      <div className='social-buttons'>
        <a href="https://github.com/jerson-herrera" target="_blank" rel="noopener noreferrer" className="social-button">
          <img src={github} alt="GitHub" className="social-icon" /> GitHub
        </a>
        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="social-button">
          <img src={linkedin} alt="Linkedin" className="social-icon" /> Linkedin
        </a>
      </div>
    </div>
  )
}
