import React from "react";
import FotoStefano from "../../img/photos/stefano.png"
import { useMediaQuery } from 'react-responsive'
import "./SobreMi.scss";

export const SobreMi = () => {
  const max = useMediaQuery({ query: '(max-width: 1023px)' })

  return (
    <div id="sobre-mi-content">
      <div id="sobre-mi">
        {
          max?
            <div className="data" style={{padding:"0"}}>
              <h1>SOBRE MÍ</h1>
            </div>
          :
          <></>
        }
        <div id="foto-content">
          <div id="minor-burb"></div>
          <div id="mayor-burb"></div>
          <div id="burbuja">
            <img src={FotoStefano} alt="" />
          </div>
        </div>
        <div className="data">
        {
          !max?
            <h1>SOBRE MÍ</h1>
          :
          <></>
        }
          <div className="text-content">
            <p className="title">“Soy realizador audiovisual, locutor y periodista”</p>
            <p className="text">
              Trabajo en medios de comunicación desde hace 10 años en funciones diversas, desde técnicas hasta creativas y siempre me gustó crear contenidos, por eso me defino como productor de medios.
            </p>
          </div>
          <div className="small-burbuja"></div>
          <div className="text-content">
            <p className="title">“En 2018 fundé Grama Media, productora especializada en podcast y livestreaming”</p>
            <p className="text">
              Tiene base en Bahía Blanca pero que realizo contenidos para todo LATAM y habla hispana. Además, soy docente en el área audiovisual de la Universidad Salesiana y me dedico a ofrecer soluciones prácticas de comunicación, brindando consultorías, talleres y produciendo contenidos en formato sonoro y audiovisual para marcas, emprendedores y organizaciones.
            </p>
          </div>
          <div className="small-burbuja"></div>
          <div className="text-content">
            <p className="title">“Soy profesional freelancer”</p>
            <p className="text">
              Produzco contenidos para redes sociales de diversas marcas y le pongo voz a proyectos, radios y publicidades trabajando para varias agencias y clientes particulares de Latinoamérica.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
