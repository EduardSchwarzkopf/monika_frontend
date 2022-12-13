import { useState } from "react";
import { TransactionsService } from "../service/accounting/TransactionsService";
import { useBackendApi } from "./useBackendApi";

export const useTransactions = (accountId: number) => {
    const [transactionList, setTransactionList] = useState([]);

    // TODO: get start and end from cookie
    const date_start = new Date("2022-01-02T05:00:21.294Z");
    const date_end = new Date("2022-02-01T07:00:21.294Z");

    const { isSuccess, isError, isLoading, error } = useBackendApi(
        `transactions_${accountId}`,
        () => {
            return TransactionsService.getAll({
                account_id: accountId,
                date_start: date_start.toISOString(),
                date_end: date_end.toISOString(),
            });
        },
        (data) => setTransactionList(data?.data)
    );

    return { transactionList, isSuccess, isError, isLoading, error };
};
