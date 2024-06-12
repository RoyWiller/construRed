import './NewDocument.css'

export function NewDocument(){
    return(
        <div className="createDocument-container">
            <form className="newDocument-content">
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
                <div className='data-empresas-container'>
                    <div>
                        <h3>Datos Empresa</h3>
                        <ul className='inputs-data-content'>
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
                        <h3>Datos del equipo</h3>
                            <ul className='inputs-data-content'>
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
                <div className='proyect-data-container'>
                    <h3>Datos del Proyecto</h3>
                    <div className='proyect-inputs-content'>
                        <div className='fecha-info-inputs'>
                            <div>
                                <label htmlFor="">Fecha de inicio: </label>
                                <input type="date" />
                            </div>
                            <div>
                                <label htmlFor="">Fecha de finalizacion: </label>
                                <input type="date" />
                            </div>
                            <div>
                                <label htmlFor="">Tipo de proyecto: </label>
                                <input type="text" />
                            </div>
                            <div>
                                <label htmlFor="">Descripción: </label>
                                <textarea name="" id=""></textarea>
                            </div>
                        </div>
                        <div>
                            <h3>Supervisor</h3>
                        </div>
                    </div>
                </div>
                <div className='submit-proyect-content'>
                    <input type="submit" value="Guardar"/>
                    <button>Cancelar</button>
                </div>
            </form>
        </div>
    );
}