import axios, { AxiosError, AxiosResponse } from "axios";

const URL =
    process.env.NODE_ENV === "production"
        ? "https://api.monika.finance"
        : "http://localhost:8000";

const client = axios.create({ baseURL: URL });

// GET: request({"/accounts"})
// POST: request({"/accounts"}, method: 'post' data: data)
const request = async ({ ...options }) => {
    client.defaults.withCredentials = true;
    const onSuccess = (response: AxiosResponse) => response;

    const onError = (error: AxiosError) => {
        return Promise.reject(error.response);
    };

    return client(options).then(onSuccess).catch(onError);
};

const mutationRequest = (endpoint: string, data: object, method: string) => {
    return request({ url: endpoint, data: data, method: method });
};

export default {
    get: (endpoint: string, parameter: object = {}) => {
        return request({ url: endpoint, params: { ...parameter } });
    },

    post: (endpoint: string, data: object) => {
        return mutationRequest(endpoint, data, "post");
    },

    update: (endpoint: string, data: object) => {
        return mutationRequest(endpoint, data, "put");
    },

    delete: (endpoint: string, data: object) => {
        return mutationRequest(endpoint, data, "delete");
    },
};
