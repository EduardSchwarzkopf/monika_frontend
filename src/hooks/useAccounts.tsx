import { AccountingService } from "../service/accounting/AccountingService";
import { useBackendApi } from "./useBackendApi";

export const useAccountList = () => {
    return useBackendApi("accountList", () => {
        return AccountingService.getAll();
    });
};

export const useAccount = (
    accountId: Number,
    onSuccess: () => void = () => {},
    onError: () => void = () => {}
) => {
    return useBackendApi(
        "account",
        () => {
            return AccountingService.get(accountId);
        },
        onSuccess,
        onError
    );
};
