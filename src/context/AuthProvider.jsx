import { createContext, useContext, useState } from "react";

export const AuthContext = createContext({
    isAuthenticated: false
});

export function AuthtProvider(props){

    const [isAuthenticated, setIsAuthenticated] = useState(false)

    function saveUser(){
        setIsAuthenticated(!isAuthenticated)
    }


    return(
        <AuthContext.Provider
        value={{
             isAuthenticated:isAuthenticated,
             saveUser:saveUser
        }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext)

