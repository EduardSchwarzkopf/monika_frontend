import { createContext, useContext, useState } from "react";

type UserContextType = {
    email: string;
    id: string;
    is_active: boolean;
    is_superuser: boolean;
    is_verified: boolean;
};

const EmptyUser = {
    email: "",
    id: "",
    is_active: false,
    is_superuser: false,
    is_verified: false,
};

const UserContext = createContext<UserContextType>(EmptyUser);

const useUserContext = () => useContext(UserContext);

type Props = {
    children?: React.ReactNode;
};

type userValueProp = string | Number | boolean | object;

const UserProvider = ({ children }: Props) => {
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
