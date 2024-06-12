import {ReactComponent as User} from "../../assets/icons/user.svg"
import {ReactComponent as Lock} from "../../assets/icons/lock.svg"
import './LogSide.css'

export function LogSide(){
    return(
        <div className="log-side">
            <h3>Login</h3>
            <form action="" className='form-login'>
                <label htmlFor="">Usuario</label>
                <div className="label-content">
                    <User />
                    <input type="text" placeholder="Ingresa tu usuario"/>
                </div>
                <label htmlFor="">Contraseña</label>
                <div className="label-content">
                    <Lock />
                    <input type="password" placeholder="Ingresa tu contraseña"/>
                </div>
                <div className="password-cover">
                    <span>Olvidaste tu contraseña?</span>
                    <a href="#">Recover here</a>
                </div>
                <input type="submit" value="Login"/>
            </form>
            <div className="registrer-div">
                <p>Don't you have account?</p>
                <p>Sign Up <a href="#">Here</a></p>
            </div>
        </div>
    );
}