import { Navigate, Outlet } from "react-router-dom";

type AuthRouteProps = {
    canView?: boolean;
    redirectTo: string;
    replace?: boolean;
};

export default function AuthRoute(props: AuthRouteProps) {
    if (props.canView ?? false) {
        return <Outlet />;
    }
    return <Navigate to={props.redirectTo} replace={props.replace ?? false} />;
}
