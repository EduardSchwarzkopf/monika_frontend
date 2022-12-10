import { Stack, Box, Spinner } from "@chakra-ui/react";
import { AccountCard, AccountCardProps } from "../../components/AccountCard";
import { AccountingService } from "../../service/accounting/AccountingService";
import { useBackendApi } from "../../hooks/useBackendApi";

export default function Accounts() {
    let totalBalance = 0;

    const { isLoading, data } = useBackendApi("accountList", () => {
        return AccountingService.getAll();
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
                {data?.data.map((item: AccountCardProps) => (
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
