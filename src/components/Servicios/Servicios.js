import React from "react";
import { BsMegaphone } from "react-icons/bs";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { FiMic } from "react-icons/fi";
import "./Servicios.scss";

export const Servicios = () => {
  return (
    <div id="servicios-content">
      <div id="servicios">
        <div id="title">
          <h2>SERVICIOS</h2>
          <h3>¡Mi misión es darle forma a tus ideas! Contame lo que tenés en mente y lo construimos juntos.</h3>
        </div>
        <div className="box-servicios">
          <div className="box">
            <div className="burbuja" style={{background:"#0E0E0ECC"}}>
              <BsMegaphone className="icon-burbuja" style={{color: "white"}}/>
            </div>
            <div className="text">
              <h4>Locución</h4>
              <h5>Desde mi home studio y en menos de 24hs, le pongo voz a la idea que quieras comunicar o vender. En la sección portfolio podes encontrar mis DEMOS con trabajos de locución realizados anteriormente.</h5>
            </div>
          </div>
          <div className="box">
            <div className="burbuja" style={{background:"#F77F00CC"}}>
              <MdOutlineHeadsetMic className="icon-burbuja" style={{color: "black"}}/>
            </div>
            <div className="text">
              <h4>Diseño de sonido</h4>
              <h5>Edición y mezcla de audio, reducción de ruidos, creación de artística sonora para podcast y radio, diseño la identidad sonora de la historia que quieras contar.</h5>
            </div>
          </div>
        </div>
        <div className="box-servicios">
          <div className="box">
            <div className="burbuja" style={{background:"#0E0E0ECC"}}>
              <AiOutlinePlayCircle className="icon-burbuja" style={{color: "white"}}/>
            </div>
            <div className="text">
              <h4>Creación de contenidos</h4>
              <h5>Creación de estrategia de contenidos en redes sociales, diseño y publicación de piezas visuales y audiovisuales, edición de video, y consultoría integral en medios digitales.</h5>
            </div>
          </div>
          <div className="box">
            <div className="burbuja" style={{background:"#F77F00CC"}}>
              <FiMic className="icon-burbuja" style={{color: "black"}}/>
            </div>
            <div className="text">
              <h4>Consultoría personalizada</h4>
              <h5>Asesoramiento estratégico para marcas, empresas, profesionales y creadores independientes que busquen iniciar o potenciar su estrategia de comunicación digital utilizando las herramientas del podcasting y las redes sociales.</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
