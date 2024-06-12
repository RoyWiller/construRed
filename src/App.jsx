import './App.css';
import { AsideBar } from './layouts/AsideBar/AsideBar';
import { ContratosDetail } from './layouts/ContratosDetail/ContratosDetail';
import { ContratosList } from './layouts/ContratosList/ContratosList';
import { CreateDocument } from './layouts/CreateDocument/CreateDocument';
import { InicioHome } from './layouts/InicioHome/InicioHome';
import { AddNewFile } from './layouts/AddNewFile/AddNewFile';
import { Home } from './views/Home/Home';
import { Login } from './views/Login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ProyectosContext } from "./context/ProyectosContext";
import { useContext } from "react";

function App() {
  const {sideBarOpen, setSideBarOpen} = useContext(ProyectosContext)
  
  return (
    <div className={sideBarOpen === true ? "home-container active":"home-container"}>
      <Router>
        <AsideBar 
        setSideBarOpen={setSideBarOpen}
        sideBarOpen={sideBarOpen}/>
        <Routes>
          <Route path="/" element={<InicioHome/>}/>
          <Route path="/contratos" element={<ContratosList/>}/>
          <Route path="/contratos/create-contrato" element={<CreateDocument/>}/>
          <Route path="/contratos/detail" element={<ContratosDetail/>}/>
          <Route path="/contratos/detail/new-file" element={<AddNewFile/>}/>
        </Routes>
      </Router>    
    </div>
  );
}

export default App;
