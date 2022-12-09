import { createContext, useContext, useState } from "react";
import { ChildrenProp } from "../types/ReactTypes";

type AuthContextType = {
    isAuthenticated: boolean;
    updateIsAuthenticated: Function;
};

const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    updateIsAuthenticated: () => {},
});

const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }: ChildrenProp) => {
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
