import React from "react";
import "./SobreMi.scss";

export const SobreMi = () => {
  return (
    <div id="sobre-mi">
      <div id="sobre-mi-principal">
        <div>
          <h1>Sobre Mi</h1>
        </div>
        <div id="burbuja"></div>
      </div>
      <div className="sobre-mi-txt">
        <p className="sobre-mi-p">"Soy realizador audiovisual, locutor y periodista"</p>
        <p>Trabajo en medios de comunicación desde hace 10 años en funciones diversas, desde técnicas hasta creativas y siempre me gustó crear contenidos, por eso me defino como productor de medios.</p>
      </div>
      <div className="burbuja-sz-1">
      </div>
      <div  className="sobre-mi-txt">
        <p className="sobre-mi-p">"En 2018 fundé Grama Media, productora especializada en podcast y livestreaming"</p>
        <p> que tiene base en Bahía Blanca pero que realiza contenidos para todo LATAM y habla hispana. Además, soy docente en el área audiovisual de la Universidad Salesiana y me dedico a ofrecer soluciones prácticas de comunicación, brindando consultorías, talleres y produciendo contenidos en formato sonoro y audiovisual para marcas, emprendedores y organizaciones.</p>
      </div>
      <div className="burbuja-sz-1">
      </div>
      <div className="sobre-mi-txt">
        <p className="sobre-mi-p">"Soy profesional freelance"</p>
        <p>Produzco contenidos para redes sociales de diversas marcas y le pongo voz a proyectos, radios y publicidades trabajando para varias agencias y clientes particulares de Latinoamérica.</p>
      </div>
    </div>
  );
};
