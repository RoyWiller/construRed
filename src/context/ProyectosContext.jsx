import { createContext, useState } from "react";

export const ProyectosContext = createContext();

export function ProyectosContextProvider(props){

    // * React useState
    const [sideBarOpen, setSideBarOpen] = useState(false)


    return(
        <ProyectosContext.Provider
        value={{
             sideBarOpen: sideBarOpen,
             setSideBarOpen: setSideBarOpen
        }}>
            {props.children}
        </ProyectosContext.Provider>
    );
}