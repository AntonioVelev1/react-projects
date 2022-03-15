import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../../hooks/useAuthContenxt";

function NotLoggedUsersRoute() {
    const { user } = useAuthContext();

    return user.id === '' ? <Outlet /> : <Navigate to="/" />
}

export default NotLoggedUsersRoute;