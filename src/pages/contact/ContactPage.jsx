import React from "react";
import copy from "../../assets/contactimgs/copy.svg";
import email from "../../assets/contactimgs/email.svg";
import iconoLinkedln from "../../assets/contactimgs/LinkedIn_icono.svg"
import iconoEnviar from "../../assets/contactimgs/iconoEnviar.svg"
import "./ContactPage.css"
export const ContactPage = () => {
  const handleCopyEmail = () => {
    const inputEmail = document.getElementById("exampleInputEmail1");
    // Copiar el contenido del input al portapapeles
    inputEmail.select();
    document.execCommand("copy");
    // Deseleccionar el texto para evitar resaltarlo
    window.getSelection().removeAllRanges();
  };
  return (
    <section id="contact">
      <div className="secciones seccion-contacto">
        <h2>
          <strong>Contacto</strong>
        </h2>
        <div className="input-container">
          <div className="input-with-icon">
            <img
              src={iconoLinkedln}
              alt="Icono linkedln"
              className="icono-linkedln"
            />
            <input
              type="text"
              className="form-control input-text"
              value="Jerson Andres Herrera Galvis"
              readOnly
            />
            <img
              src={iconoEnviar}
              alt="Icono Enviar"
              className="icono-Enviar"
              id="iconoEnviar"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/feed/",
                  "_blank"
                )
              }
            />
          </div>
          <div className="input-with-icon">
            <img src={email} alt="Icono Email" className="icono-email" />
            <input
              type="email"
              className="form-control input-email"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value="jersonandresherreragalvis@gmail.com"
              readOnly
            />
            <img
              src={copy}
              alt="Icono Copy"
              className="icono-copy"
              id="iconoCopy"
              onClick={handleCopyEmail}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
