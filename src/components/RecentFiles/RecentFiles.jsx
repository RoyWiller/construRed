import { FilesItems } from "../FilesItems/FilesItems";
import './RecentFiles.css'

export function RecentFiles(){
    return(
        <div className="recent-files-container">
            <h3>Subidos Recientemente</h3>
            <div className="files-content">
                <FilesItems />
                <FilesItems />
            </div>
        </div>
    );
}