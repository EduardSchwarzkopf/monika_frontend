import { AccountingService } from "../service/accounting/AccountingService";
import { useBackendApi } from "./useBackendApi";

export const useAccountList = () => {
    return useBackendApi({
        uniqueKey: "accountList",
        request: () => {
            return AccountingService.getAll();
        },
    });
};

export const useAccount = ({
    accountId,
    onSuccess = () => {},
    onError = () => {},
}: {
    accountId: number | string;
    onSuccess?: () => void;
    onError?: () => void;
}) => {
    return useBackendApi({
        uniqueKey: "account",
        request: () => {
            return AccountingService.get(accountId);
        },
        onSuccess,
        errorCallback: onError,
    });
};
