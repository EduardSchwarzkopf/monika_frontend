import { Stack, Spinner } from "@chakra-ui/react";
import { AccountCard, AccountCardProps } from "../../components/AccountCard";
import { useAccountList } from "../../hooks/useAccounts";

export default function Accounts() {
    const { isLoading, data } = useAccountList();

    if (isLoading) {
        return <Spinner />;
    }

    return (
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
    );
}
