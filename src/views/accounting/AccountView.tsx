import { AccountCard } from "../../components/AccountCard";
import { Heading, Box, Stack } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import { TransactionCard } from "../../components/TransactionCard";
import { useAccount } from "../../hooks/useAccounts";
import { useTransactions } from "../../hooks/useTransactions";
import { TransactionType } from "../../types/ReactTypes";
import { MonthPicker } from "../../components/MonthPicker";

export default function AccountView() {
    const { accountId } = useParams();
    const navigate = useNavigate();
    const navigateToOverview = () => navigate("/accounts");

    if (accountId === undefined) {
        navigateToOverview();
        return <></>;
    }

    const accountIdInt = parseInt(accountId);

    const { isLoading, data } = useAccount({
        accountId: accountIdInt,
        onError: navigateToOverview,
    });

    const { transactionList, isSuccess, refetch } =
        useTransactions(accountIdInt);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <>
            <MonthPicker onChange={refetch} />
            <Stack spacing="12">
                <AccountCard
                    id={data?.data.id}
                    label={data?.data.label}
                    description={data?.data.description}
                    balance={data?.data.balance}
                />
                <Box>
                    <Heading>Transactions</Heading>
                    Dateplaceholer
                    <Stack spacing="4">
                        {isSuccess ? (
                            transactionList.map((data: TransactionType) => {
                                return (
                                    <TransactionCard key={data.id} {...data} />
                                );
                            })
                        ) : (
                            <Loader />
                        )}
                    </Stack>
                </Box>
            </Stack>
        </>
    );
}
