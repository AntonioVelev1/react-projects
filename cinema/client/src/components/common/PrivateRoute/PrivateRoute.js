import { Navigate, Outlet} from "react-router-dom";
import { useAuthContext } from "../../../hooks/useAuthContenxt";

function PrivateRoute() {
    const { user } = useAuthContext();

    return user.id !== '' ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;