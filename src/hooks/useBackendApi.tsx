import { AxiosError } from "axios";
import { QueryFunction, useQuery, useQueryClient } from "react-query";
import { useAuthContext } from "../context/AuthContext";
import { useUserContext } from "../context/UserContext";

export const useBackendApi = (
    uniqueKey: string,
    request: QueryFunction,
    onSuccess: any = null,
    errorCallback: Function = () => {}
) => {
    const { updateIsAuthenticated } = useAuthContext();
    const { setUser } = useUserContext();
    const queryClient = useQueryClient();

    return useQuery(uniqueKey, request, {
        onSuccess,
        onError: (error: AxiosError) => {
            if (error.status === 401) {
                queryClient.resetQueries({ queryKey: ["user"] });
                updateIsAuthenticated(false);
                setUser(null);

                errorCallback();
            }
        },
    });
};
