import { useEffect, useState } from "react";
import "./Portfolio.scss";
import { WidgetPortfolio } from "./WidgetPortfolio";
import Select from "react-select";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { useMediaQuery } from 'react-responsive'


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
  const max2 = useMediaQuery({ query: '(max-width: 1370px)' })
  const max1 = useMediaQuery({ query: '(max-width: 1033px)' })
  const [value, setValue] = useState("todo");
  const [nuevaInfo, setNuevaInfo] = useState(lista.lista);
  const [cantSlides, setCantSlides] = useState(3)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    modifSlides(lista.lista)
  }, [])
  
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
      modifSlides(lista.lista)
    }
  };
  const modifSlides = (filteredData) => {
    if(max2===true){
      if(max1===true){
        setCantSlides(1)
      }else{
        if(filteredData.length === 1){
          setCantSlides(1)
        }else if(filteredData.length >=2){
          setCantSlides(2)
        }
      }
    }else{
      if (filteredData.length === 1){
        setCantSlides(1);
      } else if(filteredData.length === 2){
        setCantSlides(2);
      } else if (filteredData.length > 2) {
        setCantSlides(3);
        console.log(3)
      }
    }
    setLoading(false)
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
                    <SwiperSlide key={info.id} className="widget-content" style={{width:"200px"}}>
                      {
                        loading?
                        <WidgetPortfolio info={""} key={info.id} style={{minWidth: "50%", minHeight: "30vh"}}/>
                        :
                        <WidgetPortfolio info={info} key={info.id} />
                      }
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
