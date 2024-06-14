import { AsideBar } from "../AsideBar/AsideBar";

import { ProyectosContext } from "../../context/ProyectosContext";
import { useContext } from "react";
import { GreetingHome } from "../../components/GreetingHome/GreetingHome";
import { GraficasCircular } from "../../components/GraficasCircular/GraficasCircular";
import { RecentFiles } from "../../components/RecentFiles/RecentFiles";
import { BarGrafico } from "../../components/BarGrafico/BarGrafico";
import './InicioHome.css'
export function InicioHome(){

    const {sideBarOpen, setSideBarOpen} = useContext(ProyectosContext)
    return(
        <div className={sideBarOpen === true ? "home-container active":"home-container"}>
            <AsideBar 
        setSideBarOpen={setSideBarOpen}
        sideBarOpen={sideBarOpen}/>
        <div className="Contrats-Container">
            <GreetingHome/>
            <div className="main-content-grid">
                <GraficasCircular />
                <RecentFiles />
                <BarGrafico />
                <div>

                </div>
                <div>
                    
                </div>
            </div>
            
        </div>
        </div>
    );
}