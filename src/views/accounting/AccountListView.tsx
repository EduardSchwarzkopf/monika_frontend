import { Stack, Box, Spinner } from "@chakra-ui/react";
import { AccountCard } from "../../components/AccountCard";
import { useQuery, useQueryClient } from "react-query";
import { request } from "../../service/request";
import { useAuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";

export default function Accounts() {
    let totalBalance = 0;
    const { updateIsAuthenticated } = useAuthContext();
    const { setUser } = useUserContext();
    const queryClient = useQueryClient();

    const { isLoading, data, error, isError } = useQuery("accounts", () => {
        return request({ url: "/accounts" });
    });

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        if (error.status === 401) {
            queryClient.resetQueries({ queryKey: ["user"] });
            updateIsAuthenticated(false);
            setUser(null);
        }
    }

    return (
        <>
            <Box w="100%" p={4} mb={12} bg="white">
                Total: {totalBalance}€
            </Box>
            <Stack spacing="4">
                {data?.data.map((item: any) => (
                    <AccountCard
                        key={item.id}
                        id={item.id}
                        label={item.label}
                        description={item.description}
                        balance={item.balance}
                    />
                ))}
            </Stack>
        </>
    );
}
