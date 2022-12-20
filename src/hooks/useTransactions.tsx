import { useState } from "react";
import { TransactionsService } from "../service/accounting/TransactionsService";
import { getDateFromCookie } from "../utils/CookieUtil";
import { useBackendApi } from "./useBackendApi";

export const useTransactions = (accountId: number) => {
    const [transactionList, setTransactionList] = useState([]);

    const { isSuccess, isError, isLoading, error, refetch } = useBackendApi({
        uniqueKey: ["transactions", accountId],
        request: () => {
            const month = getDateFromCookie();
            const endOfMonth = new Date(
                month.getFullYear(),
                month.getMonth() + 1,
                0
            );

            return TransactionsService.getAll({
                account_id: accountId,
                date_start: month.toISOString(),
                date_end: endOfMonth.toISOString(),
            });
        },
        onSuccess: (data) => setTransactionList(data?.data),
    });

    return { transactionList, isSuccess, isError, isLoading, error, refetch };
};
