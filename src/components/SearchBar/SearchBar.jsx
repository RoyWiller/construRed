import {ReactComponent as SearchIcon} from '../../assets/icons/search.svg'
import './SearchBar.css'

export function SearchBar(){
    return(
        <div className='SearchBar-all'>
            <div className='searchBar-content'>
                <input type="text" placeholder='Search'/>
                <SearchIcon />
            </div>
        </div>
    );
}