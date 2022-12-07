import request from "./request";

export const BaseService = (endpoint: string) => {
    const objectURL = (id: Number | string) => `${endpoint}/${id}`;

    return {
        getAll: () => {
            return request.get(endpoint + "/");
        },

        get: (accountId: Number) => {
            return request.get(endpoint + accountId);
        },

        add: (accountId: Number, data: object) => {
            return request.post(objectURL(accountId), data);
        },

        update: (accountId: Number, data: object) => {
            return request.update(objectURL(accountId), data);
        },

        delete: (accountId: Number, data: object) => {
            return request.delete(objectURL(accountId), data);
        },
    };
};
