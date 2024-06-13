import { ContratosItems } from "../../components/ContratosItems/ContratosItems";
import './ContratosList.css'
import {ReactComponent as LeftArrow} from "../../assets/icons/left-arrow.svg"
import {ReactComponent as ListIcon} from "../../assets/icons/list.svg"
import {ReactComponent as CategoryIcon} from "../../assets/icons/category.svg"
import {ReactComponent as CalendarIcon} from "../../assets/icons/calendar.svg"
import { GreetingHome } from "../../components/GreetingHome/GreetingHome";
import { Link } from "react-router-dom";
import { AsideBar } from "../AsideBar/AsideBar";

import { ProyectosContext } from "../../context/ProyectosContext";
import { useContext } from "react";

export function ContratosList(){

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
                    <Link to="/inicio">
                        <LeftArrow/>
                    </Link>
                </div>
                <ul className="content-stuff">
                    <li><ListIcon/></li>
                    <li><CategoryIcon/></li>
                    <li>
                        <CalendarIcon/>
                        <input type="date" className="calendar-input"/>
                    </li>
                </ul>
            </div>
            <div className="tablen-cotainer">
                <table className="table-contrats-all">
                    <thead>
                        <tr className="main-row-table">
                            <th>ID</th>
                            <th>Empresa</th>
                            <th>Signature date</th>
                            <th>Project</th>
                            <th>Priority</th>
                            <th>Finish date</th>
                            <th>Estado</th>
                            <th><Link to="/contratos/create-contrato">+</Link></th>
                        </tr>
                    </thead>
                    <tbody>
                        <ContratosItems />
                        <ContratosItems />
                        <ContratosItems />
                        <ContratosItems />
                        <ContratosItems />
                        <ContratosItems />
                        <ContratosItems />
                        <ContratosItems />
                        <ContratosItems />
                        <ContratosItems />
                        <ContratosItems />
                        <ContratosItems />
                        <ContratosItems />
                        <ContratosItems />
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
}