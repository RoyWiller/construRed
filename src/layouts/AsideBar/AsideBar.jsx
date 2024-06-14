import { SideBarItems } from "../../components/SideBarItems/SideBarItems";
import './AsideBar.css'
import { AuthContext } from "../../context/AuthProvider";
import { useContext } from "react";
import LogoComplete from "../../assets/logo/logo-completed.png"
import LogoChequeto from "../../assets/logo/logo-chequeto.png"
import {ReactComponent as LogOutIcon} from "../../assets/icons/log-out.svg"
import { Link } from "react-router-dom";

export function AsideBar({setSideBarOpen, sideBarOpen}){

    const {saveUser} = useContext(AuthContext)

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
                <SideBarItems 
                sideBarOpen={sideBarOpen}
                setSideBarOpen={setSideBarOpen}/>
            </div>
            <div className={sideBarOpen === true ? "logout-content close": "logout-content"}>
                <Link to="/" onClick={()=>{
                    saveUser()
                }}>Log Out</Link>
                <LogOutIcon/>
            </div>
        </div>
    );
}