import { Portfolio } from "./Portfolio"
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase/FirebaseConfig"

export const PortfolioContainer = () => {

    let [lista, setLista] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

            const getLista = async () => {
                try {
                    
                    const querySnapshot = await getDocs(collection(db, "portfolio"))
                    const docs = []
                    querySnapshot.forEach((doc) => {
                        docs.push({ ...doc.data(), id: doc.id })
                    })
                    setLista(docs)
                    setLoading(false)
                }
                catch (error) {
                    console.log(error)
                }
            }
            getLista()
        }, [])
    
    return (
        <>  
            {
            loading?
                <div>Cargando...</div>
            :
                <Portfolio lista = {lista}/>
            }
        </>

    )
}