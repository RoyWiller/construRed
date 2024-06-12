import { LogSide } from "../../components/LogSide/LogSide";
import LogoConstrucRed from "../../assets/logo/logo.png"

export function Login(){
    return(
        <div className="Login-Content-all">
            <div className="login-title">
                <img src={LogoConstrucRed} alt="" className="logo-enterprise"/>
                <h2>ConstruRed</h2>
            </div>
            <div className="container-loger">
                <LogSide />
            </div>
        </div>
    );
}