import './App.css';
import { AsideBar } from './layouts/AsideBar/AsideBar';
import { ContratosDetail } from './layouts/ContratosDetail/ContratosDetail';
import { ContratosList } from './layouts/ContratosList/ContratosList';
import { CreateDocument } from './layouts/CreateDocument/CreateDocument';
import { InicioHome } from './layouts/InicioHome/InicioHome';
import { Contratos } from './views/Contratos/Contratos';
import { Home } from './views/Home/Home';
import { Login } from './views/Login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="home-container">
      <Router>
        <AsideBar/>
        <Routes>
          <Route path="/" element={<InicioHome/>}/>
          <Route path="/contratos" element={<ContratosList/>}/>
          <Route path="/contratos/create-contrato" element={<CreateDocument/>}/>
          <Route path="/contratos/detail" element={<ContratosDetail/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
