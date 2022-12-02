import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
    isLoggedIn: boolean;
    children: React.ReactNode;
};

export default function ProtectedRoute(
    props: ProtectedRouteProps,
    children: ReactNode
) {
    if (!props.isLoggedIn) {
        return <Navigate to="/login" replace />;
    }

    console.log(children);
    return <>{[children]}</>;
}
