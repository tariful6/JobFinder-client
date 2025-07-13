import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL : import.meta.env.VITE_API_URL,
    withCredentials : true,
})

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const {logOut} = useAuth()
    axiosSecure.interceptors.response.use(res => {
        // console.log('response interceptor ------------------ check');
        return res
    },
    async error => {
        console.log('error from axios Interceptor', error.response);
        if(error.response.status === 401 || error.response.status === 403){     
           await logOut()
           navigate('/signIn')
        }
        return Promise.reject(error)
    }
)
    return axiosSecure
};

export default useAxiosSecure;