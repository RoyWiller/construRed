import {ReactComponent as User} from "../../assets/icons/user.svg"
import {ReactComponent as Lock} from "../../assets/icons/lock.svg"
import {ReactComponent as AtIcon} from "../../assets/icons/at-icon.svg"
import './RegistrerSide.css'

import { Link } from "react-router-dom";

export function RegistrerSide(){
    return(
        <div className="log-side">
            <h3>Create Account</h3>
            <form action="" className='form-login'>
                <label htmlFor="">Usuario</label>
                <div className="label-content">
                    <User />
                    <input type="text" placeholder="Nombre de Usuario"/>
                </div>
                <label htmlFor="">Correo</label>
                <div className="label-content">
                    <AtIcon />
                    <input type="text" placeholder="Correo electrónico"/>
                </div>
                <label htmlFor="">Contraseña</label>
                <div className="label-content">
                    <Lock />
                    <input type="password" placeholder="Ingresar contraseña"/>
                </div>
                <input type="submit" value="Registrer" className="input-registrer-submit"/>
            </form>
            <div className="registrer-div">
                <p>Do you already have an account?</p>
                <p>Log In <Link to="/">Here</Link></p>
            </div>
        </div>
    );
}