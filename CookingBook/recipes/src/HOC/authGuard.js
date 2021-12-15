import { Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext"

export const isAuth = (Component) => {
    const WrapperComponent = (props) => {
        const { user } = useAuthContext();

        return user
            ? <Component {...props} />
            : <Navigate to='/login'/>
    }

    return WrapperComponent;
}