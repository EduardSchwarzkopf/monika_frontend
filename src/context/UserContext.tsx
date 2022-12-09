import { createContext, useContext, useState } from "react";
import { ChildrenProp } from "../types/ReactTypes";

type UserContextType = {
    user: {
        email: string;
        id: string;
        is_active: boolean;
        is_superuser: boolean;
        is_verified: boolean;
    };
    updateUser: Function;
    setUser: Function;
};

const EmptyUser = {
    email: "",
    id: "",
    is_active: false,
    is_superuser: false,
    is_verified: false,
};

const UserContext = createContext<UserContextType>({
    user: EmptyUser,
    updateUser: () => {},
    setUser: () => {},
});

const useUserContext = (): UserContextType => useContext(UserContext);

type userValueProp = string | Number | boolean | object;

const UserProvider = ({ children }: ChildrenProp) => {
    const [user, setUser] = useState(EmptyUser);

    const updateUser = (key: string, value: userValueProp) => {
        setUser((prevUser) => ({ ...prevUser, [key]: value }));
    };

    return (
        <UserContext.Provider value={{ user, updateUser, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export { useUserContext, UserProvider };
