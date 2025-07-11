import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading) return <p className=" text-red-500 text-center text-3xl">loading........</p>
    if(user) return children

    return <Navigate to='/signIn' state={location.pathname} replace={true}></Navigate>
};

export default PrivateRoute;