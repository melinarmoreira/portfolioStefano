// import { createContext, useEffect, useState } from "react";
// import { getFirestore, collection, getDocs } from "firebase/firestore";
// import db from "../../firebase/FirebaseConfig"
// import { async } from "@firebase/util";
// import { doc, getDoc } from "firebase/firestore";

// export const ItemsContext = createContext();



// export const ContextAPI = ({children}) => {

// const [lista, setLista] = useState([])

// useEffect(() => {
//         const getLista = async () => {
//             try {
                
//                 const querySnapshot = await getDocs(collection(db, "portfolio"))
//                 const docs = []
//                 querySnapshot.forEach((doc) => {
//                     docs.push({ ...doc.data(), id: doc.id })
//                 })
//                 setLista(docs)
//             }
//             catch (error) {
//                 console.log(error)
//             }
//         }
//         getLista()
//     }, [])

    
// console.log(lista)

// return (
//     <ItemsContext.Provider value={(lista)}>
//         {children}
//     </ItemsContext.Provider>
// )
// }

