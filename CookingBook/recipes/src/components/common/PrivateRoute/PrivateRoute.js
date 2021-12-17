import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../../hooks/useAuthContext";

function PrivateRoute () {
    const { user } = useAuthContext();

    return user.email ? <Outlet /> : <Navigate to="/login"/>;
};

export default PrivateRoute;