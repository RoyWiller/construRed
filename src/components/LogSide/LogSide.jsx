import {ReactComponent as User} from "../../assets/icons/user.svg"
import {ReactComponent as Lock} from "../../assets/icons/lock.svg"
import {ReactComponent as AlertIcon} from "../../assets/icons/alert-icon.svg"
import './LogSide.css'
import { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { useAuth } from "../../context/AuthProvider";
import { API_URL } from "../../context/constants";

export function LogSide(){

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [errorResponse, setErrorResponse] = useState("")

    const {saveUser} = useContext(AuthContext)
    
    const auth = useAuth();
    const goTo = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();

        
        try {
            const response = await fetch(`${API_URL}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    password
                }),
            });
            if (response.ok){
                console.log("Login Succesful");
                setErrorResponse("");
                saveUser()
                goTo("/inicio")
            }else{
                console.log("Something went wrong");
                const json = await response.json();
                setErrorResponse(json.body.error)
                setTimeout(()=>{
                    setErrorResponse("")
                }, 2000)
            }
        } catch (error) {
            console.log(error);
        }
    }


    if (auth.isAuthenticated) {return <Navigate to="/inicio"/>}

    return(
        <div className="log-side">
            <h3>Login</h3>
            {!!!errorResponse ? <div></div> : <div className="error-message">
                <AlertIcon/>
                <p>{errorResponse}</p>
                </div>}
            <form action="" className='form-login' onSubmit={(e)=>handleSubmit(e)}>
                <label htmlFor="">Usuario</label>
                <div className="label-content">
                    <User />
                    <input type="text" placeholder="Ingresa tu usuario" 
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    />
                </div>
                <label htmlFor="">Contraseña</label>
                <div className="label-content">
                    <Lock />
                    <input type="password" placeholder="Ingresa tu contraseña" value={password} 
                    onChange={(e)=>setPassword(e.target.value)} 
                    />
                </div>
                <div className="password-cover">
                    <span>Olvidaste tu contraseña?</span>
                    <a href="#">Recover here</a>
                </div>
                <input type="submit" value="Login"/>
            </form>
            <div className="registrer-div">
                <p>Don't you have account?</p>
                <p>Sign Up <Link to="/sign-up">Here</Link></p>
            </div>
        </div>
    );
}