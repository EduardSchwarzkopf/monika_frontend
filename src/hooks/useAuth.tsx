import { useState } from "react";
import { request } from "../service/request";

export const useAuth = () => {
    const signIn = async () => {
        try {
            const authresult = await request({ url: "/users/me" });
            setUser(authresult.data);
        } catch (err) {
            console.error(err);
        }
    };

    const signUp = async () => {
        // try {
        //     let authresult = await axios.post('/api/auth/signup', data);
        //     let userObj = { ...authresult.data?.createdUser };
        //     userObj.token = authresult.data?.encodedToken;
        //     setUser(userObj);
        // } catch (err) {
        //     console.error(err);
        // }
    };

    const signOut = () => {
        setUser(null);
    };

    return { user, signIn, signUp, signOut };
};
