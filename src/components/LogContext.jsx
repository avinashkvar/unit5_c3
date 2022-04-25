


import { createContext, useState } from "react";


export const Tempcontext = createContext()
export const Tempcontextprovider = ({ children }) => {
    const [isAuth, setisAuth] = useState(false)
    function toggleAuth(data) { 
        console.log(data)
        setisAuth((p) => {
            return !p
        })
    }
    return <Tempcontext.Provider value ={{isAuth,toggleAuth}}>{children}</Tempcontext.Provider>
}

