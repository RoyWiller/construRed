import { createContext } from "react";

export const ProyectosContext = createContext();

export function ProyectosContextProvider(props){

    function openDocuemnt(){
        
    }

    return(
        <ProyectosContext.Provider
        value={{
            openDocuemnt:openDocuemnt
        }}>
            {props.children}
        </ProyectosContext.Provider>
    );
}