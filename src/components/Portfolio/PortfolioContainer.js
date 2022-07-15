import { Portfolio } from "./Portfolio"
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase/FirebaseConfig"

export const PortfolioContainer = () => {

    let [lista, setLista] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getDocs(collection(db, "portfolio"))
            .then(res=> setLista(res.docs.map(item => ({id: item.id, ...item.data()}))))
            .finally(res=>{ setLoading(false) })
        }, [])
    
    return (
        <div id="portfolio-content">  
            {
            loading?
                <div>Cargando...</div>
            :
                <Portfolio lista = {lista}/>
            }
        </div>

    )
}