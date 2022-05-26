import "./Portfolio.scss";

export const WidgetPortfolio = ({ info }) => {
   return (
      <div className="widget">
         <a href={info.url}>
            <img src={info.imagen} className="img-widget" alt={info.descripcion}></img>
            <div className="txt-widget">
            <p>{info.descripcion}</p>
            </div>
         </a>
      </div >
) 
}