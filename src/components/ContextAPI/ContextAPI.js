
import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import db from "../../firebase/FirebaseConfig"
import { async } from "@firebase/util";
import { doc, getDoc } from "firebase/firestore";




export const ContextAPI = () => {

const [lista, setLista] = useState([])

useEffect(() => {
        const getLista = async () => {
            try {
                
                const querySnapshot = await getDocs(collection(db, "portfolio"))
                const docs = []
                querySnapshot.forEach((doc) => {
                    docs.push({ ...doc.data(), id: doc.id })
                })
                setLista(docs)
            }
            catch (error) {
                console.log(error)
            }
        }
        getLista()
    }, [])

console.log(lista)

return (
    <div>
        <p>hola</p>
    </div>
)
}

