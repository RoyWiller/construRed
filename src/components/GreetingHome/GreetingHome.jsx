import { SearchBar } from "../SearchBar/SearchBar";

export function GreetingHome(){
    return(
        <>
            <div className="title-main-content">
                <h2>Welcome back, Roy</h2>
                <SearchBar />
            </div>
        </>
    );
}