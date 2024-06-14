import './GraficasCircular.css'

export function GraficasCircular(){
    return(
        <div className='grafic-circles-content'>
            <div>
                <h3>Progreso de proyectos</h3>
                <div className="circles-svg">
                    <div className='circle-1'>
                        <div className='circle-items'>
                            <svg width="150px" height="150px">
                                <circle r="65" cx="50%" cy="50%" pathLength="100"/>
                                <circle r="65" cx="50%" cy="50%" pathLength="100" style={{strokeDasharray: "75 100"}}/> 
                            </svg>
                            <span>75%</span>
                        </div>
                        <p>Proyecto A</p>
                    </div>
                    <div className='circle-2'>
                        <div className='circle-items'>
                            <svg width="150px" height="150px">
                                <circle r="65" cx="50%" cy="50%" pathLength="100"/>
                                <circle r="65" cx="50%" cy="50%" pathLength="100" style={{strokeDasharray: "58.25 100"}}/> 
                            </svg>
                            <span>58.5%</span>
                        </div>
                        <p>Proyecto B</p>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
}