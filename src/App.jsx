import './App.css';
import { ContratosDetail } from './layouts/ContratosDetail/ContratosDetail';
import { ContratosList } from './layouts/ContratosList/ContratosList';
import { CreateDocument } from './layouts/CreateDocument/CreateDocument';
import { InicioHome } from './layouts/InicioHome/InicioHome';
import { AddNewFile } from './layouts/AddNewFile/AddNewFile';
import { Home } from './views/Home/Home';
import { Login } from './views/Login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { AuthtProvider } from './context/AuthProvider';

import { ProtectedRoute } from './routes/ProtectedRoute';
import { Registrer } from './views/Registrer/Registrer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/sign-up",
    element: <Registrer/>
  },
  {
    path: "/",
    element: <ProtectedRoute/>,
    children: [
      {
        path: "/inicio",
        element: <InicioHome/>
      }
    ]
  },
  {
    path: "/contratos",
    element: <ContratosList/>
  },
  {
    path: "/contratos/create-contrato",
    element: <CreateDocument/>
  },
  {
    path: "/contratos/detail",
    element: <ContratosDetail/>
  },
  {
    path: "/contratos/detail/new-file",
    element: <AddNewFile/>
  },

]);

function App() {
  
  return (
    <div>
      <AuthtProvider>
        <RouterProvider router={router} />
      </AuthtProvider>
      {/* <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path="/" element={<InicioHome/>}/>
          <Route path="/contratos" element={<ContratosList/>}/>
          <Route path="/contratos/create-contrato" element={<CreateDocument/>}/>
          <Route path="/contratos/detail" element={<ContratosDetail/>}/>
          <Route path="/contratos/detail/new-file" element={<AddNewFile/>}/>
        </Routes>
      </Router>     */}
    </div>
  );
}

export default App;