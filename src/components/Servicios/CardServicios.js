import "./Servicios.scss";


export const CardServicios = ({data}) => {
  return (
    <div class="container-card-servicios">
      <div id="circle"></div>
      <h4>{data.title}</h4>
      <p>{data.descripcion}</p>
    </div>
  );
};
