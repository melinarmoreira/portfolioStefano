import { useState } from "react";
import "./Portfolio.scss";
import { WidgetPortfolio } from "./WidgetPortfolio";
import { portfolio } from "../Helper/Helper";
import Select from "react-select";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";


import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

// import "./styles.scss";
// const styles: StylesConfig < ColourOption, false> = {
//   control: (css) => ({ ...css, display: '' }),
// };

///firestore






 



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


 
//   useEffect(() => {
//     const obtenerDatos = async () => {
//       const datos = await getDocs(collection(db, "portfolio"));
//       console.log(datos)
//       datos.forEach((documento) =>  {
//         console.log(documento.data)
//       });
//     }

//     obtenerDatos();

// }, [])

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
            // styles={styles}
            placeholder="Selecciona"
            

          />
        </div>
        <div className="widgets">
            <Swiper
            style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-navigation-background":"fff",
          }}
            slidesPerView={3}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper">

              {nuevaInfo.map((info) => {
                return (
                  <SwiperSlide>
                    <WidgetPortfolio info={info} key={info.id} />
                  </SwiperSlide>
                )
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
