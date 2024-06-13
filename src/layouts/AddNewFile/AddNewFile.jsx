import { GreetingHome } from "../../components/GreetingHome/GreetingHome";
import {ReactComponent as LeftArrow} from "../../assets/icons/left-arrow.svg"
import {ReactComponent as DropBoxIcon} from "../../assets/icons/dropbox-icon.svg"
import {ReactComponent as DriveIcon} from "../../assets/icons/google-drive.svg"
import { Link } from "react-router-dom";
import './AddNewFile.css'
import { ProyectosContext } from "../../context/ProyectosContext";
import { useContext } from "react";
import { AsideBar } from "../AsideBar/AsideBar";

export function AddNewFile(){
    const {sideBarOpen, setSideBarOpen} = useContext(ProyectosContext)
    return(
        <div className={sideBarOpen === true ? "home-container active":"home-container"}>
            <AsideBar 
            setSideBarOpen={setSideBarOpen}
            sideBarOpen={sideBarOpen}/>
            <div className="Contrats-Container">
                <GreetingHome/>
                <div className="content-directions">
                    <div className="arrow-back">
                        <Link to="/contratos/detail">
                            <LeftArrow/>
                        </Link>
                    </div>
                    
                </div>
                <div className="pdf-file-container">
                    <div className="file-pdf-content">
                        <div>
                            <span>Cargar archivos PDF</span>
                        </div>
                        <div>
                            <a href="">Seleccionar un archivo PDF</a>
                            <div className="files-icon-drop">
                                <DropBoxIcon/>
                                <DriveIcon/>
                            </div>
                        </div>
                        <div>
                            <span>o arrastra y suelta los documentos PDF aqui</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}