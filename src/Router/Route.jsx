import { createBrowserRouter} from "react-router-dom";
import Layout from "../Layouts/Layout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/Forms/SignIn";
import SignUp from "../Pages/Forms/SignUp";
import JobDetails from "../Pages/JobDetails/JobDetails";
import AddJob from "../Pages/AddJob/AddJob";
import MyBids from "../Pages/MyBids/MyBids";
import MyPostedJobs from "../Pages/MyPostedJobs/MyPostedJobs";
import BidRequests from "../Pages/BidRequests/BidRequests";
import UpdateJob from "../Pages/UpdateJob/UpdateJob";
import PrivateRoute from "./PrivateRoute";
import AllJobs from "../Pages/AllJobs/AllJobs";

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
            path : 'jobDetails/:id', 
            element : <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
            loader : ({params}) => fetch(`${import.meta.env.VITE_API_URL}/jobs/${params.id}`)
        },
        {
            path : 'updateJob/:id', 
            element : <PrivateRoute><UpdateJob></UpdateJob></PrivateRoute>,
            loader : ({params}) => fetch(`${import.meta.env.VITE_API_URL}/jobs/${params.id}`)
        },
        {
            path : 'addJob', 
            element : <PrivateRoute><AddJob></AddJob></PrivateRoute>
        },
        {
            path : 'myBids', 
            element : <PrivateRoute><MyBids></MyBids></PrivateRoute>
        },
        {
            path : 'myPostedJobs', 
            element : <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
        },
        {
            path : 'bidRequest', 
            element : <PrivateRoute><BidRequests></BidRequests></PrivateRoute>
        },
        {
            path : 'allJobs', 
            element : <AllJobs></AllJobs>
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