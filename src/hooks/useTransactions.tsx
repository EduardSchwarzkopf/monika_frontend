import { TransactionsService } from "../service/accounting/TransactionsService";
import { getDateFromCookie } from "../utils/CookieUtil";
import { useBackendApi } from "./useBackendApi";

export const useTransaction = ({
    transactionId,
}: {
    transactionId: number | string;
}) => {
    return useBackendApi({
        uniqueKey: ["transaction", transactionId],
        request: () => TransactionsService.get(transactionId),
    });
};

export const useTransactionList = (accountId: number | string) => {
    return useBackendApi({
        uniqueKey: ["transactionList", accountId],
        request: () => {
            const month = getDateFromCookie();
            const endOfMonth = new Date(
                month.getFullYear(),
                month.getMonth() + 1,
                0,
                23,
                59,
                59
            );

            return TransactionsService.getAll({
                account_id: accountId,
                date_start: month.toISOString(),
                date_end: endOfMonth.toISOString(),
            });
        },
    });
};
