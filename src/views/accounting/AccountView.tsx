import { AccountCard } from "../../components/AccountCard";
import { Heading, Box, Stack } from "@chakra-ui/react";
import { useBackendApi } from "../../hooks/useBackendApi";
import { AccountingService } from "../../service/accounting/AccountingService";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import { TransactionCard } from "../../components/TransactionCard";
import { TransactionsService } from "../../service/accounting/TransactionsService";

export default function AccountView() {
    const { accountId } = useParams();
    const navigate = useNavigate();

    const navigateToOverview = () => navigate("/accounts");

    if (accountId === undefined) {
        return navigateToOverview();
    }

    const { isLoading, data } = useBackendApi(
        "account",
        () => {
            return AccountingService.get(parseInt(accountId));
        },
        undefined,
        navigateToOverview
    );

    const { isSuccess, data: transactionData } = useBackendApi(
        "transactions",
        () => {
            return TransactionsService.getAll({
                account_id: accountId,
                date_start: "2022-01-02T05:00:21.294Z",
                date_end: "2022-02-01T07:00:21.294Z",
            });
        },
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
