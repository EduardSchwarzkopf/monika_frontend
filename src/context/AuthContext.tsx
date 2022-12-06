import { createContext, useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { request } from "../service/request";

const AuthContext = createContext();

const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
    const { isSuccess } = useQuery(
        "auth",
        () => {
            return request({ url: "/users/me" });
        },
        {
            retry: false,
        }
    );

    const [isAuthenticated, setIsAuthenticated] = useState(isSuccess);

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
