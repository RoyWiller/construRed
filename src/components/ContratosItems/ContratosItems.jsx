import './ContratosItems.css'
import { Link } from 'react-router-dom';
export function ContratosItems(){
    return(
        <>
        <tr>
            <td><Link to="/contratos/detail">FGT-123</Link></td>
            <td>Empresa 1</td>
            <td>13/09/2003</td>
            <td>Urbano</td>
            <td>Full</td>
            <td>21/04/2002</td>
            <td>Completado</td>
        </tr>
        </>
    );
}