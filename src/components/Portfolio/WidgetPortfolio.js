
import "./Portfolio.scss";

export const WidgetPortfolio = ({info}) => {
   return(
      <div className="widget">
         <p>{info.descripcion}</p>
      </div>
   )
}