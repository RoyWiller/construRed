import {ReactComponent as HomeIcon} from '../../assets/icons/home.svg'
import {ReactComponent as DocumentIcon} from '../../assets/icons/document.svg'
import {ReactComponent as SettingIcon} from '../../assets/icons/gear.svg'
import {ReactComponent as MessageIcon} from '../../assets/icons/message.svg'
import './SideBarItems.css'
import { Link } from 'react-router-dom'


export function SideBarItems(){
    return(
        <ul className='list-content'>
            <li className='list-items'>
                <Link to="/inicio">
                    <HomeIcon />
                    <span>Inicio</span>
                </Link>
            </li>
            <li className='list-items'>
                <Link to="/contratos">
                    <DocumentIcon />
                    <span>Contratos de venta</span>
                </Link>
            </li>
            <li className='list-items'>
                <Link>
                    <SettingIcon />
                    <span>Ajustes</span>
                </Link>
            </li>
            <li className='list-items'>
                <Link>
                    <MessageIcon />
                    <span>Mensajes</span>
                </Link>
            </li>
        </ul>
    );
}