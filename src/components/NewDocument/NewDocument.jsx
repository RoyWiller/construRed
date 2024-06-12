import './NewDocument.css'

export function NewDocument(){
    return(
        <div className="createDocument-container">
            <div className="newDocument-content">
                <div className="priority-content">
                    <div className="priority-title">
                        <h3>Prioridad</h3>
                        <span>Seleccione la prioridad con la que se ejecutará el proyecto</span>
                    </div>
                    <ul className="level-priority">
                        <li>Medium</li>
                        <li>High</li>
                        <li>Low</li>
                    </ul>
                </div>
                <div>
                    <div>
                        <h3>Datos Empresa</h3>
                        <ul>
                            <li>
                                <label htmlFor="">Nombre:</label>
                                <input type="text" />
                            </li>
                            <li>
                            <label htmlFor="">RUC:</label>
                            <input type="text" />
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div>
                            <h3>Datos del equipo</h3>
                            <ul>
                                <li>
                                    <label htmlFor="">Supervisor:</label>
                                    <input type="text" />
                                </li>
                                <li>
                                <label htmlFor="">Director:</label>
                                <input type="text" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
}