import { createContext, useState } from "react";


export const ArrayContext = createContext();
export const ArrayProvider = ({children})=>{
    const [data, setData] = useState([])
    // const [objdata, setObjdata] = useState({})
        
    

    return(
        <ArrayContext.Provider value={{data,setData}}>
            {children}
        </ArrayContext.Provider>
    )
}