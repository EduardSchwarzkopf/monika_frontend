import axios from "axios";
import { useQuery } from "react-query";

export const useAuthentication = () => {
    return useQuery(
        "auth",
        () => {
            return axios.get("http://localhost:8000/users/me", {
                withCredentials: true,
            });
        },
        {
            retry: false,
            staleTime: Infinity,
        }
    );
};
