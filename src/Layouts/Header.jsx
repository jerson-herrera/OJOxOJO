import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BurguerButtom from "./BurguerButtom";
import BgDiv from "./BgDiv";

export const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  /*CSS acomodado para solucionar el error de la navbar en dispositivos de  768px se cambio los valores del useEffect de 768px a 767px*/
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 767); // Asegúrate de que el límite sea 767px
      if (window.innerWidth > 767) {
        setClicked(false);
        document.body.classList.remove("no-scroll");
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize(); // Llama a handleResize para la carga inicial
    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.classList.remove("no-scroll");
    };
  }, []);
  /**********************************************************************************************/ 

  useEffect(() => {
    if (clicked) {
      document.body.classList.add("no-scroll"); // Agregar clase cuando se activa el menú
    } else {
      document.body.classList.remove("no-scroll"); // Remover clase cuando se desactiva el menú
    }
  }, [clicked]);

  const handleClick = () => {
    if (isMobile) {
      setClicked(!clicked);
    }
  };

  return (
    <nav className="Navbar">
      <ul className={`items ${clicked ? "active" : ""}`}>
        <li>
          <a href="#home" onClick={handleClick}>
            Inicio
          </a>
        </li>
        <li>
          <a href="#about" onClick={handleClick}>
            Sobre mi
          </a>
        </li>
        <li>
          <a href="#projects" onClick={handleClick}>
            Proyectos
          </a>
        </li>
        <li>
          <a href="#contact" onClick={handleClick}>
            Contacto
          </a>
        </li>
      </ul>

      <div className="burguer">
        <BurguerButtom clicked={clicked} handleClick={handleClick} />
      </div>
      <BgDiv className={clicked ? "active" : ""} />
    </nav>
  );
};
