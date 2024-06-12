import { SideBarItems } from "../../components/SideBarItems/SideBarItems";
import './AsideBar.css'

export function AsideBar(){
    return(
        <div className="aside-container-all">
            <div className="sideItems-bar">
            <h2 className="title-aside">ConstruRed</h2>
                <SideBarItems />
            </div>
            <div className="logout-content">
                <a href="#">Log Out</a>
            </div>
        </div>
    );
}