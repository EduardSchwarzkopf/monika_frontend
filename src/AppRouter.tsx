import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import Login from "./views/auth/Login";
import { Routes, Route } from "react-router-dom";
import RegisterUser from "./views/auth/RegisterUser";
import ResetPasswordForm from "./views/auth/ResetPasswordForm";
import VerifyEmailForm from "./views/auth/VerifyEmailForm";
import ForgotPasswordForm from "./views/auth/ForgotPassword";
import AccountListView from "./views/accounting/AccountListView";
import AccountView from "./views/accounting/AccountView";
import AuthRoute from "./AuthRoute";
import { useAuthContext } from "./context/AuthContext";
import { useQuery } from "react-query";
import { request } from "./service/request";
import { useUserContext } from "./context/UserContext";
import Loader from "./components/Loader";

export default function AppRouter() {
    const { setUser } = useUserContext();
    const { isAuthenticated, updateIsAuthenticated } = useAuthContext();

    const { data, isSuccess, isLoading } = useQuery(
        "user",
        () => {
            return request({ url: "/users/me" });
        },
        {
            retry: false,
        }
    );

    if (isSuccess) {
        setUser(data.data);
        updateIsAuthenticated(true);
    }

    if (isLoading) {
        return <Loader />;
    }

    return (
        <>
            <Routes>
                <Route
                    element={
                        <AuthRoute
                            canView={isAuthenticated}
                            redirectTo="/login"
                            replace
                        />
                    }
                >
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
                <Route
                    element={
                        <AuthRoute
                            canView={!isAuthenticated}
                            redirectTo="/"
                            replace
                        />
                    }
                >
                    <Route element={<AuthLayout />}>
                        <Route path="/login" element={<Login />}></Route>
                        <Route
                            path="/register"
                            element={<RegisterUser />}
                        ></Route>
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
                </Route>
            </Routes>
        </>
    );
}
