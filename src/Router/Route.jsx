import { createBrowserRouter} from "react-router-dom";
import Layout from "../Layouts/Layout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/Forms/SignIn";
import SignUp from "../Pages/Forms/SignUp";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement : <Error></Error>,
    children : [
        {
            path : '/', 
            element : <Home></Home>
        },
        {
            path : 'signIn', 
            element : <SignIn></SignIn>
        },
        {
            path : 'signUp', 
            element : <SignUp></SignUp>
        },
    ]
  },
]);


export default myRouter;