import React from "react";
import FotoStefano from "../../img/photos/stefano.png"
import "./SobreMi.scss";

export const SobreMi = () => {
  return (
    <div id="sobre-mi-content">
      <div id="sobre-mi">
        <div id="foto-content">
          <div id="burbuja">
            <img src={FotoStefano} alt="" />
          </div>
        </div>
        <div id="data">
          <h1>SOBRE MÍ</h1>
          <div className="text-content">
            <p className="title">“Soy realizador audiovisual, locutor y periodista”</p>
            <p className="text">
              Trabajo en medios de comunicación desde hace 10 años en funciones diversas, desde técnicas hasta creativas y siempre me gustó crear contenidos, por eso me defino como productor de medios.
            </p>
          </div>
          <div className="text-content">
            <p className="title">“En 2018 fundé Grama Media, productora especializada en podcast y livestreaming”</p>
            <p className="text">
              Tiene base en Bahía Blanca pero que realizo contenidos para todo LATAM y habla hispana. Además, soy docente en el área audiovisual de la Universidad Salesiana y me dedico a ofrecer soluciones prácticas de comunicación, brindando consultorías, talleres y produciendo contenidos en formato sonoro y audiovisual para marcas, emprendedores y organizaciones.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
