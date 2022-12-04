import axios from "axios";
import { useState } from "react";
import { isError, useQuery } from "react-query";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
    const { isError } = useQuery(
        "authenticated",
        () => {
            return axios.get("http://localhost:8000/users/me", {
                withCredentials: true,
            });
        },
        {
            retry: false,
        }
    );

    if (isError) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
}
