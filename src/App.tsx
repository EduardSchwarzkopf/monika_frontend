import Auth from "./layouts/Auth";
import Dashboard from "./layouts/Dashboard";
import Login from "./pages/Auth/Login";
import { Routes, Route } from "react-router-dom";
import RegisterUser from "./pages/Auth/RegisterUser";
import ResetPasswordForm from "./pages/Auth/ResetPasswordForm";
import VerifyEmailForm from "./pages/Auth/VerifyEmailForm";
import ForgotPasswordForm from "./pages/Auth/ForgotPassword";

export default function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Dashboard children="Main"></Dashboard>}
        ></Route>
      </Routes>
      <Auth>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<RegisterUser />}></Route>
          <Route path="/reset-password" element={<ResetPasswordForm />}></Route>
          <Route path="/verify-email" element={<VerifyEmailForm />}></Route>
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
