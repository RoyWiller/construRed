import LogoConstrucRed from "../../assets/logo/logo.png"
import { RegistrerSide } from "../../components/RegistrerSide/RegistrerSide";

export function Registrer(){
    return(
        <div className="Login-Content-all">
            <div className="login-title">
                <img src={LogoConstrucRed} alt="" className="logo-enterprise"/>
                <h2>ConstruRed</h2>
            </div>
            <div className="container-loger">
                <RegistrerSide />
            </div>
        </div>
    );
}