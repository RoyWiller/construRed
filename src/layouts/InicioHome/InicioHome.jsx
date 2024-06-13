import { AsideBar } from "../AsideBar/AsideBar";

import { ProyectosContext } from "../../context/ProyectosContext";
import { useContext } from "react";

export function InicioHome(){

    const {sideBarOpen, setSideBarOpen} = useContext(ProyectosContext)
    return(
        <div className={sideBarOpen === true ? "home-container active":"home-container"}>
            <AsideBar 
        setSideBarOpen={setSideBarOpen}
        sideBarOpen={sideBarOpen}/>
        <div>
            <h1>Inicio</h1>
        </div>
        </div>
    );
}