import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../../hooks/useAuthContenxt";

function NotLoggedUsersRoute() {
    const { user } = useAuthContext();

    return user._id === '' ? <Outlet /> : <Navigate to="/" />
}

export default NotLoggedUsersRoute;