import { createContext, useContext, useState } from "react";

export const AuthContext = createContext({
    isAuthenticated: false
});

export function AuthtProvider(props){

    const [isAuthenticated, setIsAuthenticated] = useState(false)


    return(
        <AuthContext.Provider
        value={{
             isAuthenticated:isAuthenticated
        }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext)



// import { useContext, createContext, useState, useEffect } from "react";

// interface AuthProviderProps{
//     children: React.ReactNode;
// }

// const AuthContext = createContext({
//     isAuthenticated: false,
// });

// export function AuthProvider({children}: AuthProviderProps){
    
//     const [isAuthenticated, setIsAuthenticated] = useState(false);
//     return <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated}}>{children}</AuthContext.Provider>
// }