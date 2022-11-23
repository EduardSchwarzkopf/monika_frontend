import Auth from "./layouts/Auth";
import Dashboard from "./layouts/Dashboard";
import Login from "./views/auth/Login";
import { Routes, Route } from "react-router-dom";
import RegisterUser from "./views/auth/RegisterUser";
import ResetPasswordForm from "./views/auth/ResetPasswordForm";
import VerifyEmailForm from "./views/auth/VerifyEmailForm";
import ForgotPasswordForm from "./views/auth/ForgotPassword";
import Accounts from "./views/accounting/Accounts";

export default function App() {
    return (
        <>
            <Dashboard>
                <Routes>
                    <Route path="/" element={<Accounts />} />
                    <Route path="/accounts" element={<Accounts />} />
                    <Route
                        path="/accounts/:accountId"
                        element={"Acccount Detailed View"}
                    />
                    <Route
                        path="accounts/:accountId/transactions/:transactionId"
                        element={"Transaction View"}
                    ></Route>
                </Routes>
            </Dashboard>
            <Auth>
                <Routes>
                    <Route path="/login" element={<Login />}></Route>
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
                </Routes>
            </Auth>
        </>
    );
}
