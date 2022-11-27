import accountList from "../../data/accounts";
import { Stack, Box } from "@chakra-ui/react";
import { AccountCard } from "../../components/AccountCard";

export default function Accounts() {
    let totalBalance = 0;

    console.log("accounts mounted");

    return (
        <>
            <Box w="100%" p={4} mb={12} bg="white">
                Total: {totalBalance}€
            </Box>
            <Stack spacing="4">
                {accountList.map((item) => (
                    <AccountCard
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
