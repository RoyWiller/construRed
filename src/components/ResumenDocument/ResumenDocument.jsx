import './ResumenDocument.css'
import {ReactComponent as TrashIcon} from "../../assets/icons/trash.svg"
import {ReactComponent as PlusIcon} from "../../assets/icons/plus-icon.svg"
import { Link } from 'react-router-dom';
export function ResumenDocument(){
    return(
        <div className='resumen-project-container'>
            <div className='info-resumen-content'>
                <h3>Resumen</h3>
                <p><b>Cliente:</b> Gustavo Cerati</p>
                <p><b>Proyecto:</b> Bocanada y Ahí vamos</p>
                <p><b>Descripcion:</b> Bocanada y Ahi vamos son de los mejores albumnes que puedo haber hecho este hombre es que no tengo palabras, la perfeccion de la carrera de un solista 10/10 es esto. Gracias totales uwu</p>
            </div>
            <div className='files-project-container'>
                <div className='adjuntos-content'>
                    <h3>Adjuntos</h3>
                    <div>
                        <a href="#"><TrashIcon/></a>
                        <Link to="/contratos/detail/new-file"><PlusIcon/></Link>
                    </div>
                </div>
                <div className='content-files'>
                    <span>files</span>
                    <span>files</span>
                    <span>files</span>
                    <span>files</span>
                </div>
            </div>
        </div>
    );
}