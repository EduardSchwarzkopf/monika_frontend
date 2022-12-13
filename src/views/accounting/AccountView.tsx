import { AccountCard } from "../../components/AccountCard";
import { Heading, Box, Stack } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import { TransactionCard } from "../../components/TransactionCard";
import { useAccount } from "../../hooks/useAccounts";
import { useTransactions } from "../../hooks/useTransactions";

export default function AccountView() {
    const { accountId } = useParams();

    const navigate = useNavigate();

    const navigateToOverview = () => navigate("/accounts");

    if (accountId === undefined) {
        return navigateToOverview();
    }
    const accountIdInt = parseInt(accountId);

    const { isLoading, data } = useAccount(
        accountIdInt,
        undefined,
        navigateToOverview
    );

    const { isSuccess, data: transactionData } = useTransactions(
        accountIdInt,
        new Date("2022-01-02T05:00:21.294Z"),
        new Date("2022-02-01T07:00:21.294Z"),
        undefined,
        navigateToOverview
    );

    if (isLoading) {
        return <Loader />;
    }

    let transactionCardList = <Loader />;
    if (isSuccess) {
        transactionCardList = transactionData.data.map((data) => {
            console.log(data);
            return <TransactionCard {...data} />;
        });
    }

    return (
        <>
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
                    <Stack spacing="4">{transactionCardList}</Stack>
                </Box>
            </Stack>
        </>
    );
}
