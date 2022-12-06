import axios, { AxiosError, AxiosResponse } from "axios";

const URL =
    process.env.NODE_ENV === "production"
        ? "https://api.monika.finance"
        : "http://localhost:8000";

const client = axios.create({ baseURL: URL });

// GET: request({"/accounts"})
// POST: request({"/accounts"}, method: 'post' data: data)
export const request = ({ ...options }) => {
    client.defaults.withCredentials = true;
    const onSuccess = (response: AxiosResponse) => response;
    const onError = (error: AxiosError) => {
        // redirect to login page on 401
        console.log("errorStatus:", error);
        if (error.status === 401) {
            console.log("unauthenticaed");
        }

        return error;
    };

    return client(options).then(onSuccess).catch(onError);
};
