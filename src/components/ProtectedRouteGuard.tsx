import { PropsWithChildren } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useToken from "../hooks/useToken";

export function ProtectedRouteGuard({ children }: PropsWithChildren) {
    const token = useToken();
    const { pathname } = useLocation();

    if (!token && pathname !== "/cadastro" && pathname !== "/login") {
        return <Navigate to="/login" />;
    }

    return <>{children}</>;
}
