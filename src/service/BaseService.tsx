import request from "./request";

type idType = Number | string;

export const BaseService = (endpoint: string) => {
    const objectURL = (id: idType) => `${endpoint}/${id}`;

    return {
        getAll: () => {
            return request.get(endpoint);
        },

        get: (id: idType) => {
            return request.get(endpoint + id);
        },

        add: (id: idType, data: object) => {
            return request.post(objectURL(id), data);
        },

        update: (id: idType, data: object) => {
            return request.update(objectURL(id), data);
        },

        delete: (id: idType, data: object) => {
            return request.delete(objectURL(id), data);
        },
    };
};
