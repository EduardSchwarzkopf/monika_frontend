import accountList from "../../data/accounts";
import { Stack, Box, Spinner } from "@chakra-ui/react";
import { AccountCard } from "../../components/AccountCard";
import { useQuery } from "react-query";
import axios from "axios";

export default function Accounts() {
    let totalBalance = 0;
    const { isLoading, data } = useQuery("accounts", () => {
        return axios.get("http://localhost:8000/accounts", {
            withCredentials: true,
        });
    });

    if (isLoading) {
        return <Spinner />;
    }

    console.log({ data });

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
