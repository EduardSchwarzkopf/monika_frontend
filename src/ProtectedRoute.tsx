import { Navigate, Outlet } from "react-router-dom";

type ProtectedRouteProps = {
    isLoggedIn: boolean;
};

export default function ProtectedRoute(props: ProtectedRouteProps) {
    if (!props.isLoggedIn) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
}
