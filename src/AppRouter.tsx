import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import Login from "./views/auth/Login";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import RegisterUser from "./views/auth/RegisterUser";
import ResetPasswordForm from "./views/auth/ResetPasswordForm";
import VerifyEmailForm from "./views/auth/VerifyEmailForm";
import ForgotPasswordForm from "./views/auth/ForgotPassword";
import AccountListView from "./views/accounting/AccountListView";
import AccountView from "./views/accounting/AccountView";
import { useEffect, useState } from "react";
import ProtectedRoute from "./ProtectedRoute";
import axios from "axios";
import { useQuery } from "react-query";
import { Spinner } from "@chakra-ui/react";

export default function AppRouter() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const {
        data: userData,
        isLoading,
        isError,
        error,
    } = useQuery("authenticated", () => {
        return axios.get("http://localhost:8000/users/me", {
            withCredentials: true,
        });
    });

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h2>error</h2>;
    }

    setIsLoggedIn(userData?.status === 200);

    async function handleLogin(username: string, password: string) {
        const response = await axios.post(
            "http://localhost:8000/auth/login",
            new URLSearchParams({
                username: "king.arthur@camelot.bt",
                password: "guinevere",
            }),
            {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );
        setIsLoggedIn(!!response.status);
    }

    useEffect(() => {
        navigate("/", { replace: true });
    }, [isLoggedIn]);

    return (
        <>
            {/* TODO: Check if use is logged in*/}

            <Routes>
                <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
                    <Route element={<DashboardLayout />}>
                        <Route path="/" element={<AccountListView />} />
                        <Route path="/accounts" element={<AccountListView />} />
                        <Route
                            path="/accounts/:accountId"
                            element={<AccountView />}
                        />
                        <Route
                            path="accounts/:accountId/transactions/:transactionId"
                            element={"Transaction View"}
                        ></Route>
                    </Route>
                </Route>
            </Routes>
            <Routes>
                <Route element={<AuthLayout />}>
                    <Route
                        path="/login"
                        element={<Login onLogin={handleLogin} />}
                    ></Route>
                    <Route path="/register" element={<RegisterUser />}></Route>
                    <Route
                        path="/reset-password"
                        element={<ResetPasswordForm />}
                    ></Route>
                    <Route
                        path="/verify-email"
                        element={<VerifyEmailForm />}
                    ></Route>
                    <Route
                        path="/forgot-password"
                        element={<ForgotPasswordForm />}
                    ></Route>
                    {/* TODO: Add 404 Route<Route path="*" element={<NoFound />}></Route> */}
                </Route>
            </Routes>
        </>
    );
}
