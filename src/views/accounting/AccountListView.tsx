import { Stack, Box, Spinner } from "@chakra-ui/react";
import { AccountCard } from "../../components/AccountCard";
import { useQuery } from "react-query";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useAuthentication } from "../../hooks/useAuthentication";
import { request } from "../../service/request";

export default function Accounts() {
    let totalBalance = 0;

    const { isLoading, data, error, isError } = useQuery("accounts", () => {
        return request({ url: "/accounts" });
    });

    if (isLoading) {
        return <Spinner />;
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
