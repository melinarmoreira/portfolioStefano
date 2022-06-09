import { useState } from "react";
import "./Portfolio.scss";
import { WidgetPortfolio } from "./WidgetPortfolio";
// import { portfolio } from "../Helper/Helper";
import Select from "react-select";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";


import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

const options = [
  { value: "todo", label: "Todo" },
  { value: "podcast", label: "Podcast" },
  { value: "locucion", label: "Locucion" },
  { value: "disenio", label: "Diseño de sonido" },
  { value: "comunicacion", label: "Comunicación" },
];

export const Portfolio = (lista) => {

  const [value, setValue] = useState("todo");
  const [nuevaInfo, setNuevaInfo] = useState(lista.lista);
  const [cantSlides, setCantSlides] = useState(3)

  const onDropDownChange = (value) => {

    if (value.value !== "todo") {
      setValue(value);
      const filteredData = lista.lista.filter(
        (item) => item.categoria === value.value
      );
      setNuevaInfo(filteredData)
      //cambia la cantidad de items mostrados dependiendo la longitud del array
      modifSlides(filteredData)
    } else {
      setNuevaInfo(lista.lista);
      setCantSlides(3)
    }
  };
  const modifSlides = (filteredData) => {
    if(filteredData.length === 1){
      setCantSlides(1)
    }else if(filteredData.length === 2){
      setCantSlides(2)
    }else if(filteredData.length > 2){
      setCantSlides(3)
    }
  }




  return (
    <div id="portfolio-content">
      <div id="portfolio">
        <div id="texto-portfolio">
          <h2>PORTFOLIO</h2>
          <p>¡Aqui te presento algunos de mis ultimos proyectos!</p>
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
            <Swiper
            style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-navigation-background":"fff",
          }}
            slidesPerView={cantSlides}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper">

              {console.log(nuevaInfo)}
              {
                nuevaInfo.map((info) => {
                  return(
                  <SwiperSlide key={info.id}>
                      <WidgetPortfolio info={info} key={info.id} />
                    </SwiperSlide>
                  )
                })
              }
          </Swiper>
        </div>
      </div>
    </div>
  );
}
