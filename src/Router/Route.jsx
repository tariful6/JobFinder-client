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
            element : <JobDetails></JobDetails>,
            loader : ({params}) => fetch(`${import.meta.env.VITE_API_URL}/jobs/${params.id}`)
        },
        {
            path : 'updateJob/:id', 
            element : <UpdateJob></UpdateJob>,
            loader : ({params}) => fetch(`${import.meta.env.VITE_API_URL}/jobs/${params.id}`)
        },
        {
            path : 'addJob', 
            element : <AddJob></AddJob>
        },
        {
            path : 'myBids', 
            element : <MyBids></MyBids>
        },
        {
            path : 'myPostedJobs', 
            element : <MyPostedJobs></MyPostedJobs>
        },
        {
            path : 'bidRequest', 
            element : <BidRequests></BidRequests>
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