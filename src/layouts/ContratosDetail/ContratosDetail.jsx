import { GreetingHome } from "../../components/GreetingHome/GreetingHome"
import {ReactComponent as LeftArrow} from "../../assets/icons/left-arrow.svg"
import {ReactComponent as ListIcon} from "../../assets/icons/list.svg"
import {ReactComponent as TrashIcon} from "../../assets/icons/trash.svg"
import {ReactComponent as PrintIcon} from "../../assets/icons/print.svg"
import { DocumentosDetail } from "../../components/DocumentosDetail/DocumentosDetail"
import { Link } from "react-router-dom"

import { ProyectosContext } from "../../context/ProyectosContext"
import { useContext } from "react"

export function ContratosDetail(){
   const {openResumenDocument} = useContext(ProyectosContext)
    return(
        <div className="Contrats-Container">
            <GreetingHome/>
            <div className="content-directions">
                <div className="arrow-back">
                    <Link to="/contratos">
                        <LeftArrow/>
                    </Link>
                </div>
                <ul className="content-stuff">
                    <li onClick={(e)=>{
                        openResumenDocument()
                    }}><ListIcon/></li>
                    <li><TrashIcon/></li>
                    <li><PrintIcon/></li>
                </ul>
            </div>
            <DocumentosDetail />
        </div>
    );
}