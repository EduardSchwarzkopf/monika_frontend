import { CategoryService } from "../service/accounting/CategoryService";
import { useBackendApi } from "./useBackendApi";

export const useCategoryList = () => {
    return useBackendApi({
        uniqueKey: "categoryList",
        request: () => {
            return CategoryService.getAll();
        },
    });
};
