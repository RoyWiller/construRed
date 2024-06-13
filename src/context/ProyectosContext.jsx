import { createContext, useState } from "react";

export const ProyectosContext = createContext();

export function ProyectosContextProvider(props){

    // * React useState
    const [sideBarOpen, setSideBarOpen] = useState(false)

    const [resumeOpen, setResumeOpen] = useState(false)


    return(
        <ProyectosContext.Provider
        value={{
             sideBarOpen: sideBarOpen,
             setSideBarOpen: setSideBarOpen,
             resumeOpen : resumeOpen,
             setResumeOpen: setResumeOpen
        }}>
            {props.children}
        </ProyectosContext.Provider>
    );
}