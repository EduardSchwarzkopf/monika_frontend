import { AxiosError } from "axios";
import { QueryFunction, useQuery, useQueryClient } from "react-query";
import { useAuthContext } from "../context/AuthContext";
import { useUserContext } from "../context/UserContext";

export const useBackendApi = ({
    uniqueKey,
    request,
    onSuccess = () => {},
    errorCallback = () => {},
    staleTime = Infinity,
}: {
    uniqueKey: string | (string | number)[];
    request: QueryFunction;
    onSuccess?: (data: unknown) => void;
    errorCallback?: () => void;
    staleTime?: number;
}) => {
    const { updateIsAuthenticated } = useAuthContext();
    const { setUser } = useUserContext();
    const queryClient = useQueryClient();

    return useQuery(uniqueKey, request, {
        staleTime: staleTime,
        onSuccess,
        onError: (error: AxiosError) => {
            if (error.status === 401) {
                queryClient.resetQueries({ queryKey: ["user"] });
                updateIsAuthenticated(false);
                setUser(null);
            }
            errorCallback();

            return error;
        },
    });
};
