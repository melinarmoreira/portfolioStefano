import { Carrousel } from "./Carrousel";

export const Clientes = () => {
  return (
    <div className="container-clientes">
      <div id="container-texto-clientes">
        <h4>CLIENTES</h4>
        <p>¡Aquí te presento algunos clientes que confían en mi trabajo!</p>
      </div>
      <Carrousel />
    </div>
  );
};
