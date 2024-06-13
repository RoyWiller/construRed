import {ReactComponent as LeftArrow} from "../../assets/icons/left-arrow.svg"
import {ReactComponent as PencilIcon} from "../../assets/icons/pencil.svg"
import {ReactComponent as EyeIcon} from "../../assets/icons/eye.svg"
import {ReactComponent as LeftIcon} from "../../assets/icons/left-arrow.svg"
import {ReactComponent as RightIcon} from "../../assets/icons/right-arrow.svg"
import { NewDocument } from "../../components/NewDocument/NewDocument"
import { Link } from "react-router-dom"
import { AsideBar } from "../AsideBar/AsideBar"

import { ProyectosContext } from "../../context/ProyectosContext";
import { useContext } from "react";

export function CreateDocument(){
    const {sideBarOpen, setSideBarOpen} = useContext(ProyectosContext)
    return(
        <div className={sideBarOpen === true ? "home-container active":"home-container"}>
            <AsideBar 
            setSideBarOpen={setSideBarOpen}
            sideBarOpen={sideBarOpen}/>
            <div className="Contrats-Container">
                <div className="title-main-content">
                    <h2>Crear contrato de venta</h2>
                </div>
                <div className="content-directions">
                    <div className="arrow-back">
                        <Link to="/contratos">
                            <LeftArrow/>
                        </Link>
                    </div>
                    <ul className="content-stuff">
                        <li><PencilIcon/></li>
                        <li><EyeIcon/></li>
                        <li><LeftIcon/></li>
                        <li><RightIcon/></li>
                    </ul>
                </div>
            <NewDocument/>
        </div>
        </div>
    );
}