import { useState } from "react";
import "./Portfolio.scss";
import { WidgetPortfolio } from "./WidgetPortfolio";
import { portfolio } from "../Helper/Helper";
import Select from "react-select";

const options = [
  { value: "todo", label: "Todo" },
  { value: "podcast", label: "Podcast" },
  { value: "locucion", label: "Locucion" },
  { value: "disenio", label: "Diseño de sonido" },
  { value: "comunicacion", label: "Comunicación" },
];

export const Portfolio = () => {
  const [value, setValue] = useState(null);
  const [info] = useState(portfolio);
  const [nuevaInfo, setNuevaInfo] = useState(portfolio);

  const onDropDownChange = (value) => {

    if (value.value !== "todo") {
      setValue(value);
      const filteredData = info.filter(
        (item) => item.categoria === value.value
      );
      setNuevaInfo(filteredData);
    } else {
      setNuevaInfo(portfolio);
    }
  };

  return (
    <>
      <div id="container-portfolio">
        <div id="texto-portfolio">
        <h1>PORTFOLIO</h1>
        <h2>¡Aqui te presento algunos de mis ultimos proyectos!</h2>
        </div>
        <div>
          <Select
            id="select"
            value={value}
            options={options}
            onChange={onDropDownChange}
            placeholder="Selecciona"
          />
        </div>
        <div className="widgets">
          {nuevaInfo.map((info) => {
            return <WidgetPortfolio info={info} key={info.id} />
          })}
        </div>
      </div>
    </>
  );
};
