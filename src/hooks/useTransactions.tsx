import { TransactionsService } from "../service/accounting/TransactionsService";
import { useBackendApi } from "./useBackendApi";

export const useTransactions = (
    accountId: number,
    date_start: Date,
    date_end: Date,
    onSuccess: () => void = () => {},
    onError: () => void = () => {}
) => {
    return useBackendApi(
        "transactions",
        () => {
            return TransactionsService.getAll({
                accountId: accountId,
                date_start: date_start.toISOString(),
                date_end: date_end.toISOString(),
            });
        },
        onSuccess,
        onError
    );
};
