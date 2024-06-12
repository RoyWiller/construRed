import { SideBarItems } from "../../components/SideBarItems/SideBarItems";
import './AsideBar.css'
import { ProyectosContext } from "../../context/ProyectosContext";
import { useContext } from "react";
import LogoComplete from "../../assets/logo/logo-completed.png"
import LogoChequeto from "../../assets/logo/logo-chequeto.png"
import {ReactComponent as LogOutIcon} from "../../assets/icons/log-out.svg"

export function AsideBar({setSideBarOpen, sideBarOpen}){

    function openAsidebar(){
        setSideBarOpen(!sideBarOpen)
    }
    return(
        <div className="aside-container-all">
            <div className="sideItems-bar">
                <div className="title-aside" onClick={()=>{
                openAsidebar()
            }}>
                    <img src={LogoComplete} alt="" className={sideBarOpen === true ? "logo-grande off": "logo-grande"}/>
                    <img src={LogoChequeto} alt="" className={sideBarOpen === true ? "logo-chico": "logo-chico off"}/>
                </div>
            {/* <h2 className="title-aside" onClick={()=>{
                openAsidebar()
            }}>ConstruRed</h2> */}
                <SideBarItems 
                sideBarOpen={sideBarOpen}
                setSideBarOpen={setSideBarOpen}/>
            </div>
            <div className={sideBarOpen === true ? "logout-content close": "logout-content"}>
                <a href="#">Log Out</a>
                <LogOutIcon/>
            </div>
        </div>
    );
}