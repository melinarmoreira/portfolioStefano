
import "./Portfolio.scss";

export const WidgetPortfolio = ({info}) => {
   return(
      <div className="widget">
         <div id="box-widget"></div>
         <p>{info.descripcion}</p>
      </div>
   )
}