import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const updateIsAuthenticated = (value: boolean) => {
        setIsAuthenticated(value);
    };
    return (
        <AuthContext.Provider
            value={{ isAuthenticated, updateIsAuthenticated }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export { useAuthContext, AuthProvider };
