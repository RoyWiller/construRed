import { AsideBar } from "../../layouts/AsideBar/AsideBar"
import { ContratosList } from "../../layouts/ContratosList/ContratosList"
import { CreateDocument } from "../../layouts/CreateDocument/CreateDocument";

export function Home(){
    return(
        <div className="home-container">
            <AsideBar />
            <CreateDocument />
        </div>
    );
}