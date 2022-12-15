import { TransactionsService } from "../service/accounting/TransactionsService";
import { useBackendApi } from "./useBackendApi";

export const useTransactions = (accountId: number) => {
    // TODO: get start and end from cookie
    const date_start = new Date("2022-01-02T05:00:21.294Z");
    const date_end = new Date("2022-02-01T07:00:21.294Z");

    return useBackendApi({
        uniqueKey: ["transactions", accountId],
        request: () => {
            return TransactionsService.getAll({
                account_id: accountId,
                date_start: date_start.toISOString(),
                date_end: date_end.toISOString(),
            });
        },
    });
};
