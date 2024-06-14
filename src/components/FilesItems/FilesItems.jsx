import {ReactComponent as PdfIcon} from "../../assets/icons/adove-icon.svg"
import {ReactComponent as DownloadIcon} from "../../assets/icons/download-icon.svg"
import './FilesItems.css'
export function FilesItems(){
    return(
        <div className="files-items-container">
            <PdfIcon />
            <div className="files-info-item">
                <span>term_condiciones_FIG-123</span>
                <span>23 pages ● PDF ● 120MB</span>
            </div>
            <DownloadIcon/>
        </div>
    );
}