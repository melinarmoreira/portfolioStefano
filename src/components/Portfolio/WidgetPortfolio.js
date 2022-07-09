import "./Portfolio.scss";

export const WidgetPortfolio = ({ info }) => {
   return (
      <div className="widget">
         <a href={info.url} target="_blank" rel="noopener noreferrer">
            <img src={info.imagen} className="img-widget" alt={info.descripcion}></img>
            <div className="txt-widget">
            <p>{info.descripcion}</p>
            </div>
         </a>
      </div >
) 
}