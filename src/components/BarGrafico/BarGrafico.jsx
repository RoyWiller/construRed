import ImgBarGraphic from "../../assets/img/bar-graphic.png"
import './BarGrafico.css'

export function BarGrafico(){
    return(
        <div className="bar-grafic-container">
            <div className="div-bar-content">
                <h3>Proyectos finalizados</h3>
                <span>2022 - 2024</span>
            </div>
            <img src={ImgBarGraphic} alt="" />
        </div>
    );
}