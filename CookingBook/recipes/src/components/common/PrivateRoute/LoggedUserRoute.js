import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../../hooks/useAuthContext";

function LoggedUserRoute() {
    const { user } = useAuthContext();

    return user.email ? <Navigate to="/"/> : <Outlet />;
}

export default LoggedUserRoute;