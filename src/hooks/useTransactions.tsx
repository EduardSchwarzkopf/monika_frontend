import { TransactionsService } from "../service/accounting/TransactionsService";
import { getDateFromCookie } from "../utils/CookieUtil";
import { useBackendApi } from "./useBackendApi";

export const useTransactions = (accountId: number) => {
    return useBackendApi({
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
    });
};
