import { CardServicios } from "./CardServicios";
import "./Servicios.scss";

export const infoCards = [
  {
    title: "Locucion",
    imagen: "",
    descripcion:
      "Desde mi home studio y en menos de 24hs, le pongo voz a la idea que quieras comunicar o vender. En la sección portfolio podes encontrar mis DEMOS con trabajos de locución realizados anteriormente.",
  },
  {
    title: "Diseño de sonido",
    imagen: "",
    descripcion:
      "Edición y mezcla de audio, reducción de ruidos, creación de artística sonora para podcast y radio, diseño la identidad sonora de la historia que quieras contar.",
  },
  {
    title: "Creación de contenidos",
    imagen: "",
    descripcion:
      "Creación de estrategia de contenidos en redes sociales, diseño y publicación de piezas visuales y audiovisuales, edición de video, y consultoría integral en medios digitales.",
  },

  {
    title: "Consultoria personalizada",
    imagen: "",
    descripcion:
      "Asesoramiento estratégico para marcas, empresas, profesionales y creadores independientes que busquen iniciar o potenciar su estrategia de comunicación digital utilizando las herramientas del podcasting y las redes sociales.",
  },
];

export const Servicios = () => {
  return (
    <div id="servicios">
      <div id="container-texto-servicios">
        <h3>SERVICIOS</h3>
        <p>
          ¡Mi misión es darle forma a tus ideas! Contame lo que tenés en mente y
          lo construimos juntos.
        </p>
      </div>
      {infoCards.map((data) => {
        return <CardServicios data={data} />;
      })}
    </div>
  );
};
