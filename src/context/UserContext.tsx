import { createContext, useContext, useState } from "react";

const UserContext = createContext();

const useUserContext = () => useContext(UserContext);

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const updateUser = (key, value) => {
        setUser((prevUser) => ({ ...prevUser, [key]: value }));
    };

    return (
        <UserContext.Provider value={{ user, updateUser, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export { useUserContext, UserProvider };
