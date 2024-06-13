import {ReactComponent as HomeIcon} from '../../assets/icons/home.svg'
import {ReactComponent as DocumentIcon} from '../../assets/icons/document.svg'
import {ReactComponent as PhoneIcon} from '../../assets/icons/phone-icon.svg'
import {ReactComponent as MessageIcon} from '../../assets/icons/message.svg'
import {ReactComponent as PerfilIcon} from '../../assets/icons/user-icon.svg'
import {ReactComponent as FolderIcon} from '../../assets/icons/folder-icon.svg'
import {ReactComponent as WalletIcon} from '../../assets/icons/card-icon.svg'
import './SideBarItems.css'
import { Link } from 'react-router-dom'


export function SideBarItems({sideBarOpen}){
    return(
        <ul className={sideBarOpen === true ? "list-content close": "list-content"}>
            <li className="list-items">
                <Link to="/">
                    <HomeIcon />
                    <span>Inicio</span>
                </Link>
            </li>
            <li className="list-items">
                <Link to="/">
                    <PerfilIcon />
                    <span>Perfil</span>
                </Link>
            </li>
            <li className="list-items">
                <Link to="/">
                    <FolderIcon />
                    <span>Proyectos</span>
                </Link>
            </li>
            <li className="list-items">
                <Link to="/contratos">
                    <DocumentIcon />
                    <span>Documentos</span>
                </Link>
            </li>
            <li className="list-items">
                <Link>
                    <WalletIcon />
                    <span>Pagos</span>
                </Link>
            </li>
            <li className="list-items">
                <Link>
                    <MessageIcon />
                    <span>Mensajes</span>
                </Link>
            </li>
            <li className="list-items">
                <Link>
                    <PhoneIcon />
                    <span>Atención al cliente</span>
                </Link>
            </li>
        </ul>
    );
}