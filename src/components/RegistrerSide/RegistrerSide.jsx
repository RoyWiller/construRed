import {ReactComponent as User} from "../../assets/icons/user.svg"
import {ReactComponent as Lock} from "../../assets/icons/lock.svg"
import {ReactComponent as AtIcon} from "../../assets/icons/at-icon.svg"
import {ReactComponent as BagIcon} from "../../assets/icons/bag-case.svg"
import {ReactComponent as TaskIcon} from "../../assets/icons/task-icon.svg"
import {ReactComponent as AlertIcon} from "../../assets/icons/alert-icon.svg"
import './RegistrerSide.css'
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";


export function RegistrerSide(){



    // ! Use States React
    const [name, setName] = useState("")
    const [correo, setCorreo] = useState("")
    const [password, setPassword] = useState("")
    const [puestoTrabajo, setPuestoTrabajo] = useState("")
    const [areaTrabajo, setAreaTrabajo] = useState("")
    const [errorResponse, setErrorResponse] = useState("")

    const auth = useAuth();
    const goTo = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();

        
        try {
            const response = await fetch(`http://localhost:3100/api/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    correo,
                    puestoTrabajo,
                    areaTrabajo,
                    password
                }),
            });
            if (response.ok){
                console.log("User created successfully");
                setErrorResponse("");
                goTo("/")
            }else{
                console.log("Something went wrong");
                const json = await response.json();
                setErrorResponse(json.body.error)
            }
        } catch (error) {
            console.log(error);
        }
    }

    
    if (auth.isAuthenticated) {return <Navigate to="/inicio"/>}
    
    return(
        <div className="log-side">
            <h3>Create Account</h3>
            {!!!errorResponse ? <div></div> : <div className="error-message">
                <AlertIcon/>
                <p>{errorResponse}</p>
                </div>}
            <form action="" className='form-login' onSubmit={(e)=>handleSubmit(e)}>
                <label htmlFor="">Usuario</label>
                <div className="label-content">
                    <User />
                    <input type="text" placeholder="Nombre de Usuario" value={name} 
                    onChange={(e)=>setName(e.target.value)}
                    />
                </div>
                <label htmlFor="">Correo</label>
                <div className="label-content">
                    <AtIcon />
                    <input type="email" placeholder="Correo electrónico" value={correo}
                    onChange={(e)=>setCorreo(e.target.value)} 
                    />
                </div>
                <label htmlFor="">Cargo Profesional </label>
                <div className="label-content">
                    <BagIcon />
                    <input type="text" placeholder="Puesto de trabajo" value={puestoTrabajo}
                    onChange={(e)=>setPuestoTrabajo(e.target.value)} 
                    />
                </div>
                <label htmlFor="">Área de Trabajo </label>
                <div className="label-content">
                    <TaskIcon />
                    <input type="text" placeholder="Área profesional" value={areaTrabajo}
                    onChange={(e)=>setAreaTrabajo(e.target.value)} 
                    />
                </div>
                <label htmlFor="">Contraseña</label>
                <div className="label-content">
                    <Lock />
                    <input type="password" placeholder="Ingresar contraseña" value={password}
                    onChange={(e)=>setPassword(e.target.value)} 
                    />
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